<template>
   <div class="w-2/4 h-screen mx-auto mt-4">
      <div class="font-mono text-xl flex-col">
         <div
            class="mx-auto text-center pt-8"
            v-if="searchContacts.length < 1 && !searchQuery"
         >
            <p>У Вас нет сохраненных контактов...</p>
         </div>
         <div
            class="mx-auto text-center pt-8"
            v-if="searchContacts.length == 0 && searchQuery"
         >
            Контакт "{{ searchQuery }}" не найден
         </div>
         <div v-else>
            <div
               @click="
                  $router.push({
                     name: 'contact_data',
                     params: { id: title_contact_sheet.id },
                  })
               "
               class="m-2 mx-auto text-center cursor-pointer ease-in-out hover:scale-110 hover:text-sky-700"
               v-for="(title_contact_sheet, i) in searchContacts"
               :title_contact_sheet="title_contact_sheet"
               :key="i"
            >
               <p @click="$store.commit('indexContact', i)">
                  {{ title_contact_sheet.name }}
                  {{ title_contact_sheet.surname }}
               </p>
            </div>
         </div>
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
   props: {
      i: {
         type: Number,
      },
   },
   computed: {},
   methods: {
      ...mapMutations({}),
   },
   computed: {
      ...mapState(['searchQuery']),
      ...mapGetters({
         searchContacts: 'searchContacts',
      }),
   },
   mounted() {
      this.$store.commit(
         'loadingPageContactsList',
         JSON.parse(localStorage.getItem('all-contacts'))
      );
   },
};
</script>
