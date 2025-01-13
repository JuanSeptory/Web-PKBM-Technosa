<template>
  <div class="content" ref="contentSection">
    <div class="text">
      <h2>PKBM TECHNOSA</h2>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus tempor blandit penatibus potenti torquent, lacinia interdum auctor.</p>
      <p>Parturient urna integer hendrerit commodo himenaeos parturient blandit feugiat. Velit fusce orci pellentesque lacinia dignissim magna, maximus per.</p>
    </div>
    <div class="image">
      <img src="/model.png" alt="PKBM Technosa Team" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.$refs.contentSection.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.$refs.contentSection);
  },
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
  background-color: #fff;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}

.content.visible {
  opacity: 1;
  transform: translateY(0);
}

.text {
  text-align: center;
  flex: 1;
  padding-right: 20px;
}

.text h2 {
  font-size: 2rem;
  color: #e74c3c;
  margin-bottom: 20px;
}

.text p {
  font-size: 1rem;
  font-display: center;
  line-height: 1.6;
  color: #34495e;
}

.image {
  flex: 1;
  display: flex;
  justify-content: center;
  padding-right: 50px;
}

.image img {
  max-width: 50%;
  height: auto;
  
}
</style>
