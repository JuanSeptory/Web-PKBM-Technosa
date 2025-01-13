<template>
    <div class="contactpage">
      <!-- Header -->
      <h2>Hubungi Kami</h2>
      <p>Silakan isi formulir di bawah ini untuk menghubungi kami, atau gunakan informasi kontak yang tersedia.</p>
  
      <div class="contact-container">
        <!-- Formulir Kontak -->
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" id="name" v-model="form.name" required placeholder="Masukkan nama Anda" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required placeholder="Masukkan email Anda" />
          </div>
          <div class="form-group">
            <label for="subject">Subjek</label>
            <input type="text" id="subject" v-model="form.subject" required placeholder="Masukkan subjek pesan" />
          </div>
          <div class="form-group">
            <label for="message">Pesan</label>
            <textarea id="message" v-model="form.message" rows="5" required placeholder="Tulis pesan Anda"></textarea>
          </div>
          <button type="submit" class="btn-submit">Kirim Pesan</button>
        </form>
  
        <!-- Informasi Kontak -->
        <div class="contact-info">
          <h3>Informasi Kontak</h3>
          <p><strong>Alamat:</strong> Vila Melati Mas Jalan Melati Raya blok P2 no: 24 Serpong Utara - Tangsel 15323</p>
          <p><strong>Telepon:</strong> 021-5371254 / 021-53158771</p>
          <p><strong>Email:</strong> pkbmtechnosa@gmail.com</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Pesan dari ${this.form.name} telah berhasil dikirim!`);
        // Reset form
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .contactpage {
    padding: 20px;
    max-width: 900px;
    margin: auto;
  }
  
  h2 {
    text-align: center;
    color: #e74c3c;
    margin-bottom: 10px;
  }
  
  p {
    text-align: center;
    color: #555;
    margin-bottom: 20px;
  }
  
  .contact-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .contact-form {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #e74c3c;
    outline: none;
  }
  
  .btn-submit {
    padding: 10px 20px;
    background-color: #e74c3c;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #c0392b;
  }
  
  /* Informasi Kontak */
  .contact-info {
    flex: 1 1 40%;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info h3 {
    color: #e74c3c;
    margin-bottom: 10px;
  }
  
  .contact-info p {
    margin: 5px 0;
    color: #555;
  }
  </style>
  