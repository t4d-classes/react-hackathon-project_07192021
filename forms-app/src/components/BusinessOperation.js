import { useState } from 'react';
import PropTypes from "prop-types";

export const BusinessOperation = ({ formData, change }) => {

  const { businessType } = formData;

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
          {formData.coverages.map((coverage) =>
            <div key={coverage.id}>
              <span className="lmgbi_formEntry">
                <input className="lmgbi_formValue lmgbi_useNameAttr" key={coverage.label} type="checkbox" value={coverage.label} />
                {coverage.label}
              </span>
              <br />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
