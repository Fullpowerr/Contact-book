<template>
   <div class="w-full h-full">
      <div class="flex items-center justify-center">
         <create_form v-if="dialogCreateContact" />
         <p class="m-5 ml-28 font-mono tracking-widest">Список контактов</p>
         <div
            v-if="!dialogCreateContact"
            @click="dialogCreateShow"
            class="ml-10 bg-inherit border-none cursor-pointer w-14 h-14 ease-in-out hover:scale-110 duration-150"
         >
            <img title="добавить контакт" src="/src/assets/plus-contact.png" />
         </div>
      </div>
      <div class="text-center">
         <v_input
            class="mb-1 mx-auto"
            type="text"
            placeholder="Поиск контактов..."
            maxlength="20"
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
      ...mapState(['show', 'searchQuery', 'dialogCreateContact']),
   },
   methods: {
      ...mapMutations({
         createContact: 'createContact',
         setSearchQuery: 'setSearchQuery',
         dialogCreateShow: 'dialogCreateShow',
      }),
   },
};
</script>
