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
      <label for="foto_ktp" class="fw-bold">Foto KTP</label>
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
      <label for="foto_kk" class="fw-bold">Foto KK</label>
      <input
        type="file"
        @change="changeFoto($event, 'foto_kk')"
        id="foto_kk"
        name="foto_kk"
        class="form-control"
        :class="{ 'is-invalid': isError('foto_kk') }"
      />
      <div v-if="isError('foto_kk')" class="invalid-feedback">
        <span v-if="isInvalid('foto_kk', 'required')">*Wajib diupload</span>
        <span v-else-if="isInvalid('foto_kk', 'imgFilesize')"
          >Ukuran file melebihi ukuran maksimal ( > 2MB)</span
        >
        <span v-else-if="isInvalid('foto_kk', 'imgFormat')"
          >Format file tidak didukung. Gunakan format JPG,JPEG,PNG atau BMP</span
        >
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-5">
          <label for="umur" class="fw-bold">Umur</label>
          <input
            type="number"
            v-model="userData.umur"
            id="umur"
            name="umur"
            class="form-control"
            :class="{ 'is-invalid': isError('umur') }"
          />
          <div v-if="isError('umur')" class="invalid-feedback">
            <span v-if="isInvalid('umur', 'required')">*Wajib diisi</span>
            <span v-else-if="isInvalid('umur', 'numeric')">*Umur hanya terdiri dari angka</span>
            <span v-else-if="isInvalid('umur', 'minValue')">*Minimal berumur 25 tahun</span>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="jenis_kelamin" class="fw-bold">Jenis Kelamin</label>
      <div class="form-group">
        <div
          class="form-check form-check-inline"
          :class="{ 'is-invalid': isError('jenis_kelamin') }"
        >
          <input
            class="form-check-input"
            type="radio"
            name="jenis_kelamin"
            v-model="userData.jenis_kelamin"
            id="lakilaki"
            :value="JENISKELAMIN.L"
          />
          <label class="form-check-label fw-normal" for="lakilaki">Laki-Laki</label>
        </div>
        <div
          class="form-check form-check-inline"
          :class="{ 'is-invalid': isError('jenis_kelamin') }"
        >
          <input
            class="form-check-input"
            type="radio"
            name="jenis_kelamin"
            v-model="userData.jenis_kelamin"
            id="perempuan"
            :value="JENISKELAMIN.P"
          />
          <label class="form-check-label fw-normal" for="perempuan">Perempuan</label>
        </div>

        <div v-if="isError('jenis_kelamin')" class="invalid-feedback">
          <span v-if="isInvalid('jenis_kelamin', 'required')">*Pilih jenis kelamin</span>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="alamat" class="fw-bold">Alamat</label>
      <input
        type="text"
        v-model="userData.alamat"
        id="alamat"
        name="alamat"
        class="form-control"
        :class="{ 'is-invalid': isError('alamat') }"
      />
      <div v-if="isError('alamat')" class="invalid-feedback">
        <span v-if="isInvalid('alamat', 'required')">*Wajib diisi</span>
        <span v-else-if="isInvalid('alamat', 'maxLength')">Maksimal 255 karakter</span>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-3">
          <input
            type="text"
            v-model="userData.rt"
            id="rt"
            name="rt"
            class="form-control"
            :class="{ 'is-invalid': isError('rt') }"
            placeholder="RT"
          />
          <div v-if="isError('rt')" class="invalid-feedback">
            <span v-if="isInvalid('rt', 'required')">*Wajib diisi</span>
            <span v-else-if="isInvalid('rt', 'alphaNum')">Alfabet atau Numerik</span>
          </div>
        </div>
        <div class="col-3">
          <input
            type="text"
            v-model="userData.rw"
            id="rw"
            name="rw"
            class="form-control"
            :class="{ 'is-invalid': isError('rw') }"
            placeholder="RW"
          />
          <div v-if="isError('rw')" class="invalid-feedback">
            <span v-if="isInvalid('rw', 'required')">*Wajib diisi</span>
            <span v-else-if="isInvalid('rw', 'alphaNum')">Alfabet atau Numerik</span>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="penghasilan_sebelum_pandemi" class="fw-bold">
        Penghasilan sebelum pandemi:
        <span class="fw-bolder" v-if="!!userData.penghasilan.sebelum_pandemi">{{
          formatRupiah(userData.penghasilan.sebelum_pandemi)
        }}</span>
      </label>
      <input
        type="number"
        v-model="userData.penghasilan.sebelum_pandemi"
        id="penghasilan_sebelum_pandemi"
        class="form-control"
        :class="{ 'is-invalid': isError('penghasilan.sebelum_pandemi') }"
        placeholder="Rp."
      />
      <div v-if="isError('penghasilan.sebelum_pandemi')" class="invalid-feedback">
        <span v-if="isInvalid('penghasilan.sebelum_pandemi', 'required')">*Wajib diisi</span>
      </div>
    </div>

    <div class="form-group">
      <button class="btn btn-block btn-success fw-bold">Submit Data</button>
    </div>
  </form>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, numeric, maxLength, minLength, minValue, alphaNum } from "@vuelidate/validators";
import { imgFilesize, imgFormat } from "@/customValidator";
import { JENISKELAMIN } from "@/enums";

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
        foto_kk: "",
        umur: "",
        jenis_kelamin: "",
        alamat: "",
        rt: "",
        rw: "",
        penghasilan: {
          sebelum_pandemi: "",
          setelah_pandemi: "",
        },
      },
      JENISKELAMIN,
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
        foto_kk: {
          required,
          imgFilesize,
          imgFormat,
        },
        umur: {
          required,
          numeric,
          minValue: minValue(25),
        },
        jenis_kelamin: {
          required,
        },
        alamat: {
          required,
          maxLength: maxLength(255),
        },
        rt: {
          required,
          alphaNum,
        },
        rw: {
          required,
          alphaNum,
        },
        penghasilan: {
          sebelum_pandemi: {
            required,
            numeric,
          },
          setelah_pandemi: {
            required,
            numeric,
          },
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
      let arr_data = data.split(".");
      if (arr_data.length == 2) {
        return this.isSubmit && this.v$.userData[arr_data[0]][arr_data[1]].$error;
      }
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
      let arr_data = data.split(".");
      if (arr_data.length == 2) {
        return this.v$.userData[arr_data[0]][arr_data[1]][validator].$invalid;
      }
      return this.v$.userData[data][validator].$invalid;
    },
    formatRupiah(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(value);
    },
  },
};
</script>
