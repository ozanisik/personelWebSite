<template>
  <div class="home">
    <!-- ======= Mobile nav toggle button ======= -->
  <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
  <left-menu></left-menu>
  <main id="main">
    <!-- ======= About Section ======= -->
    

    <about></about>

    <!-- ======= Facts Section ======= -->
    <facts></facts>

    <!-- ======= Skills Section ======= -->
    <skills></skills>

    <!-- ======= Resume Section ======= -->
    <resume></resume>

    <!-- ======= Contact Section ======= -->
    <contacts></contacts>
  </main>
  </div>
</template>
<script>

import LeftMenu from "../components/LeftMenu.vue";
import Skills from "../components/Skills.vue";
import Facts from "../components/Facts.vue";
import About from "../components/About.vue";
import Contacts from "../components/Contacts.vue";
import Resume from "../components/Resume.vue";

export default {
  name: 'Home',
  components: {
    LeftMenu,
    About,
    Facts,
    Skills,
    Contacts,
    Resume
  },
  data() {
    return {
    }
  },
  created() {
  },
}
</script>
<style lang="css">
</style>


