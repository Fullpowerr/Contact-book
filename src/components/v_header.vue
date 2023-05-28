<template>
   <div class="border-b-4 border-dashed border-sky-600 mb-10">
      <div class="flex items-center justify-between">
         <button @click="$router.push('/')">
            <img
               class="mx-72 hover:scale-110"
               src="../assets/free-icon-phone-6596115.png"
               width="100"
            />
         </button>
         <p class="font-mono text-3xl text-sky-600">Contact Book</p>
         <div class="mx-60 flex font-mono text-2xl">
            <p
               @click="$router.push('about')"
               class="mx-10 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-sky-600"
            >
               About
            </p>
            <a
               class="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-600"
               href="tel:+79661227227"
               >Contact</a
            >
         </div>
      </div>
   </div>
</template>
<script>
export default {
   name: 'v_header',
};
</script>
