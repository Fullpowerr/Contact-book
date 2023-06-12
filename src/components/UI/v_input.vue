<template>
   <input
      class="border rounded-md border-zinc-400 w-80 text-center"
      :value="modelValue"
      @input="updateInput"
      title="вводите текст"
   />
</template>

<script>
export default {
   name: 'v_input',
   props: {
      modelValue: [String, Number],
   },
   methods: {
      updateInput(event) {
         this.$emit('update:modelValue', event.target.value);
      },
   },
};
</script>

<style scoped>
input::-webkit-input-placeholder {
   text-align: center;
}

input:-moz-placeholder {
   /* Firefox 18- */
   text-align: center;
}

input::-moz-placeholder {
   /* Firefox 19+ */
   text-align: center;
}

input:-ms-input-placeholder {
   text-align: center;
}
</style>
