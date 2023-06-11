<template>
   <form
      class="flex right-0 bottom-0 left-0 top-0 fixed dialog"
      @submit.prevent
      @click.stop="closeDialogCreateShow"
   >
      <div
         @click.stop
         class="flex flex-col justify-center w-4/12 h-1/4 m-auto bg-gray-50 rounded-lg"
      >
         <v_input
            class="mb-1 mx-auto text-slate-900"
            :model-value="name"
            required
            @update:model-value="setName"
            type="text"
            placeholder="имя"
            maxlength="22"
         />
         <v_input
            class="mb-1 mx-auto"
            :model-value="surname"
            @update:model-value="setSurname"
            type="text"
            placeholder="фамилия"
            maxlength="22"
         />
         <v_input
            class="mb-1 mx-auto"
            :model-value="phoneNumber"
            @update:model-value="setPhoneNumber"
            type="phone"
            required
            pattern="^\+7[1-9]{10}$"
            placeholder="номер телефона"
            maxlength="20"
            min="2"
         />
         <v_button
            @keyup.enter
            @click="createContact"
            class="flex mx-auto font-mono tracking-widest mt-6"
            >создать контакт</v_button
         >
      </div>
   </form>
</template>
<script>
import v_button from './UI/v_button.vue';
import v_input from './UI/v_input.vue';

import { mapState, mapMutations } from 'vuex';
export default {
   name: 'create_form',

   components: { v_input, v_button },
   computed: {
      ...mapState(['name', 'surname', 'phoneNumber', 'contact']),
   },
   methods: {
      ...mapMutations({
         setName: 'setName',
         setSurname: 'setSurname',
         setPhoneNumber: 'setPhoneNumber',
         setContact: 'setContact',
         createContact: 'createContact',
         dialogCreateShow: 'dialogCreateShow',
         closeDialogCreateShow: 'closeDialogCreateShow',
      }),
   },
};
</script>
<style scoped>
.dialog {
   background: rgba(0, 0, 0, 0.5);
}
</style>
