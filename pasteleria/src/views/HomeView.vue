<template>
  <div class="home">
    <titulo/>
    <sabores/>
    <adornos/>
    <informacion/>
  </div>
  
</template>

<script>
import titulo from "../components/bienvenida.vue";
import sabores from "../components/SaborPan.vue";
import adornos from "../components/adornos.vue";
import informacion from "../components/Informacion.vue"

export default {
  name: 'HomeView',
  components: {
    titulo,
    sabores,
    adornos,
    informacion,
  }
}
</script>
<style>



</style>