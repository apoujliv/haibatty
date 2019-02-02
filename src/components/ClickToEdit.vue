<template>
<!-- <div>
    <input type="text"
           v-if="edit"
           :value="valueLocal"
           @blur.native="valueLocal = $event.target.value; edit = false; $emit('input', valueLocal);"
           @keyup.enter.native="valueLocal = $event.target.value; edit = false; $emit('input', valueLocal);"
           v-focus=""
             />
        <p v-else="" @click="edit = true;">
          {{valueLocal}}
        </p>
    </div> -->
<div>
  <input type="text" :value="valueLocal">
</div>
</template>

<script>
export default {

  props: ['value'],

  data() {
      return {
        // edit: false,
        valueLocal: this.value,
      }
  },
  methods: {
    toggleEdit: function(event) {
      if (isDisabled) {
        isDisabled = false;
        return;
      }

      isDisabled = true;
    }
  }

  // watch: {
  //   value: function() {
  //     this.valueLocal = this.value;
  //   }
  // },
  //
  // directives: {
  //   focus: {
  //     inserted (el) {
  //       el.focus()
  //     }
  //   }
  // }

}
</script>
