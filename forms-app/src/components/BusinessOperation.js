import { useState } from 'react';
import PropTypes from "prop-types";

import { useForm } from "../hooks/useForm";

import { useChecklist } from 'react-checklist';


const dataList = [
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
        {/* textarea */}
        <div className="col-sm-10 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="business-type-input">
            Business Type:
          </label>
          <br />
          <textarea id="business-type-input" type="textarea"
                    className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                    name="businessType" value={businessType} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none'}}>
            Business Type required
          </span>
        </div>

        {/* checkbox area*/}
        <div className="form-group col-sm-5">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="business-type-input">
            I'm interested in the following coverage(s):
          </label>
          <br />

          {dataList.map((data) =>
            <div>
              <span className="lmgbi_formEntry">
                <input className="lmgbi_formValue lmgbi_useNameAttr" key={data._id} type="checkbox" value={data._id}/>
                {data.label}
              </span>
              <br />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BusinessOperation.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
};
