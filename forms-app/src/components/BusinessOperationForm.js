import { useState } from 'react';
import PropTypes from "prop-types";

import { useForm } from "../hooks/useForm";

export const BusinessOperationForm = ({ onSubmitForm }) => {

    const [errorMessage, setErrorMessage] = useState('');
  
    const [businessOperationForm, change, resetBusinessOperationForm] = useForm({
        businessType: '',
    });
  
    const submitForm = () => {
  
      if (businessOperationForm.businessType.length === 0) {
        setErrorMessage("Business Type is required.");
        return;
      }
  
      setErrorMessage('');
      onSubmitForm({ name: businessOperationForm.businessType });
      resetBusinessOperationForm();
    };
  
    return (
      <form className="container-fluid">
        {errorMessage ? <span>Form is Invalid</span> : <span>Form is Valid</span>}
        {errorMessage && <div className="row">
          <p className="col-md-12">
            {errorMessage}
          </p>
        </div>}
        <div className="row">
          <div className="col-md-12 form-group lmgbi_formEntry">
            <label className="lmgbi_formTitle" htmlFor="business-type-input">
                Business Type:
            </label>
            <span className="required-marker"></span>
            <br />
            <input id="business-type-input" type="text"
              className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
              name="businessType" value={businessOperationForm.businessType} onChange={change} />
            <br />
            <span className="lmgbi_formAlert" style={{ color: 'red', display: errorMessage ? 'inline' : 'none' }}>
                Business Type required</span>
          </div>
        </div>
        <div className="row">
          <button type="button" onClick={submitForm}>Add </button>
        </div>
      </form>
    );
  
  };
  
  BusinessOperationForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };