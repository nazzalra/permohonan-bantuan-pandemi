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
      <label for="nik" class="fw-bold">NIK</label>
      <input
        type="number"
        v-model="userData.nik"
        id="nik"
        name="nik"
        class="form-control"
        :class="{ 'is-invalid': isSubmit && v$.userData.nik.$error }"
      />
      <div v-if="isSubmit && v$.userData.nik.$error" class="invalid-feedback">
        <span v-if="v$.userData.nik.required.$invalid">*Wajib diisi</span>
        <span v-else-if="v$.userData.nik.numeric.$invalid">NIK hanya terdiri dari angka</span>
        <span v-else-if="v$.userData.nik.minLength.$invalid">NIK kurang dari 16 digit</span>
        <span v-else-if="v$.userData.nik.maxLength.$invalid">NIK lebih dari 16 digit</span>
      </div>
    </div>

    <div class="form-group">
      <label for="nkk" class="fw-bold">NKK</label>
      <input
        type="number"
        v-model="userData.nkk"
        id="nkk"
        name="nkk"
        class="form-control"
        :class="{ 'is-invalid': isSubmit && v$.userData.nkk.$error }"
      />
      <div v-if="isSubmit && v$.userData.nkk.$error" class="invalid-feedback">
        <span v-if="v$.userData.nkk.required.$invalid">*Wajib diisi</span>
        <span v-else-if="v$.userData.nkk.numeric.$invalid">NIK hanya terdiri dari angka</span>
        <span v-else-if="v$.userData.nkk.minLength.$invalid">NIK kurang dari 16 digit</span>
        <span v-else-if="v$.userData.nkk.maxLength.$invalid">NIK lebih dari 16 digit</span>
      </div>
    </div>

    <div class="form-group">
      <button class="btn btn-block btn-success">Submit Data</button>
    </div>
  </form>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, numeric, maxLength, minLength } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      userData: {
        nama: "",
        nik: "",
        nkk: "",
      },
      isSubmit: false,
    };
  },
  validations() {
    return {
      userData: {
        nama: {
          required,
        },
        nik: {
          required,
          numeric,
          maxLength: maxLength(16),
          minLength: minLength(16),
        },
        nkk: {
          required,
          numeric,
          maxLength: maxLength(16),
          minLength: minLength(16),
        },
      },
    };
  },
  methods: {
    onSubmit() {
      this.isSubmit = true;
      this.v$.$touch();
      if (this.v$.error) return;
    },
  },
};
</script>
