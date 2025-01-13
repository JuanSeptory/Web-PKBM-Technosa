<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 PKBM Technosa. All Rights Reserved.</p>
        <ul class="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #34495e;
    color: white;
    padding: 20px 10px;
    text-align: center;
    
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-links {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 10px;
    padding: 0;
  }
  
  .footer-links a {
    color: #e67e22;
    text-decoration: none;
    font-weight: bold;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  </style>
  