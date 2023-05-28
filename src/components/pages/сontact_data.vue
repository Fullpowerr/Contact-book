<template>
   <div class="flex">
      <div class="mx-auto text-center h-screen relative w-4/12 font-mono">
         <router-link :to="{ name: 'v_main' }">
            <div
               class="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-sky-700"
            >
               <v_button
                  @click="minimizeContactBack"
                  class="text-2xl border-y-2 border-cyan-700 tracking-[.50em] transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:text-sky-700"
                  >back..</v_button
               >
            </div>
         </router-link>
         <p class="m-6 text-5xl tracking-[.20em]">
            {{ contact.name }} {{ contact.surname }}
         </p>

         <div class="flex justify-items-center mt-10 relative">
            <p class="mr-4 mt-5 absolute left-0">phone:</p>
            <p class="mt-2 text-3xl absolute right-0">
               {{ contact.phoneNumber }}
            </p>
         </div>

         <div class="flex mt-10 t-0">
            <p class="mr-4 mt-5 absolute left-0">additional phone:</p>
            <p class="mt-2 text-3xl absolute right-0">
               {{ contact.addPhoneNumber }}
            </p>
         </div>

         <div class="flex mt-10">
            <p class="mr-2 mt-5 absolute left-0">email:</p>
            <p class="mt-2 text-3xl absolute right-0">{{ contact.email }}</p>
         </div>

         <div class="flex mt-10">
            <p class="mr-4 mt-5 absolute left-0">address:</p>
            <p class="mt-2 text-3xl absolute right-0">{{ contact.address }}</p>
         </div>
         <div class="flex mt-10">
            <p class="mr-4 mt-5 absolute left-0">company:</p>
            <p class="mt-2 text-3xl absolute right-0">{{ contact.company }}</p>
         </div>

         <div
            v-if="
               !contact.name ||
               !contact.surname ||
               !contact.addPhoneNumber ||
               !contact.email ||
               !contact.address ||
               !contact.company
            "
            class="mt-24 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-sky-700"
         >
            <v_button
               v-if="!show"
               @click="activationShow"
               class="text-xl border-y-2 border-sky-500 tracking-[.30em]"
            >
               Add data...
            </v_button>

            <v_button
               v-else
               @click="addInfoContact"
               class="text-xl border-y-2 border-sky-500 tracking-[.30em] cursor-pointer"
            >
               Save
            </v_button>
         </div>
         <div v-else class="mt-24">
            <!-- <v_button class="text-xl border-y-2 border-sky-500">
               редактировать</v_button
            > -->
         </div>
         <div
            v-if="show"
            class="flex flex-col justify-center mx-auto text-xl w-2/3"
         >
            <input
               v-if="!contact.name"
               class="border mt-4"
               type="text"
               placeholder="name"
               @input="this.$store.commit('setName', $event.target.value)"
            />
            <input
               v-if="!contact.surname"
               class="border mt-4"
               type="text"
               placeholder="surname"
               @input="this.$store.commit('setSurname', $event.target.value)"
            />
            <input
               v-if="!contact.addPhoneNumber"
               class="border mt-4"
               type="text"
               placeholder="phone number"
               @input="
                  this.$store.commit('setaddPhoneNumber', $event.target.value)
               "
            />
            <input
               v-if="!contact.email"
               class="border mt-2"
               type="text"
               placeholder="email"
               @input="this.$store.commit('setEmail', $event.target.value)"
            />
            <input
               v-if="!contact.address"
               class="border mt-4"
               type="text"
               placeholder="address"
               @input="this.$store.commit('setAddress', $event.target.value)"
            />
            <input
               v-if="!contact.company"
               class="border mt-4"
               type="text"
               placeholder="company"
               @input="this.$store.commit('setCompany', $event.target.value)"
            />
         </div>

         <div class="mt-20">
            <router-link :to="{ name: 'v_main' }">
               <v_button
                  @click="deleteContact"
                  class="text-xl border-y-4 border-red-500 tracking-[.40em]"
                  >Delete contact</v_button
               >
            </router-link>
         </div>
      </div>
   </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import v_button from '../UI/v_button.vue';
import v_input from '../UI/v_input.vue';
export default {
   name: 'contact_data',
   component: { v_button, v_input },
   props: {
      i: {
         type: Number,
      },
   },
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
         minimizeContactBack: 'minimizeContactBack',
      }),
   },
   computed: {
      ...mapState([
         'arrContacts',
         'contact',
         'email',
         'show',
         'email',
         'addPhoneNumber',
         'address',
         'company',
         'isExpanded',
      ]),
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
