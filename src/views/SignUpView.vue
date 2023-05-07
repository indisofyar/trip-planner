<template>
  <section
    style="display: flex; padding: 15px; justify-content: space-between; align-items: center;right: 0; left: 0; top: 0; z-index: 12; flex-direction: column; height: 100%; position: fixed; width: 100%; background: white;">
    <div>
      <img src="../assets/logo.svg" style="width: 50px; height: 50px; margin-bottom: 20px;"/>
    </div>
    <div style="width: 300px; display: flex; flex-direction: column; padding-bottom: 90px;">
      <h1 class="text-center" style="font-size: 30px; margin-bottom: 20px;">Sign up</h1>
      <div style="position: relative; margin-bottom: 10px;">
        <input type="text" class="inputText form-control w-100" required />
        <span class="floating-label">Username</span>
      </div>
      <div style="position: relative; margin-bottom: 10px;">
        <input type="text" class="inputText form-control w-100" required />
        <span class="floating-label">Email <span class="text-secondary">(optional)</span></span>
      </div>
    
      <div style="position: relative; margin-bottom: 10px;">
        <input type="password" class="inputText form-control w-100" required id="passwordField" v-model="password"/>
        <span class="floating-label">Password</span>
        <i class="bi " style="position: absolute; right: 18px; top: 8px; font-size: 20px;" @click="togglePassword" :class="{'bi-eye-fill' : showPassword, 'bi-eye-slash-fill' : !showPassword}" ></i>
      </div>
      <div style="position: relative; margin-bottom: 5px;">
        <input type="password" class="inputText form-control w-100" required id="passwordFieldTwo"/>
        <span class="floating-label">Confirm password</span>
      </div>
      <span style="font-size: 12px;" :class="{'text-success' : isValidPassword}">Must be more than 8 characters</span>
      <button class="btn btn-primary expanded w-100 h-45" style="margin-bottom: 10px; margin-top: 30px;">Sign up</button>
      <span class="text-center">Already have an account? <RouterLink to="/login">Log in</RouterLink></span>
    </div>
    <div>
      <RouterLink :to="{ name: about }">About</RouterLink> |
      <RouterLink :to="{ name: getting - started }">Getting started</RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  data(){
    return{
      showPassword: false,
      password: "",
    }
  },
  computed:{
    isValidPassword(){
      return this.password.length > 8;
    }
  },  
  methods:{
    togglePassword(){
      if (document.getElementById("passwordField").type == "password"){
        document.getElementById("passwordField").type = "text";
        document.getElementById("passwordFieldTwo").type = "text";
        this.showPassword = true;
      }else{
        document.getElementById("passwordField").type = "password";
        document.getElementById("passwordFieldTwo").type = "password";
        this.showPassword = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
input:focus~.floating-label,
input:not(:focus):valid~.floating-label {
  top:3px;
  bottom: 10px;
  left: 13px;
  font-size: 10px;
  opacity: 0.8;
  
}

.inputText {
  font-size: 16px;
  width: 200px;
  padding-top: 14px;
  height: 45px;
}

.h-45{
  height: 45px;
}
.floating-label {
  position: absolute;
  pointer-events: none;
  left: 17px;
  top: 10px;
  transition: 0.2s ease all;
}
</style>
