<script lang="ts">
import BaseInput from "./BaseInput.vue";

export default {
    name: "Kontaktskjema",
    data() {
        return {
            skjema: {
                navn: "",
                epost: "",
                tekst: "",
                rating: 0,
            },
        };
    },
    methods: {
        send() {
            console.log(this.skjema.navn);
            console.log(this.skjema.epost);
            console.log(this.skjema.tekst);
            console.log(this.skjema.rating);
        }
    },
    computed: {
        isDisabled() {
            return !(this.skjema.navn.length > 0 && this.skjema.epost.length > 0 && this.skjema.tekst.length > 0 && this.skjema.rating > 0);
        }
    }
}
</script>



<template>
    <div class="kontaktskjema">
        <h1>Kontaktskjema</h1>
        <form>
            <BaseInput label="Navn" v-model="skjema.navn" type="text" />
            <label for="navn">Navn</label>
            <input type="text" id="navn" name="navn" placeholder="Ditt navn..." v-model="skjema.navn">
            <label for="epost">E-post</label>
            <input type="text" id="epost" name="epost" placeholder="Din e-post..." v-model="skjema.epost">
            <label for="rating" >Rating:</label>
                <select id="rating" v-model="skjema.rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            <label for="emne">Tilbakemelding</label>
            <textarea id="emne" name="emne" placeholder="Skriv noe..." v-model="skjema.tekst"></textarea>
            <input type="submit" value="Send" @click="send" :disabled="isDisabled">
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