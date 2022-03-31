<template>
  <div class="about">
    <formulario/>
    <informacion/>
  </div>
</template>
<script>
import formulario from "../components/Formulario.vue";
import informacion from "../components/Informacion.vue"


export default {
  name: 'AboutView',
  components: {
    formulario,
    informacion,
  }
}
</script>
