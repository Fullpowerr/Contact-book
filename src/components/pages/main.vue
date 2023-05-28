<template>
   <div class="w-full h-full">
      <v_button
         v-if="!dialogCreateContact"
         @click="dialogCreateShow"
         class="flex mx-auto font-mono tracking-widest active:scale-110"
         >create</v_button
      >
      <v_button
         v-else
         @click="createContact"
         class="flex mx-auto font-mono tracking-widest"
         >create contact</v_button
      >
      <create_form v-if="dialogCreateContact" />
      <p class="text-center m-5 font-mono tracking-widest">Contact list</p>
      <div class="text-center">
         <v_input
            class="mb-1 mx-auto"
            type="text"
            placeholder="Search contact..."
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
         />
      </div>
      <contactsList />
   </div>
</template>
<script>
import v_header from '../v_header.vue';
import contactsList from '../contactsList.vue';
import v_button from '../UI/v_button.vue';
import create_form from '../create_form.vue';
import v_input from '../UI/v_input.vue';
import { mapMutations, mapState } from 'vuex';
export default {
   name: 'v_main',
   components: { v_header, contactsList, v_button, create_form, v_input },
   computed: {
      ...mapState([
         'show',
         'phoneNumber',
         'searchQuery',
         'dialogCreateContact',
      ]),
   },
   methods: {
      ...mapMutations({
         activFn: 'activFn',
         createContact: 'createContact',
         setSearchQuery: 'setSearchQuery',
         dialogCreateShow: 'dialogCreateShow',
      }),
   },
};
</script>
