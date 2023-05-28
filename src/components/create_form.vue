<template>
   <div class="mt-6 flex flex-col justify-center">
      <v_input
         class="mb-1 mx-auto"
         :model-value="name"
         @update:model-value="setName"
         type="text"
         placeholder="name"
      />
      <v_input
         class="mb-1 mx-auto"
         :model-value="surname"
         @update:model-value="setSurname"
         type="text"
         placeholder="surname"
      />
      <v_input
         class="mb-1 mx-auto"
         :model-value="phoneNumber"
         @update:model-value="setPhoneNumber"
         type="text"
         placeholder="phone number"
      />
   </div>
</template>
<script>
import v_input from './UI/v_input.vue';
import { mapState, mapMutations } from 'vuex';
export default {
   name: 'create_form',

   components: { v_input },
   computed: {
      ...mapState(['name', 'surname', 'phoneNumber', 'contact']),
   },
   methods: {
      ...mapMutations({
         setName: 'setName',
         setSurname: 'setSurname',
         setPhoneNumber: 'setPhoneNumber',
         setContact: 'setContact',
      }),
   },
};
</script>
