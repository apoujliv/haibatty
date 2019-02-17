<template>
<div>
  <div class="row">
    <div class= "col-md-4" v-for="characterSet in characters">
      <div class="card border-dark mb-4 pb-4 box-shadow" >
        <div class="card-header mb-4">{{characterSet.name}} </div>
        <div class="card-img-top"><img :src="characterSet.imgUrl" alt="character image" style="max-height:150px;max-width:150px;height:auto;width:auto;">
        </div>
        <div class="card-body">{{characterSet.highConcept}}</div>
      <router-link :to="{    name: 'CharacterEdit', params: { character: characterSet } }">
      <button type="button" class="btn btn-primary">  Edit </button>
      </router-link>
    </div>
  </div>
</div>
  <div class="container">
    <router-view class="view"></router-view>
  </div>
</div>
</template>
<script>
import PowerLevels from './PowerLevels.js'
export default {
  props: {
    characters: {
      type: Array,
      required: false,
      default: () => ([])
    }
  }
}
</script>
