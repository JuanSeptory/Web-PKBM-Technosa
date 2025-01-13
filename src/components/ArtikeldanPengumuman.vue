<template>
    <div class="articlepage">
      <!-- Sidebar Kategori -->
      <aside class="sidebar">
        <h3>Kategori</h3>
        <ul>
          <li class="category-item" v-for="(category, index) in categories" :key="index">
            {{ category }}
          </li>
        </ul>
      </aside>
  
      <!-- Daftar Artikel -->
      <section class="article-list">
        <div class="article-item" v-for="(article, index) in articles" :key="index">
          <img :src="article.image" :alt="article.title" />
          <div class="article-content">
            <h4>{{ article.title }}</h4>
            <p>{{ article.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: ["Info dan biaya SD/SMP/SMA", "Pengumuman"],
        articles: [
          {
            title: "PEMBERDAYAAN MEWARNAI",
            image: "/mewarnai.jpg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor blandit penatibus potenti torquent.",
          },
          {
            title: "LOMBA 17 AGUSTUS",
            image: "/slide3.jpg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor blandit penatibus potenti torquent.",
          },
          {
            title: "ACARA WISUDA 2024",
            image: "/slide2.jpg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor blandit penatibus potenti torquent.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .articlepage {
    margin-top: 80px; /* Jarak tambahan dari atas */
    display: flex;
    gap: 16px;
    padding: 16px;
  }
  
  /* Sidebar Kategori */
  .sidebar {
    width: 25%;
    background: #f9f9f9;
    padding: 16px;
    border-right: 2px solid #eaeaea;
  }
  
  .sidebar h3 {
    margin-bottom: 16px;
  }
  
  .sidebar .category-item {
    margin-bottom: 8px;
    cursor: pointer;
    color: #333;
    transition: all 0.3s;
  }
  
  .sidebar .category-item:hover {
    color: #ffc107; /* Warna kuning saat hover */
    text-decoration: underline;
  }
  
  /* Daftar Artikel */
  .article-list {
    width: 75%;
  }
  
  .article-item {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    border-bottom: 2px solid #ffc107; /* Garis kuning */
    padding-bottom: 16px;
  }
  
  .article-item img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .article-content {
    flex: 1;
  }
  
  .article-content h4 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #e74c3c; /* Warna merah */
  }
  
  .article-content p {
    color: #555;
  }
  </style>
  