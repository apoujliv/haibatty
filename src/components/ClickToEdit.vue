<template>
<live-edit
v-model="value"
:editable="isEditable"
placeholder="placeholder on edit"
:multiline="multiline"
v-on:click="toggleEdit(ev, test)">
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
  data() {
    return {
      valueLocal: this.value
    }
  }
}
</script>
