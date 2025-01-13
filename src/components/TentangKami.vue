<template>
    <div class="about-page">
      <h2 class="blue-line">Guru dan Karyawan PKBM Technosa</h2>
      <div class="staff-list">
        <StaffCard v-for="(staff, index) in staffData" :key="index" :staff="staff" />
      </div>
    </div>
  </template>
  
  <script>
  import StaffCard from "@/components/StaffCard.vue";
  
  export default {
    components: {
      StaffCard,
    },
    data() {
      return {
        staffData: [
        {
            name: "Kristanto Wahyudiono, S.Th",
            role: "Ketua PKBM",
            image: "Mr Yudi.jpg",
        },
        {
            name: "Novia Stephany, S.Pd",
            role: "Wakil Ketua PKBM",
            image: "Ms. Novi.jpg",
          },
        {
            name: "Alexander Giovanni, Amd",
            role: "Guru",
            image: "Mr. Alex.jpg",
          },
          {
            name: "Juan Steiven, S.Kom",
            role: "Guru",
            image: "Mr Juan.jpg",
          },
          {
            name: "Jamaludin, S.Pd",
            role: "Guru",
            image: "Mr. Jamal.jpg",
          },
          {
            name: "Susanto, S.Th",
            role: "Guru",
            image: "Mr. Santo.jpg",
          },
          {
            name: "Bintoro Halim, S.E, M.M",
            role: "Guru",
            image: "Mr. Bintoro.jpg",
          },
          {
            name: "Hendrikus Jalu, Amd",
            role: "Guru",
            image: "Mr. Hendrik.jpg",
          },
          {
            name: "Emmy Julianti, S.PdK",
            role: "Guru",
            image: "Ms Emmy.jpg",
          },
          {
            name: "Nunik Yulianti, S.Pd",
            role: "Guru",
            image: "Ms Nunik.jpg",
          },
          
          {
            name: "Renta Lumbatoruan, S.Pd",
            role: "Guru",
            image: "Ms. Renta.jpg",
          },
          {
            name: "Yani, Amd",
            role: "Guru",
            image: "Ms. Yani.jpg",
          },
          {
            name: "Ribkah Hersyani",
            role: "Admin",
            image: "Ms. Ribka.jpg",
          },
          {
            name: "Miranti, S.Th",
            role: "Admin",
            image: "Ms Miranti.jpg",
          },
          {
            name: "Jan",
            role: "Satpam",
            image: "Pak Jan.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

.title {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.blue-line {
  bottom: 40px;
  background: rgba(0, 0, 255, 0.7);
  color: white;
  width: 100%;
  text-align: center;
  padding: 1rem 0 ;
  font-size: 1.2rem;
  font-weight: bold;

}
  .about-page {
    margin-top: 70px; /* Jarak tambahan dari atas */
    text-align: center;
    padding: 16px;
  }
  
  .staff-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 4 kolom */
  gap: 16px;
  justify-content: center;
}

.staff-list > div {
  flex: 1;
}
  </style>
  