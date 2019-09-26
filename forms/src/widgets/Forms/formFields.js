import React from 'react';

const formFields = (props) => {
    let formArray = [];
  const renderFields = () => {
    for(let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      });
    }

    return formArray.map((item,i) => {
      return (
        <div key={i} className='form_element'>
            {renderTemplates(item)}
        </div>
      )
    })
  }

  const showLabel = (label, labelText) => {
    return label ?
      <label>{labelText}</label>
    : null;
  }

  const changeHandler = (event,id) => {
    const newState = props.formData;

    newState[id].value=event.target.value;

    let validData = validate(newState[id]);
    newState[id].valid = validData[0];
    newState[id].validationMessage = validData[1];

    console.log(newState);
    props.change(newState);
  }

  const validate = (element) => {
    let error = [true,''];

    if(element.validation.required){
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required':''}`;

      error = !valid?[valid,message]:error;
    }

    return error;
  }

  const renderTemplates = (data) => {
    let formTemplate = '';
    let values = data.settings;
    
    switch(values.element){
      case('input'):
      formTemplate = (
        <div>
          {showLabel(values.label, values.labelText)}
          <input {...values.config} value={values.value} onChange={
            (event) => changeHandler(event,data.id)
          }/>
        </div>
      )
      break;
      case('textarea'):
      formTemplate = (
        <div>
          {showLabel(values.label, values.labelText)}
          <textarea {...values.config} value={values.value} onChange={
            (event) => changeHandler(event,data.id)
          } />
        </div>
      )
      break;
      case('select'):
      formTemplate = (
        <div>
          {showLabel(values.label, values.labelText)}
          <select value={values.value} name={values.config.name} onChange={
            (event) => changeHandler(event,data.id)
          }>
            {values.config.options.map( (item,i) => (
              <option key={i} value={item.val}>{item.text}</option>
            ))
          }
          </select>
        </div>
      )
      break;
        default:
        formTemplate=null;
    }
    return formTemplate;
  }
  return ( <div>
    {renderFields()}
  </div> );
}
 
export default formFields;