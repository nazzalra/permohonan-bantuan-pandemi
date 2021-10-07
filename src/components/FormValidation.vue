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
        :class="{ 'is-invalid': isError('nama') }"
      />
      <div v-if="isError('nama')" class="invalid-feedback">
        <span v-if="isInvalid('nama', 'required')">*Wajib diisi</span>
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
        :class="{ 'is-invalid': isError('nik') }"
      />
      <div v-if="isError('nik')" class="invalid-feedback">
        <span v-if="isInvalid('nik', 'required')">*Wajib diisi</span>
        <span v-else-if="isInvalid('nik', 'numeric')">NIK hanya terdiri dari angka</span>
        <span v-else-if="isInvalid('nik', 'minLength')">NIK kurang dari 16 digit</span>
        <span v-else-if="isInvalid('nik', 'maxLength')">NIK lebih dari 16 digit</span>
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
        :class="{ 'is-invalid': isError('nkk') }"
      />
      <div v-if="isError('nkk')" class="invalid-feedback">
        <span v-if="isInvalid('nkk', 'required')">*Wajib diisi</span>
        <span v-else-if="isInvalid('nkk', 'numeric')">NKK hanya terdiri dari angka</span>
        <span v-else-if="isInvalid('nkk', 'minLength')">NKK kurang dari 16 digit</span>
        <span v-else-if="isInvalid('nkk', 'maxLength')">NKK lebih dari 16 digit</span>
      </div>
    </div>

    <div class="form-group">
      <label for="foto_ktp">Foto KTP</label>
      <input
        type="file"
        @change="changeFoto($event, 'foto_ktp')"
        id="foto_ktp"
        name="foto_ktp"
        class="form-control"
        :class="{ 'is-invalid': isError('foto_ktp') }"
      />
      <div v-if="isError('foto_ktp')" class="invalid-feedback">
        <span v-if="isInvalid('foto_ktp', 'required')">*Wajib diupload</span>
        <span v-else-if="isInvalid('foto_ktp', 'imgFilesize')"
          >Ukuran file melebihi ukuran maksimal ( > 2MB)</span
        >
        <span v-else-if="isInvalid('foto_ktp', 'imgFormat')"
          >Format file tidak didukung. Gunakan format JPG,JPEG,PNG atau BMP</span
        >
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
import { imgFilesize, imgFormat } from "@/customValidator";

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
        foto_ktp: "",
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
        foto_ktp: {
          required,
          imgFilesize,
          imgFormat,
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
    isError(data) {
      return this.isSubmit && this.v$.userData[data].$error;
    },
    changeFoto(e, data) {
      if (!e.target.files.length) {
        this.userData[data] = "";
        return;
      }
      this.userData[data] = e.target.files[0];
    },
    isInvalid(data, validator) {
      return this.v$.userData[data][validator].$invalid;
    },
  },
};
</script>
