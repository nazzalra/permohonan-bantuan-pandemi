<template>
  <form @submit.prevent="onSubmit">
    <div class="my-2">
      <label for="nama" class="fw-bold my-1">Nama</label>
      <input
        ref="userData.nama"
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

    <div class="my-2">
      <div class="input-group has-validation">
        <label for="nik" class="fw-bold input-group-text">NIK</label>
        <input
          ref="userData.nik"
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
    </div>

    <div class="my-2">
      <div class="input-group has-validation">
        <label for="nkk" class="fw-bold input-group-text">NKK</label>
        <input
          ref="userData.nkk"
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
    </div>

    <div class="my-2">
      <label for="foto_ktp" class="fw-bold my-1">Foto KTP</label>
      <input
        ref="userData.foto_ktp"
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

    <div class="my-2">
      <label for="foto_kk" class="fw-bold my-1">Foto KK</label>
      <input
        ref="userData.foto_kk"
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

    <div class="my-2">
      <div class="row">
        <div class="col-sm-5">
          <label for="umur" class="fw-bold my-1">Umur</label>
          <div class="input-group has-validation">
            <input
              ref="userData.umur"
              type="number"
              v-model="userData.umur"
              id="umur"
              name="umur"
              class="form-control"
              :class="{ 'is-invalid': isError('umur') }"
            />
            <span class="input-group-text fw-bold">Tahun</span>
            <div v-if="isError('umur')" class="invalid-feedback">
              <span v-if="isInvalid('umur', 'required')">*Wajib diisi</span>
              <span v-else-if="isInvalid('umur', 'numeric')">*Umur hanya terdiri dari angka</span>
              <span v-else-if="isInvalid('umur', 'minValue')">*Minimal berumur 25 tahun</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-2">
      <label for="jenis_kelamin" class="fw-bold my-1">Jenis Kelamin</label>
      <div>
        <div
          class="form-check form-check-inline"
          :class="{ 'is-invalid': isError('jenis_kelamin') }"
        >
          <input
            ref="userData.jenis_kelamin"
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

    <div class="my-2">
      <label for="alamat" class="fw-bold my-1">Alamat</label>
      <input
        ref="userData.alamat"
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

    <div>
      <div class="row">
        <div class="col-4">
          <div class="input-group has-validation">
            <span class="input-group-text fw-bold">RT</span>
            <input
              ref="userData.rt"
              type="text"
              v-model="userData.rt"
              id="rt"
              name="rt"
              class="form-control"
              :class="{ 'is-invalid': isError('rt') }"
            />
            <div v-if="isError('rt')" class="invalid-feedback">
              <span v-if="isInvalid('rt', 'required')">*Wajib diisi</span>
              <span v-else-if="isInvalid('rt', 'alphaNum')">Alfabet atau Numerik</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="input-group has-validation">
            <span class="input-group-text fw-bold">RW</span>
            <input
              ref="userData.rw"
              type="text"
              v-model="userData.rw"
              id="rw"
              name="rw"
              class="form-control"
              :class="{ 'is-invalid': isError('rw') }"
            />
            <div v-if="isError('rw')" class="invalid-feedback">
              <span v-if="isInvalid('rw', 'required')">*Wajib diisi</span>
              <span v-else-if="isInvalid('rw', 'alphaNum')">Alfabet atau Numerik</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-2">
      <label for="penghasilan_sebelum_pandemi" class="fw-bold my-1">
        Penghasilan sebelum pandemi:
        <span class="fw-bold" v-if="!!userData.penghasilan.sebelum_pandemi">{{
          formatRupiah(userData.penghasilan.sebelum_pandemi)
        }}</span>
      </label>
      <div class="input-group has-validation">
        <span class="input-group-text fw-bold">Rp.</span>
        <input
          ref="userData.penghasilan.sebelum_pandemi"
          type="number"
          v-model="userData.penghasilan.sebelum_pandemi"
          id="penghasilan_sebelum_pandemi"
          class="form-control"
          :class="{ 'is-invalid': isError('penghasilan.sebelum_pandemi') }"
        />
        <div v-if="isError('penghasilan.sebelum_pandemi')" class="invalid-feedback">
          <span v-if="isInvalid('penghasilan.sebelum_pandemi', 'required')">*Wajib diisi</span>
        </div>
      </div>
    </div>

    <div class="my-2">
      <label for="penghasilan_setelah_pandemi" class="fw-bold my-1">
        Penghasilan setelah pandemi:
        <span class="fw-bold" v-if="!!userData.penghasilan.setelah_pandemi">{{
          formatRupiah(userData.penghasilan.setelah_pandemi)
        }}</span>
      </label>
      <div class="input-group has-validation">
        <span class="input-group-text fw-bold">Rp.</span>
        <input
          ref="userData.penghasilan.setelah_pandemi"
          type="number"
          v-model="userData.penghasilan.setelah_pandemi"
          id="penghasilan_setelah_pandemi"
          class="form-control"
          :class="{ 'is-invalid': isError('penghasilan.setelah_pandemi') }"
        />
        <div v-if="isError('penghasilan.setelah_pandemi')" class="invalid-feedback">
          <span v-if="isInvalid('penghasilan.setelah_pandemi', 'required')">*Wajib diisi</span>
        </div>
      </div>
    </div>

    <div class="my-2">
      <label class="fw-bold my-1">Alasan membutuhkan bantuan:</label>
      <div>
        <div class="form-check" :class="{ 'is-invalid': isError('alasan') }">
          <input
            ref="userData.alasan.default"
            class="form-check-input"
            type="radio"
            name="alasan"
            v-model="userData.alasan.default"
            :value="ALASANBANTUAN['1']"
          />
          <label class="form-check-label fw-normal">{{ ALASANBANTUAN["1"] }}</label>
        </div>
        <div class="form-check" :class="{ 'is-invalid': isError('alasan') }">
          <input
            class="form-check-input"
            type="radio"
            name="alasan"
            v-model="userData.alasan.default"
            :value="ALASANBANTUAN['2']"
          />
          <label class="form-check-label fw-normal">{{ ALASANBANTUAN["2"] }}</label>
        </div>
        <div class="form-check" :class="{ 'is-invalid': isError('alasan') }">
          <input
            class="form-check-input"
            type="radio"
            name="alasan"
            v-model="userData.alasan.default"
            :value="ALASANBANTUAN['3']"
          />
          <label class="form-check-label fw-normal">{{ ALASANBANTUAN["3"] }}</label>
        </div>
        <div class="form-check" :class="{ 'is-invalid': isError('alasan') }">
          <input
            class="form-check-input"
            type="radio"
            name="alasan"
            v-model="userData.alasan.default"
            :value="ALASANBANTUAN['4']"
          />
          <label class="form-check-label fw-normal">{{ ALASANBANTUAN["4"] }}</label>
        </div>
        <div v-if="userData.alasan.default == ALASANBANTUAN['4']">
          <input
            ref="userData.alasan.manual"
            type="text"
            class="form-control"
            v-model="userData.alasan.manual"
            placeholder="Tulis alasan disini"
          />
        </div>

        <div v-if="isError('alasan')" class="invalid-feedback">
          <span v-if="isInvalid('alasan.default', 'required')">*Pilih alasan</span>
          <span v-if="isInvalid('alasan.manual', 'required')">*Tulis alasannya</span>
        </div>
      </div>
    </div>

    <div class="mt-4 form-check">
      <input
        ref="userData.persetujuan"
        type="checkbox"
        v-model="userData.persetujuan"
        @change="v$.userData.persetujuan.$touch()"
        id="persetujuan"
        class="form-check-input"
      />
      <label
        class="form-check-label fw-light"
        :class="{ 'is-invalid': isError('persetujuan') }"
        for="persetujuan"
        >Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan
        apabila ditemukan ketidaksesuaian dalam data tersebut.</label
      >

      <div v-if="isError('persetujuan')" class="invalid-feedback">
        <span v-if="isInvalid('persetujuan', 'required')">*Wajib dicentang</span>
      </div>
    </div>
    <div class="my-4">
      <button class="btn btn-block btn-success fw-bold w-100">Submit Data</button>
    </div>
  </form>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  numeric,
  maxLength,
  minLength,
  minValue,
  alphaNum,
  requiredIf,
} from "@vuelidate/validators";
import { imgFilesize, imgFormat } from "@/customValidator";
import { JENISKELAMIN, ALASANBANTUAN } from "@/enums";

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
        alasan: {
          default: "",
          manual: "",
        },
        persetujuan: "",
      },
      JENISKELAMIN,
      ALASANBANTUAN,
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
        alasan: {
          default: {
            required,
          },
          manual: {
            required: requiredIf(function(val) {
              return this.userData.alasan.default == "Lainnya" && val == "";
            }),
          },
        },
        persetujuan: {
          required(val) {
            return val;
          },
        },
      },
    };
  },
  methods: {
    onSubmit() {
      this.isSubmit = true;
      this.v$.$touch();
      if (this.v$.$error) {
        this.$refs[this.v$.$errors[0].$propertyPath].focus();
        return;
      }
      console.log(this.userData);
      setTimeout(() => {
        console.log("Sukses mengirim data");
      }, 1500);
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
  watch: {
    "userData.alasan.default": function() {
      this.userData.alasan.manual = "";
    },
  },
};
</script>
