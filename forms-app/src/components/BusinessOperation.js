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

export const BusinessOperation = ({ formData, change }) => {

    const { businessType, coverages } = formData;

    return (
      <div className="container">
        <h1> Business Operation </h1>
        <div className="row">
          <div className="col-md-12 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
            <label className="lmgbi_formTitle" htmlFor="business-type-input">
                Business Type:
            </label>
            <br />
            <input id="business-type-input" type="textarea"
              className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
              name="businessType" value={businessType} onChange={change} />
            <br />
            <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none'}}>
                Business Type required</span>
          </div>

          <span className="required-marker"></span>
            <label className="lmgbi_formTitle" htmlFor="business-type-input">
                I'm interested in the following coverage(s):
            </label>
          <br />
            <span class="lmgbi_formEntry">
          <input class="lmgbi_formValue lmgbi_useNameAttr" id="property" type="checkbox" value="1" />
        </span>
        Property<br />
        <span class="lmgbi_formEntry">
          <input class="lmgbi_formValue lmgbi_useNameAttr" id="generalliability" type="checkbox" value="1" />
        </span>
        General Liability<br />
        <span class="lmgbi_formEntry">
          <input class="lmgbi_formValue lmgbi_useNameAttr" id="auto" type="checkbox" value="1" />
        </span>
        Auto<br />
        <span class="lmgbi_formEntry">
          <input class="lmgbi_formValue lmgbi_useNameAttr" id="workerscompensation" type="checkbox" value="1" />
        </span>
        Workers Compensation<br />
        <span class="lmgbi_formEntry">
          <input class="lmgbi_formValue lmgbi_useNameAttr" id="umbrella" type="checkbox" value="1" />
        </span>
        Umbrella<br />
        </div>        
        
      </div>
    );
  
  };
  
  BusinessOperation.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };