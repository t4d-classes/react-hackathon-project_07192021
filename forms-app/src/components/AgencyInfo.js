export const AgencyInfo = ({formData, change}) => {

  const {agencyCode, mobile, producerName, producerEmail} = formData

  return (
    <div className='container'>
      <h1>Lead Intake</h1>
      <br />
      <h1>Agency Information</h1>
      {/* agency code name */}
      <div className="row">
        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Agency Code
          </label>
          <br />
          <input id="name-input" type="text"
                 className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                 name="agencyCode" value={agencyCode} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{color: 'red', display: 'none '}}>agency required</span>
        </div>
      </div>

      {/* producer's mobile */}
      <div className="row">
        <div className="col-sm-5 form-group lmgbi_formEntry">
          <label className="lmbi_formTitle" htmlFor="name-input">
            Producer's Mobile/Cell
          </label>
          <br />
          <input id="name-input" type="text"
                 className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                 name="mobile" value={mobile} onChange={change} />
          <br />
        </div>
      </div>
      <i>*Acknowledgement of lead submission will be sent via text to the above provided number.</i>

      {/* producer's name */}
      <br />
      <br />
      <div className="row">
        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Producer Name
          </label>
          <br />
          <input id="name-input" type="text"
                 className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                 name="producerName" value={producerName} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{color: 'red', display: 'none '}}>name required</span>
        </div>
      </div>
      {/* producer's email */}
      <div className="row">
        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Producer's Email
          </label>
          <br />
          <input id="name-input" type="text"
                 className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                 name="producerEmail" value={producerEmail} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{color: 'red', display: 'none '}}>email required</span>
        </div>
      </div>
      <i>*Notification of lead outcome will be sent to above provided email.</i>
    </div>
  )
}
