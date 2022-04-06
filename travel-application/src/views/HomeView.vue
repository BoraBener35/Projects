<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="`/destination/${destination.id}`"
    >
      <h2>{{ destination.name }}</h2>
      <img : src="`/images/${destiantion.image}`" : alt="destination.name">
    </router-link>
  </div>
</template>
 
<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>