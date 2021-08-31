import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';
// import contactsOperations from "./redux/contacts-operation";

function App() {
  //   const dispatch = useDispatch();

  // useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });
// export default connect(null, mapDispatchToProps)(App);

export default App;
