import React from 'react';
import styles from './formFields.module.css';

const FormFields = ({ formData, change, id}) => {
  const renderData = () => {
     let formTemplate = null;

     switch(formData.element){
       case('input'):
       formTemplate = (
          <div>
           <input {...formData.config}
          onBlur={ (event) => change({event, id, blur:true})}
          onChange={ (event) => change({event, id, blur:false})}
           />
         </div>
       )
       break;
       default:
       formTemplate = null;
     }

     return formTemplate;
  }

  const showError = () => {
    let errorMessage = null;

    if(formData.validation && !formData.valid){
      errorMessage = (
        <div className={styles.label_error}>{formData.validationMessage}</div>
      )
    }

    return errorMessage;
  }

  return (
    <div>
      {renderData()}
      {showError()}
    </div>
    );
}
 
export default FormFields;