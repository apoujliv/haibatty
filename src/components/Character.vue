<template>
<section id="character-section" class="about-section text-center">
  <div class="container">
    <h1>Create New Character</h1>
    <characterFormVue></characterFormVue>
  </div>
</section>
</template>
<script>
import PowerLevels from './PowerLevels.js'
export default {
    props: {
      character:{
        type: Array,
        required: false,
        default: () => ([])
      }
    }
}


</script>
