<template>
  <div class="container app-container">
    <h2 class="fw-bold">Aplikasi Permohonan Bantuan Covid-19 JABAR</h2>
    <form-validation />
  </div>
</template>

<script>
import FormValidation from "@/components/FormValidation";
export default {
  name: "App",
  components: {
    "form-validation": FormValidation,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
#app {
  font-family: 'Quicksand',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container{
  max-width: 500px;
  text-align: left;
}
</style>
