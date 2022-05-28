import { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};

export class App extends Component {

  state = {
    ...INITIAL_STATE,
  }

  loginInputId = nanoid();

 searchName = (value) => {
    return this.state.contacts.find(
      (item) => item.name.toUpperCase() === value.toUpperCase()
    );
  };
  formSubmitHandler = (data) => {
    const { name } = data;
    if (this.searchName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = { ...data, id: nanoid() };
      this.setState((state) => ({ contacts: [...state.contacts, contact] }));
    }
  };

  // addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //    this.setState(({ contacts }) => ({
  //       contacts: [newContact, ...contacts],
  //     }));
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // this.props.onSubmit({ ...this.state.contacts });
    // this.addContact();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} onSubmitContact={this.formSubmitHandler}>
          <label>Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.loginInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              />
          </label>
          <label>Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.loginInputId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        {/* <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li>
                {name}: {number}
            </li>
          ))}
       </ul> */}

      </div>
    )
  }
}