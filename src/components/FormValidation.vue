<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="nama" class="fw-bold">Nama</label>
      <input
        type="text"
        v-model="userData.nama"
        name="nama"
        id="nama"
        class="form-control"
        :class="{ 'is-invalid': isSubmit && v$.userData.nama.$error }"
      />
      <div v-if="isSubmit && v$.userData.nama.$error" class="invalid-feedback">
          <span v-if="v$.userData.nama.required.$invalid">*Wajib diisi</span>
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-block btn-success">Submit Data</button>
    </div>
  </form>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      userData: {
        nama: "",
      },
      isSubmit: false,
    };
  },
  validations() {
    return {
      userData: {
        nama: {
          required
        },
      },
    };
  },
  methods: {
    onSubmit() {
      this.isSubmit = true;
      this.v$.$touch();
      if(this.v$.error) return
    },
  },
};
</script>
