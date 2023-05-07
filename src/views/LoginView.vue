<template>
  <section
    style="display: flex; padding: 15px; justify-content: space-between; align-items: center;right: 0; left: 0; top: 0; z-index: 12; flex-direction: column; height: 100%; position: fixed; width: 100%; background: white;">
    <div>
      <img src="../assets/logo.svg" style="width: 50px; height: 50px; margin-bottom: 20px;"/>
    </div>
    <div style="width: 300px; display: flex; flex-direction: column; padding-bottom: 70px;">
      <h1 class="text-center" style="font-size: 30px; margin-bottom: 20px;">Welcome back</h1>
      <div style="position: relative; margin-bottom: 10px;">
        <input type="text" class="inputText form-control w-100" required />
        <span class="floating-label">Email or username</span>
      </div>
      <div style="position: relative; margin-bottom: 30px;">
        <input type="password" class="inputText form-control w-100" required />
        <span class="floating-label">Password</span>
        <i class="bi bi-eye-slash-fill" style="position: absolute; right: 18px; top: 5px;"></i>
      </div>

      <button class="btn btn-primary expanded w-100 h-45">Login</button>
      <span class="text-center">Don't have an account? <RouterLink to="/sign-up">Sign up</RouterLink></span>
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
