<template>
<live-edit
v-model="valueLocal"
:editable="isEditable"
:placeholder="placeholder"
:multiline="multiline">
</live-edit>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    multiline: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: "Double click to type"
    },
    isEditable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data(){
    return {
      valueLocal: this.value
    }
  },
  watch: {
    valueLocal: function(val){
      this.$emit('value', val);
    }
  }
}
</script>
