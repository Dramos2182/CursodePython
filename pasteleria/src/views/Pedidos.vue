<template>
  <div class="pedido">
    <informacion/>
  </div>
</template>

<script>
import informacion from '../components/Informacion.vue'

export default {
  name: 'Pedidos',
  components: {
    informacion,
  }
}
</script>
