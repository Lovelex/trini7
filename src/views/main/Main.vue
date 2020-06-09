<template>
  <div id="main">
    <MainNavbar />
    <Hero v-if="!$vuetify.breakpoint.smAndDown" />
    <HeroMobile v-if="$vuetify.breakpoint.smAndDown" />
    <Things />
    <About />
    <Banner />
    <Depositions />
    <Contact />
    <UpButton />
    <Footer />
  </div>
</template>

<script>
import MainNavbar from "@/layout/main/MainNavbar";
import Hero from "@/components/main/Hero";
import HeroMobile from "@/components/main/HeroMobile";
import Things from "@/components/main/Things";
import About from "@/components/main/About";
import Banner from "@/components/main/Banner";
import Depositions from "@/components/main/Depositions";
import Contact from "@/components/main/Contact";
import UpButton from '@/layout/main/UpButton'
import Footer from "@/layout/main/Footer";

export default {
  components: {
    MainNavbar,
    Hero,
    HeroMobile,
    Things,
    About,
    Banner,
    Depositions,
    Contact,
    UpButton,
    Footer
  }
};
</script>

<style>
</style>