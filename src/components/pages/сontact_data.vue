<template>
   <div class="w-2/5 mx-auto mt-4 flex justify-evenly">
      <router-link :to="{ name: 'v_main' }">
         <v_button
            @click="closAllShowButtonBack"
            class="text-xl rounded-md bg-transparent text-zinc-500 p-1 pr-2 hover:text-sky-600"
            >← назад</v_button
         >
      </router-link>
      <img
         @click="showEditData"
         v-if="!showEdit"
         src="/src/assets/pencil.png"
         class="w-10 h-10 cursor-pointer hover:scale-110"
         alt="редактировать"
      />
      <img
         v-else
         @click="addInfoContact"
         src="/src/assets/done-complite.svg"
         alt="применить"
         class="w-10 h-10 cursor-pointer hover:scale-125"
      />
   </div>
   <div class="flex">
      <div class="mx-auto text-center justify-items-center h-screen font-mono">
         <p class="m-6 text-5xl tracking-[.20em]">
            {{ contact.name }} {{ contact.surname }}
         </p>
         <input
            v-if="showEdit"
            class="border"
            type="text"
            placeholder="имя"
            maxlength="22"
            @input="this.$store.commit('setName', $event.target.value)"
         />
         <input
            v-if="showEdit"
            class="border ml-4"
            type="text"
            placeholder="фамилия"
            maxlength="22"
            @input="this.$store.commit('setSurname', $event.target.value)"
         />
         <div v-if="contact.phoneNumber" class="justify-items-center mt-4">
            <p class="">номер телефона:</p>
            <p class="text-3xl">
               {{ contact.phoneNumber }}
            </p>
            <input
               v-if="showEdit"
               class="border"
               type="text"
               placeholder="номер телефона"
               maxlength="22"
               @input="
                  this.$store.commit('setPhoneNumber', $event.target.value)
               "
            />
         </div>
         <div v-if="contact.addPhoneNumber" class="justify-items-center mt-4">
            <p class="">дополнительный номер:</p>
            <p class="text-3xl">
               {{ contact.addPhoneNumber }}
            </p>
            <input
               v-if="showEdit"
               class="border"
               type="text"
               placeholder="дополнительный номер"
               maxlength="22"
               @input="
                  this.$store.commit('setaddPhoneNumber', $event.target.value)
               "
            />
         </div>
         <div v-if="contact.email" class="justify-items-center mt-4">
            <p class="">почта:</p>
            <p class="text-3xl">{{ contact.email }}</p>
            <input
               v-if="showEdit"
               class="border"
               type="text"
               placeholder="почтовый адрес"
               maxlength="22"
               @input="this.$store.commit('setEmail', $event.target.value)"
            />
         </div>
         <div v-if="contact.address" class="justify-items-center mt-4">
            <p class="">адрес:</p>
            <p class="text-3xl">{{ contact.address }}</p>
            <input
               v-if="showEdit"
               class="border"
               type="text"
               placeholder="адрес"
               maxlength="22"
               @input="this.$store.commit('setAddress', $event.target.value)"
            />
         </div>
         <div v-if="contact.company" class="justify-items-center mt-4">
            <p class="">компания:</p>
            <p class="text-3xl">{{ contact.company }}</p>
            <input
               v-if="showEdit"
               class="border"
               type="text"
               placeholder="компания"
               maxlength="22"
               @input="this.$store.commit('setCompany', $event.target.value)"
            />
         </div>

         <div
            v-if="
               !contact.name ||
               !contact.surname ||
               !contact.phoneNumber ||
               !contact.addPhoneNumber ||
               !contact.email ||
               !contact.address ||
               !contact.company
            "
            class="mt-16 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-70 hover:text-sky-700"
         >
            <v_button
               v-if="!show"
               @click="activationShow"
               class="rounded-md text-white border-4 bg-zinc-500 border-zinc-500 p-1"
            >
               добавить данные...
            </v_button>

            <v_button
               v-else
               @click="addInfoContact"
               class="text-xl rounded-md border bg-transparent border-zinc-500 text-zinc-500 p-1"
            >
               сохранить
            </v_button>
         </div>
         <div v-else class="mt-24"></div>
         <div
            v-if="show"
            class="flex flex-col justify-center mx-auto text-xl w-2/3"
         >
            <input
               v-if="!contact.name"
               class="border mt-4"
               type="text"
               placeholder="имя"
               maxlength="22"
               @input="this.$store.commit('setName', $event.target.value)"
            />
            <input
               v-if="!contact.surname"
               class="border mt-4"
               type="text"
               placeholder="фамилия"
               maxlength="22"
               @input="this.$store.commit('setSurname', $event.target.value)"
            />
            <input
               v-if="!contact.phoneNumber"
               class="border mt-4"
               type="phone"
               maxlength="20"
               placeholder="номер телефона"
               @input="
                  this.$store.commit('setPhoneNumber', $event.target.value)
               "
            />
            <input
               v-if="!contact.addPhoneNumber"
               class="border mt-4"
               type="phone"
               placeholder=" дополнительный номер "
               maxlength="20"
               @input="
                  this.$store.commit('setaddPhoneNumber', $event.target.value)
               "
            />
            <input
               v-if="!contact.email"
               class="border mt-2"
               type="email"
               placeholder="почтовый адрес"
               maxlength="40"
               @input="this.$store.commit('setEmail', $event.target.value)"
            />
            <input
               v-if="!contact.address"
               class="border mt-4"
               type="text"
               placeholder="адрес"
               @input="this.$store.commit('setAddress', $event.target.value)"
            />
            <input
               v-if="!contact.company"
               class="border mt-4"
               type="text"
               maxlength="40"
               placeholder="компания"
               @input="this.$store.commit('setCompany', $event.target.value)"
            />
         </div>
         <div class="mt-10 transition ease-in-out hover:-translate-y-1">
            <router-link :to="{ name: 'v_main' }">
               <v_button
                  @click="deleteContact"
                  class="text-xl rounded-md border bg-transparent border-zinc-500 text-zinc-500 p-1 hover:text-red-500"
                  >Удалить контакт</v_button
               >
            </router-link>
         </div>
      </div>
   </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import v_button from '../UI/v_button.vue';
import v_input from '../UI/v_input.vue';
export default {
   name: 'contact_data',
   props: {
      i: {
         type: Number,
      },
   },
   component: { v_button, v_input },
   methods: {
      ...mapMutations({
         deleteContact: 'deleteContact',
         activationShow: 'activationShow',
         deactivationShow: 'deactivationShow',
         setaddPhoneNumber: 'setaddPhoneNumber',
         setEmail: 'setEmail',
         setAddress: 'setAddress',
         setCompany: 'setCompany',
         addInfoContact: 'addInfoContact',
         setPhoneNumber: 'setPhoneNumber',
         showEditData: 'showEditData',
         setName: 'setName',
         setSurname: 'setSurname',
         closAllShowButtonBack: 'closAllShowButtonBack',
      }),
   },

   computed: {
      ...mapGetters({}),
      ...mapState([
         'contact',
         'email',
         'show',
         'email',
         'addPhoneNumber',
         'address',
         'company',
         'showEdit',
      ]),
   },
   mounted() {
      this.$store.commit('contactPageLoading', this.$route.params.id);
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
