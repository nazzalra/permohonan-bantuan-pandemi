<template>
  <form-validation />
</template>

<script>
import FormValidation from "@/components/FormValidation"
export default {
  name: 'App',
  components: {
    'form-validation': FormValidation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
