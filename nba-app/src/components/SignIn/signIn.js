import React, { Component } from 'react';
import styles from './signIn.module.css';
import FormField from '../widgets/formFields/formFields';
import { firebase } from '../../firebase';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      registerError: '',
      loading: false,
      formData: {
        email: {
          element: 'input',
          value: '',
          config: {
            name: 'email_input',
            type: 'email',
            placeholder: 'Enter your email'
          },
          validation: {
            required: true,
            email: true
          },
          valid: false,
          touched: false,
          validationMessage: ''
        },
        password: {
          element: 'input',
          value: '',
          config: {
            name: 'password_input',
            type: 'password',
            placeholder: 'Enter your password'
          },
          validation: {
            required: true,
            password: true
          },
          valid: false,
          touched: false,
          validationMessage: ''
        }
      }
     }
  }

  updateForm = (element) => {
    const newFormData = {
      ...this.state.formData
    }

    const newElement = {
      ...newFormData[element.id]
    }

    if(element.blur) {
      let validateData = this.validate(newElement);
      newElement.valid = validateData[0];
      newElement.validationMessage = validateData[1];
    }

    newElement.touched = element.blur;
    newElement.value = element.event.target.value;
    newFormData[element.id] = newElement;

    this.setState({
      formData: newFormData
    })

  }

  validate = (element) => {
    let error = [true,''];

    if(element.validation.email) {
      const valid = /(.+)@(.+){2,}\.(.+){2,}/.test(element.value)
      const message = `${!valid ? 'Must be a valid email': ''}`;
      error = !valid ? [valid, message ] :error;
    }

    if(element.validation.password) {
      const valid = element.value.length >= 5;
      const message = `${!valid ? 'Must be greater than 4': ''}`;
      error = !valid ? [valid, message ] :error;
    }

    if(element.validation.required) {
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required': ''}`;
      error = !valid ? [valid, message ] :error;
    }

    return error;
  }

  submitForm = (event, logIn)  => {
    event.preventDefault();

    if(logIn !== null) {
      let dataToSubmit = {};
      let formIsValid = true;

      for(let key in this.state.formData){
        dataToSubmit[key] = this.state.formData[key].value; 
      }

      for(let key in this.state.formData){
        formIsValid = this.state.formData[key].valid && formIsValid;
      }

      if(formIsValid) {
        console.log(dataToSubmit);

        this.setState({
          registerError: '',
          loading: true
        })

        if (logIn) {
          firebase.auth().signInWithEmailAndPassword(dataToSubmit.email,dataToSubmit.password).then(() => {
            this.props.history.push('/');
          }).catch((error) => {
            this.setState({
              registerError: error.message,
              loading: false
            });
          })
        } else {
          firebase.auth().createUserWithEmailAndPassword(dataToSubmit.email,dataToSubmit.password).then(() => {
            this.props.history.push('/');
          }).catch((error) => {
            this.setState({
              registerError: error.message,
              loading: false
            });
          })
        }
      }
    }
  }

  submitButton = () => (
    this.state.loading ? 'loading...': <div>
       <button onClick={(event) => this.submitForm(event, false)}>Register now</button>
       <button onClick={(event) => this.submitForm(event, true)}>Log in</button>
    </div>
  )

  showError = () => (
    this.registerError !== '' ? 
    <div className={styles.error}>{this.state.registerError}</div> : ''
  )
  render() {
    return (
    <div className={styles.container}>
      <h2>Register / Login</h2>
      <form onClick={(event) => this.submitForm(event, null)}>
        <FormField id={'email'} formData={this.state.formData.email} change={(element) => this.updateForm(element)}/>
        <FormField id={'password'} formData={this.state.formData.password} change={(element) => this.updateForm(element)}/>
        {this.submitButton()}
        {this.showError()}
      </form>
    </div> );
  }
}

export default SignIn;