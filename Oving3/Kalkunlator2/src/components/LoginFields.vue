<script lang="ts">
import router from '@/router';
import {isLoginSuccessful} from "../utils/loginutils.js"
import {loginRequest} from "../utils/httputils.js"


</script>


<template>
<div id="loginContainer">
    <div id="loginTitle">
      <label>Please login!</label>
    </div>
    <div id="username">
      <label id="usernameLabel">Username:</label>
      <textarea v-model="username" id="username"></textarea>
    </div>
    <div id="password">
      <label id="passwordLabel">Password: </label>
      <textarea v-model="password" id="password"></textarea>
      <button v-on:click="handleLoginClick" id="signinbutton">Sign in</button>
      <label id="loginstatusLabel">{{ loginStatus }}</label>
    </div>
</div>

</template>


<style scoped>

</style>
