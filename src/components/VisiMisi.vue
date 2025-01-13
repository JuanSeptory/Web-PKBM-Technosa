<template>
  <section class="contentvm">
    <div class="content-card" v-for="(item, index) in contents" :key="index">
      <img :src="item.image" alt="Content Image" class="content-image" />
      <h3 :style="{ color: item.color }">{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      contents: [
        {
          // title: "SMART",
          description:
            "Mencerdaskan Anak Dengan Wawasan Yang Luas Dalam Ilmu Pengetahuan Dan Teknologi Disertai Kegiatan Yang Kreatif Dengan Penuh Tanggung Jawab.",
          image: "/SMART.png", // Ubah ke path gambar Anda
          color: "#f1c40f",
        },
        {
          // title: "SHINE",
          description:
            "Dengan Pendidikan Yang Bermutu Dapat Bersinar Dan Bermanfaat Bagi Sesama Manusia Melalui Sikap/perilaku.",
          image: "/SHINE.png", // Ubah ke path gambar Anda
          color: "#e74c3c",
        },
        {
          // title: "SHARE",
          description:
            "Memiliki Kasih Dan Hati Yang Mau Peduli Untuk Berbagi Kepada Sesama Manusia.",
          image: "SHARE.png", // Ubah ke path gambar Anda
          color: "#2980b9",
        },
      ],
    };
  },
 
};
</script>

<style scoped>
.contentvm {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px auto;
  gap: 20px;
  flex-wrap: wrap;
}

.content-card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
/*   opacity: 0; Awal untuk animasi */
/*  transform: translateY(50px);  Awal untuk animasi */
}

.content-card img {
  width: 100px;
  height: auto;
  margin-bottom: 5px;
}

.content-card h3 {
  font-size: 24px;
  margin-bottom: 10px;
  font-family: "Arial", sans-serif;
}

.content-card p {
  font-size: 14px;
  color: #555;
}


</style>
