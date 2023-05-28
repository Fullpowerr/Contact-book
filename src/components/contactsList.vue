<template>
   <div class="w-2/4 h-screen mx-auto bg-sky-50 mt-4">
      <div class="font-mono text-xl flex-col">
         <div
            class="mx-auto text-center pt-8"
            v-if="searchContacts.length < 1 && !searchQuery"
         >
            <p>You don't have any saved contacts...</p>
         </div>
         <div
            class="mx-auto text-center pt-8"
            v-if="searchContacts.length == 0 && searchQuery"
         >
            Contact "{{ searchQuery }}" not found ...
         </div>
         <contact
            v-else
            class="m-2 mx-auto"
            v-for="(title_contact_sheet, i) in searchContacts"
            :title_contact_sheet="title_contact_sheet"
            :key="i"
         />
      </div>
   </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import v_input from './UI/v_input.vue';
import create_form from './create_form.vue';
import contact from './contact.vue';
export default {
   name: 'contactsList',
   components: { v_input, create_form, contact },
   computed: {},
   methods: {
      ...mapMutations({
         setContactName: 'setContactName',
         activationShow: 'activationShow',
         deactivationShow: 'deactivationShow',
         getObjLocalStorage: 'getObjLocalStorage',
      }),
   },
   computed: {
      ...mapState([
         'name',
         'surname',
         'phoneNumber',
         'arrContacts',
         'searchQuery',
      ]),
      ...mapGetters({
         searchContacts: 'searchContacts',
      }),
   },
   mounted() {
      this.$store.commit(
         'loadingArrContacts',
         JSON.parse(localStorage.getItem('all-contacts'))
      );
   },
};
</script>
