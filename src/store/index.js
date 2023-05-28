import { createStore } from 'vuex';
export default createStore({
   state: () => ({
      show: false,
      searchQuery: '',
      id: null,
      name: '',
      email: '',
      surname: '',
      address: '',
      removeItemStorage: null,
      company: '',
      phoneNumber: null,
      isExpanded: false,
      addPhoneNumber: null,
      contact: {},
      arrContacts: [],
      dialogCreateContact: false,
      deleteObj: null,
      indexContact: null,
   }),
   getters: {
      searchContacts(state) {
         if (!state.searchQuery) {
            return state.arrContacts;
         } else {
            return state.arrContacts.filter((contact) =>
               (contact.name + ' ' + contact.surname)
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
            );
         }
      },
   },
   mutations: {
      setName(state, name) {
         state.name = name;
      },
      setSurname(state, surname) {
         state.surname = surname;
      },
      setPhoneNumber(state, phoneNumber) {
         state.phoneNumber = phoneNumber;
      },
      setaddPhoneNumber(state, payload) {
         state.addPhoneNumber = payload;
      },
      setEmail(state, payload) {
         state.email = payload;
      },
      setAddress(state, payload) {
         state.address = payload;
      },
      setCompany(state, payload) {
         state.company = payload;
      },
      setSearchQuery(state, searchQuery) {
         state.searchQuery = searchQuery;
      },
      setContactObj(state, payload) {
         state.contact = payload;
      },
      expandContact(state, payload) {
         state.arrContacts[payload].isExpanded = true;
      },
      minimizeContact(state, payload) {
         state.arrContacts[payload].isExpanded = false;
      },
      minimizeContactBack(state) {
         state.isExpanded = false;
         state.show = false;
         console.log('Назад');
      },
      activationShow(state) {
         state.show = true;
      },
      deactivationShow(state) {
         state.show = false;
      },
      indexContact(state, payload) {
         state.indexContact = payload;
      },
      createContact(state) {
         state.arrContacts = state.arrContacts;
         if ((state.name || state.surname) !== '') {
            state.arrContacts.push(
               (state.contact = {
                  name: state.name,
                  surname: state.surname,
                  phoneNumber: state.phoneNumber,
                  addPhoneNumber: state.addPhoneNumber,
                  isExpanded: false,
                  id: Date.now(),
               })
            );
         }
         localStorage.setItem(
            'all-contacts',
            JSON.stringify(state.arrContacts)
         );
         (state.name = ''), (state.surname = ''), (state.phoneNumber = '');
         state.dialogCreateContact = false;
      },

      addInfoContact(state) {
         if (state.name !== '') {
            state.arrContacts[state.indexContact].name = state.name;
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts[state.indexContact])
            );
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts)
            );
         }
         if (state.surname !== '') {
            state.arrContacts[state.indexContact].surname = state.surname;
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts[state.indexContact])
            );
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts)
            );
         }
         if (state.addPhoneNumber !== '') {
            state.arrContacts[state.indexContact].addPhoneNumber =
               state.addPhoneNumber;
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts[state.indexContact])
            );
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts)
            );
         }
         if (state.email !== '') {
            state.arrContacts[state.indexContact].email = state.email;
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts[state.indexContact])
            );
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts)
            );
         }
         if (state.address !== '') {
            state.arrContacts[state.indexContact].address = state.address;
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts[state.indexContact])
            );
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts)
            );
         }
         if (state.company !== '') {
            state.arrContacts[state.indexContact].company = state.company;
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts[state.indexContact])
            );
            localStorage.setItem(
               'all-contacts',
               JSON.stringify(state.arrContacts)
            );
         }
         (state.email = ''),
            (state.address = ''),
            (state.company = ''),
            (state.addPhoneNumber = ''),
            (state.show = false);
      },
      deleteContact(state) {
         state.removeItemStorage = JSON.parse(
            localStorage.getItem('all-contacts')
         );
         state.removeItemStorage.splice(state.indexContact, 1);
         state.arrContacts = state.removeItemStorage;
         localStorage.setItem(
            'all-contacts',
            JSON.stringify(state.arrContacts)
         );
         state.arrContacts.splice(state.indexContact, 1);
      },
      dialogCreateShow(state) {
         state.dialogCreateContact = true;
      },
      loadingArrContacts(state, payload) {
         state.arrContacts = payload;
      },
   },
   actions: {},
});
