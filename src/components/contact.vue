<template>
   <div class="font-mono mt-4 w-2/4 mx-auto justify-between">
      <div class="flex relative">
         <p>{{ title_contact_sheet.name }}</p>
         <p class="pl-4">{{ title_contact_sheet.surname }}</p>
         <v_button
            class="ml-4 text-sm text-center absolute right-1/3 cursor-s-resize transition ease-in-out hover:-translate-x-1 hover:scale-110 hover:text-sky-600"
            v-if="!title_contact_sheet.isExpanded"
            @click="
               $store.commit(
                  'expandContact',
                  this.arrContacts.indexOf(title_contact_sheet)
               )
            "
            >unwrap...</v_button
         >
         <v_button
            class="ml-4 text-sm text-center absolute right-1/3 cursor-s-resize"
            v-else
            @click="
               $store.commit(
                  'minimizeContact',
                  this.arrContacts.indexOf(title_contact_sheet)
               )
            "
            >roll up</v_button
         >
         <router-link :to="{ name: 'data' }">
            <v_button
               class="text-xl border-y-2 ml-4 border-sky-500 absolute right-0 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-sky-700"
               @click="
                  $store.commit('setContactObj', title_contact_sheet),
                     $store.commit(
                        'indexContact',
                        this.arrContacts.indexOf(title_contact_sheet)
                     )
               "
               >Edit...</v_button
            >
         </router-link>
      </div>
   </div>
   <div
      class="font-mono mt-4 w-2/4 mx-auto justify-between"
      v-if="title_contact_sheet.isExpanded"
   >
      <p class="italic text-center">
         {{ title_contact_sheet.phoneNumber }}
      </p>
      <p class="italic text-center">
         {{ title_contact_sheet.addPhoneNumber }}
      </p>
      <p class="italic text-center">{{ title_contact_sheet.email }}</p>
      <p class="italic text-center">{{ title_contact_sheet.address }}</p>
      <p class="italic text-center">{{ title_contact_sheet.company }}</p>
   </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import v_input from './UI/v_input.vue';
import v_button from './UI/v_button.vue';
export default {
   name: 'contact',
   component: { v_button, v_input },
   props: {
      title_contact_sheet: {
         type: Object,
      },
   },
   computed: {
      ...mapState(['contact', 'isExpanded', 'arrContacts']),
   },
   methods: {
      ...mapMutations({
         setContactEmail: 'setContactEmail',
         deleteContact: 'deleteContact',
         setContactObj: 'setContactObj',
      }),
   },
};
</script>
