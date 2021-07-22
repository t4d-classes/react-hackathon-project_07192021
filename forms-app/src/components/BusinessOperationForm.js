import { useState } from 'react';
import PropTypes from "prop-types";

import { useForm } from "../hooks/useForm";

import { useChecklist } from 'react-checklist';


const data = [
    { _id: 1, label: 'Property' },
    { _id: 2, label: 'General Liability' },
    { _id: 4, label: 'Auto' },
    { _id: 5, label: 'Workers Compenstation' },
    { _id: 6, label: 'Umbrella' },
  ]

export const BusinessOperationForm = ({ onSubmitForm }) => {

    const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
        key: '_id',
        keyType: 'number',
    });

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
        <div className="row">
          <div className="col-md-12 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
            <label className="lmgbi_formTitle" htmlFor="business-type-input">
                Business Type:
            </label>
            <br />
            <input id="business-type-input" type="textarea"
              className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
              name="businessType" value={businessOperationForm.businessType} onChange={change} />
            <br />
            <span className="lmgbi_formAlert" style={{ color: 'red', display: errorMessage ? 'inline' : 'none' }}>
                Business Type required</span>
            <span className="required-marker"></span>
            <label className="lmgbi_formTitle" htmlFor="business-type-input">
                I'm interested in the following coverage(s):
            </label>
        








     
        </div>
        </div>


        
        <div className="row">
          <button type="button" onClick={submitForm}>Submit </button>
        </div>

        <div className="row">
        <span className="required-marker"></span>
            <label className="lmgbi_formTitle" htmlFor="business-type-input">
                Indicates a required field
            </label>
        </div>



      </form>
    );
  
  };
  
  BusinessOperationForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };