<template>
  <div class="slider">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image.src" alt="Slide Image" />
        <div class="caption">{{ image.caption }}</div>
      </div>
    </div>
    <div class="controls">
      <button @click="prevSlide">&#9664;</button>
      <button @click="nextSlide">&#9654;</button>
    </div>
    <div class="indicators">
      <span v-for="(image, index) in images" :key="index" :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
       {src: '/slide1.jpg', caption : 'Perayaan Imlek 2024'},
       {src: '/slide2.jpg', caption : 'Wisuda 2023'},
       {src: '/slide3.jpg', caption : 'Lomba 17 Agustus'}
      ],
      currentSlide: 0,
      intervalId: null // Tambahkan variabel untuk menyimpan ID interval
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    startAutoSlide() {
      // Jalankan interval yang memanggil fungsi nextSlide setiap 3 detik
      this.intervalId = setInterval(() => {
        this.nextSlide(); // Pindah ke slide berikutnya secara otomatis
      }, 3000); // Durasi 3000 ms = 3 detik
    },
    stopAutoSlide() {
      // Hentikan interval saat slider tidak diperlukan
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoSlide(); // Mulai otomatis saat komponen di-mount
  },
  beforeUnmount() {
    this.stopAutoSlide(); // Hentikan interval saat komponen dihancurkan
  }
  
};
</script>

<style scoped>
.slider {
  position: relative;
  max-width: 70%;
  margin: 50px auto;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

img {
  width: 100%;
  display: block;
}

.caption {
  position: absolute;
  bottom: 40px;
  background: rgba(0, 0, 255, 0.7);
  color: white;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.controls button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.controls button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.controls button:first-child {
  left: 10px;
}

.controls button:last-child {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicators span {
  display: block;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicators span.active {
  background: white;
}
</style>
