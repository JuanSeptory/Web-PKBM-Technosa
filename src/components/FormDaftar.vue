<template>
    <div class="formcontainer">
      <div class="button-group">
        <button 
          v-for="level in levels" 
          :key="level" 
          :class="{'active': selectedLevel === level}" 
          @click="selectLevel(level)"
        >
          Daftar {{ level }}
        </button>
      </div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nama Lengkap Peserta Didik</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="registrationType">Tipe Pendaftaran</label>
          <select id="registrationType" v-model="formData.registrationType" required>
            <option disabled value="">Pilih Tipe Pendaftaran</option>
            <option value="reguler">Reguler</option>
            <option value="mandiri">Mandiri</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div class="form-group">
          <label for="phone">No. Telp</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
        </div>
        <button type="submit" class="submit-button">Daftar Sekarang</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        levels: ["SD", "SMP", "SMA"],
        selectedLevel: "SD",
        formData: {
          name: "",
          email: "",
          registrationType: "",
          phone: "",
        },
      };
    },
    methods: {
      selectLevel(level) {
        this.selectedLevel = level;
      },
      submitForm() {
        console.log("Form Submitted:", {
          ...this.formData,
          selectedLevel: this.selectedLevel,
        });
        alert("Pendaftaran Berhasil!");
        // Reset form
        this.formData = {
          name: "",
          email: "",
          registrationType: "",
          phone: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>

  .formcontainer {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 120px; /* Jarak tambahan dari atas */
    margin-bottom: 70px;
    padding:  20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  .button-group {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #eee;
  }
  button.active {
    background-color: #007bff;
    color: white;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .submit-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  