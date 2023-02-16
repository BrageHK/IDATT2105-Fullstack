<script lang="ts">
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useField, useForm } from 'vee-validate'
import { inject } from 'vue';
import type { Store } from 'vuex';

export default {
    name: "Kontaktskjema",
    setup() {
        function onSubmit() {
            alert("Submitted!");
        }

        const store = inject("store") as Store<{
            feedback: { [key: string]: string };
        }>;

        const validations = {
            epost: (value: any) => {
                if (!value) return 'This field is required'

                const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!regex.test(String(value).toLowerCase())) {
                    return 'Please enter a valid email address'
                }
      
                return true
            },
            navn: (value: any) => {
                if (!value) return 'This field is required'
                if (value.length < 2) return 'Name must be at least 2 characters'
                return true
            },
        }

        useForm({
            validationSchema: validations
        })

        const { value: epost, errorMessage: emailError } = useField('epost')
        const { value: navn, errorMessage: navnError } = useField('navn')

        return {
            onSubmit,
            epost,
            emailError,
            navn,
            navnError,
            store
        };
    },
    data() {
        return {
            skjema: {
                navn: "",
                epost: "",
                tekst: "",
                rating: 0,
                id: "",
            },
        };
    },
    methods: {
        send() {
            console.log("Hello")
            const event = {
                ...this.skjema,
                id: uuidv4(),
            }
            axios.post('http://127.0.0.1:5000/', event)
            .then(() => {
                this.store.dispatch("setFeedbackInfo", event);
                console.log("response", event);
                this.skjema = {
                navn: "",
                epost: "",
                tekst: "",
                rating: 0,
                id: "",
                };
            },
            alert("Takk for din tilbakemelding!")
            )
            .catch(error => {
                console.log(error);
                alert(error);
            })

            
        },
        isValidMail() {
            return this.skjema.epost.length > 0 && this.skjema.epost.includes("@") && this.skjema.epost.includes(".");
        }
    },
    computed: {
        isDisabled() {
            return !(this.skjema.navn.length > 0 && this.skjema.epost.length > 0 && this.skjema.tekst.length > 0 && this.skjema.rating > 0 && this.isValidMail());
        }
    }
}

//<p>{{  store.state.feedback }}</p>
</script>



<template>
    <div class="kontaktskjema">
        <h1>Kontaktskjema</h1>
        <p>Hva tenker du om kalkulatoren?</p>
        
        <form @submit.prevent="send">
            <label for="navn">Navn</label>
            <input type="text" id="navn" name="navn" placeholder="Ditt navn..." v-model="skjema.navn">
            <label for="epost">E-post</label>
            <input type="text" id="epost" name="epost" placeholder="Din e-post..." v-model="skjema.epost">
            <label id="ratingWrap" for="rating" >Rating:</label>
                <select id="rating" v-model="skjema.rating">
                    <option v-for="number in 5">{{ number }}</option>
                </select>
            <label for="emne">Tilbakemelding</label>
            <textarea id="emne" name="emne" placeholder="Skriv noe..." v-model="skjema.tekst"></textarea>
            <input type="submit" value="Send" :disabled="isDisabled" id="sendButton">
        </form>
    </div>
</template>



<style>
#emne {
    height: 200px;
}

.kontaktskjema {
    background-color: #f1f1f1;
    padding: 20px;
    border: 1px solid #d3d3d3;
    margin: 20px;
    width: 600px;
}

.kontaktskjema input[type=text], .kontaktskjema select, .kontaktskjema textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}   

.kontaktskjema input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.kontaktskjema input[type=submit]:disabled {
    background-color: gray;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: auto;
}

.kontaktskjema input[type=submit]:disabled:hover {
    background-color: gray;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: auto;
}

.kontaktskjema input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.kontaktskjema input[type=submit]:hover {
    background-color: #45a049;
}
</style>