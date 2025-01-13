<template>
    <nav class="navbar">
    <div class="logo">
        <img src="/hs.png" alt="Logo PKBM Technosa">
        
    </div>
    <ul class="nav-links">
        <li><router-link to="/">Beranda</router-link></li>
      <li><router-link to="/daftar">Daftar</router-link></li>
      <li><router-link to="/tentangkami">Tentang Kami</router-link></li>
      <li><router-link to="/artikel">Artikel</router-link></li>
      <li><router-link to="/hubungikami">Hubungi Kami</router-link></li>
    </ul>
    <button class="hamburger" @click="toggleMenu">
      &#9776;
    </button>
    </nav>
</template>

<script>
export default{
    name: 'AppNavbar',
    data() {
    return {
      menuOpen: false, // State untuk mengontrol menu saat responsif
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Toggle menu responsif
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    },
  },
}
</script>

<style scoped>

.navbar {
  background-color: #f1f3f5; 
  padding: 1rem 2rem; /* Padding navbar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  z-index: 1000; /* Pastikan di atas elemen lain */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Tetap di atas */
  top: 0;
  left: 0;
  width: 96%; /* Lebar penuh */
}

.logo img {
  height: 40px; /* Ukuran logo */
}

/* Link di navbar */
.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: rgb(13, 88, 250);
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #f73b06; /* Warna saat hover */
}

/* Responsif: sembunyikan menu pada perangkat kecil */
.hamburger {
  display: none; /* Default: sembunyikan */
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-links.active {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 100%; /* Di bawah navbar */
  left: 0;
  width: 100%;
  background-color: #f1f3f5;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Media Queries untuk responsivitas */
@media (max-width: 768px) {
  .hamburger {
    display: block; /* Tampilkan tombol hamburger */
  }
  .nav-links {
    display: none; /* Default: sembunyikan menu */
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .navbar {
    padding: 0.5rem 1rem; /* Kurangi padding pada layar kecil */
  }
  .logo img {
    height: 30px; /* Perkecil logo */
  }
}
</style>