<template>
  <div id="main">
    <MainNavbar />
    <Hero v-if="!$vuetify.breakpoint.smAndDown" />
    <HeroMobile v-if="$vuetify.breakpoint.smAndDown" />
    <Things />
    <About />
    <Banner />
    <Depositions v-if="depositions.isVisible"/>
    <Contact />
    <UpButton />
    <MainSnackbar />
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
import MainSnackbar from '@/layout/main/MainSnackbar'
import Footer from "@/layout/main/Footer";

import { db } from '../../plugins/firebase';
import { mapGetters, mapActions } from 'vuex';

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
    MainSnackbar,
    Footer
  },
  computed: {
    ...mapGetters(
      {
        depositions: 'getDepositions'
      }
    )
  },
  methods: {
    ...mapActions(
      {
        setDepositions: 'setDepositions'
      }
    )
  },
  created() {
    this.setDepositions()
  }
};
</script>

<style>
</style>