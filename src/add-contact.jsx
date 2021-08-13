import react from "react";
import { connect } from "react-redux";

import {addContact} from './actions';

class AddContactForm extends (react.Component) {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const email = target.email;
    const phone = target.phone;
    const address = target.address;
    const city= target.city;
    const state= target.state;
    const zipcode= target.zipcode;

    this.setState({
      [name]: value,
      [email]: value,
      [phone]: value,
      [address]: value,
      [city]: value,
      [state]: value,
      [zipcode]: value
    });
  }

  handleSubmit(event) {
    alert('New contact was submitted: ' + this.state.value);
    event.preventDefault();
  }

  go_back(_event) {
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleInputChange(e) }>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          Address:
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          City:
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          State:
          <input
            name="state"
            type="text"
            value={this.state.state}
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          Zipcode:
          <input
            name="zipcode"
            type="text"
            value={this.state.zipcode}
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <button type="submit" onClick={(e) => this.handleSubmit(e)}>Add Contact</button>
        <button type="button" onClick={(e) => this.go_back(e)}>Go Back</button>
      </form>
    );
  }
}


function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return{
    addContact: function (data) {
      dispatch(addContact(data))
    }
  }
}

var ConnectedContacts = connect(mapStateToProps, mapDispatchToProps)(AddContactForm)

export default ConnectedContacts;
