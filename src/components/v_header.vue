<template>
   <div
      class="flex flex-row border-b-4 border border-sky-600 justify-evenly items-center mb-10"
   >
      <button @click="$router.push('/')">
         <img
            class="hover:scale-110 duration-150"
            src="../assets/free-icon-phone-6596115.png"
            width="100"
         />
      </button>
      <p class="font-mono text-3xl text-sky-600 mr-2">Contact Book</p>

      <p
         @click="$router.push('about')"
         class="cursor-pointer transition ease-in-out 1 hover:scale-110 hover:text-blue-600 text-2xl"
      >
         Contact
      </p>
   </div>
</template>
<script>
export default {
   name: 'v_header',
};
</script>
