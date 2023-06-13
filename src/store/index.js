import { createStore } from 'vuex';
export default createStore({
   state: () => ({
      show: false,
      showEdit: false,
      dialogCreateContact: false,
      searchQuery: '',
      id: null,
      name: '',
      email: '',
      surname: '',
      address: '',
      company: '',
      phoneNumber: null,
      isExpanded: false,
      addPhoneNumber: null,
      contact: {},
      arrContacts: [],
      deleteObj: null,
      indexContact: null,
   }),
   getters: {
      // поиск по массиву + сортировка по алфавиту
      searchContacts(state) {
         if (!state.searchQuery) {
            return state.arrContacts.sort((prev, next) => {
               if (prev.name < next.name) return -1;
               if (prev.name < next.name) return 1;
            });
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
      activationShow(state) {
         state.show = true;
         state.showEdit = false;
         (state.name = ''),
            (state.surname = ''),
            (state.phoneNumber = ''),
            (state.addPhoneNumber = ''),
            (state.address = ''),
            (state.email = ''),
            (state.company = '');
      },
      deactivationShow(state) {
         state.show = false;
      },
      showEditData(state) {
         state.showEdit = true;
         state.show = false;
      },
      indexContact(state, payload) {
         state.indexContact = payload;
      },

      // создать контакт, + save в localStorage
      createContact(state) {
         if (state.name || state.surname) {
            state.arrContacts.push(
               (state.contact = {
                  name: state.name,
                  surname: state.surname,
                  phoneNumber: state.phoneNumber,
                  isExpanded: false,
                  id: Date.now(),
               })
            );
            state.dialogCreateContact = false;
         }
         localStorage.setItem(
            'all-contacts',
            JSON.stringify(state.arrContacts)
         );
         (state.name = ''), (state.surname = ''), (state.phoneNumber = '');
      },

      // добвить информацию в выбранный контакт + save в localStorage + редактирование
      addInfoContact(state) {
         if (state.name) {
            state.arrContacts[state.indexContact].name = state.name;
         }
         if (state.surname) {
            state.arrContacts[state.indexContact].surname = state.surname;
         }
         if (state.phoneNumber) {
            state.arrContacts[state.indexContact].phoneNumber =
               state.phoneNumber;
         }
         if (state.addPhoneNumber) {
            state.arrContacts[state.indexContact].addPhoneNumber =
               state.addPhoneNumber;
         }
         if (state.email) {
            state.arrContacts[state.indexContact].email = state.email;
         }
         if (state.address) {
            state.arrContacts[state.indexContact].address = state.address;
         }
         if (state.company) {
            state.arrContacts[state.indexContact].company = state.company;
         }
         localStorage.setItem(
            'all-contacts',
            JSON.stringify(state.arrContacts[state.indexContact])
         );
         localStorage.setItem(
            'all-contacts',
            JSON.stringify(state.arrContacts)
         );
         (state.name = ''),
            (state.surname = ''),
            (state.email = ''),
            (state.phoneNumber = ''),
            (state.address = ''),
            (state.company = ''),
            (state.addPhoneNumber = ''),
            (state.show = false);
         state.showEdit = false;
      },

      // удалить выбранный контакт и удалить из Localstorage
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

      // закрыть модальное окно, нажатием вне окна
      closeDialogCreateShow(state) {
         state.dialogCreateContact = false;
         state.name = '';
         state.surname = '';
         state.phoneNumber = '';
      },
      closAllShowButtonBack(state) {
         state.show = false;
         state.showEdit = false;
      },

      // загрузка данных из массива, при открытии страницы
      loadingPageContactsList(state, payload) {
         if (payload !== null) {
            state.arrContacts = payload;
         }
      },

      // загрузка страницы с выбранным контактом, из localStorage
      contactPageLoading(state, payload) {
         state.arr = JSON.parse(localStorage.getItem('all-contacts'));
         state.arrContacts = state.arr;
         state.indexContact = state.arr.findIndex((el) => el.id == payload);
         state.contact = state.arr.find((el) => el.id == payload);
      },
   },
   actions: {},
});
