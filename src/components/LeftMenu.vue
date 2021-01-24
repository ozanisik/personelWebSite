<template>
  <div>
        <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="../assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Ozan ISIK</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="https://www.linkedin.com/in/ozanisik/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          <a href="https://www.instagram.com/i.ozan/" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook" ><i class="bx bxl-facebook"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        </div>
      </div>

      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="#"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>

        </ul>
      </nav><!-- .nav-menu -->
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Ozan ISIK</h1>
      <vue-typed-js :strings="['Front-End Developer', 'Back-End Developer', 'Musician']" :fade-out="true" :loop="true" :cursorChar="'_'" :fadeOutDelay="1000" :typeSpeed="100">
        <p>I'm <span class="typing"></span></p>
      </vue-typed-js>
    </div>
  </section><!-- End Hero -->
  </div>
</template>

<script>
export default {
    name: "left-menu"
}
</script>

<style>

</style>