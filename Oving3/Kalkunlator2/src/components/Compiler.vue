<template>
    <div class="outer-box">
        <div class="inner-box">
            <p>Her kan du skrive kode som skal kompileres i Python3</p>
            <form @submit.prevent="compile">
                <textarea v-model="code" placeholder="Skriv kode her" id="code-input" name="code-input"></textarea>
                <button @click="compile">Kompiler</button>
            </form>
        </div>
        <div v-if="result.length > 0" class="inner-box2">
            <p>Resultat</p>
            <textarea v-model="result" placeholder="Resultat" id="result-input" name="result-input" readonly></textarea>
        </div>
    </div>

</template>

<script lang="ts">
import axios from "axios";

export default {
    name: "Compiler",
    data() {
        return {
            code: "",
            result: ""
        };
    },
    methods: {
        async compile() {
            console.log("Button clicked")
            await axios.post("http://127.0.0.1:5000/compiler", {
                code: this.code
            })
            .then(response => {
                console.log("reponse", response.data);
                this.result = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.outer-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
}

.inner-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 50vw;
    background-color: #fff;
}

.inner-box2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
    width: 50vw;
    background-color: #fff;
}

textarea {
    width: 100%;
    height: 100%;
    resize: none;
}

</style>