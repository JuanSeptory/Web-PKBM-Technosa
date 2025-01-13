<template>
    <div class="staff-card">
      <img :src="`/image/${staff.image}`" :alt="staff.name" class="staff-image" />
      <h3>{{ staff.name }}</h3>
      <p>{{ staff.role }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      staff: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  
  .staff-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    max-width: 200px;
  }
  .staff-image {
    width: 100px;
    height: 120px;
    border-radius: 4px;
    object-fit: cover;
    margin-bottom: 8px;
  }
  </style>
  