import PropTypes from "prop-types";

export const ProspectiveCustomer = ({ formData, change }) => {
  const {namedInsured, firstName, lastName, phoneNumber, emailAddress, state } = formData

  return (

    <div className="container">
      <h1>Prospective Customer</h1>
      <div className="row">
        {/* Named Insured */}
        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Named Insured
          </label>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="namedInsured" value={namedInsured} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none ' }}>agency required</span>
        </div>

        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            First Name
          </label>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="firstName" value={firstName} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none ' }}>agency required</span>
        </div>
      </div>

      <div className="row">
        {/* Last Name */}
        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Last Name
          </label>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="lastName" value={lastName} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none ' }}>agency required</span>
        </div>

        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Phone Number
          </label>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="phoneNumber" value={phoneNumber} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none ' }}>agency required</span>
        </div>
      </div>


      <div className="row">
        {/* Email Address */}
        <div className="col-sm-5 form-group lmgbi_formEntry">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Email Address
          </label>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="emailAddress" value={emailAddress} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none ' }}>agency required</span>
        </div>

        <div className="col-sm-5 control-select">
          <span className="required-marker"></span>
          <label className="lmgbi_formTitle">State:</label>
          <br />
          <select className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                  name="state" value={state} onChange={change}>
            <option disabled="disabled" selected="selected">--None--</option>
            <option value="AK|West">AK</option>
            <option value="AL|South">AL</option>
            <option value="AR|Central">AR</option>
            <option value="AZ|Central">AZ</option>
            <option value="CA|West">CA</option>
            <option value="CO|Central">CO</option>
            <option value="CT|North">CT</option>
            <option value="DC|South">DC</option>
            <option value="DE|South">DE</option>
            <option value="FL|South">FL</option>
            <option value="GA|South">GA</option>
            <option value="IA|Central">IA</option>
            <option value="ID|Central">ID</option>
            <option value="IL|North">IL</option>
            <option value="IN|North">IN</option>
            <option value="KS|Central">KS</option>
            <option value="KY|South">KY</option>
            <option value="LA|Central">LA</option>
            <option value="MA|North">MA</option>
            <option value="MD|South">MD</option>
            <option value="ME|North">ME</option>
            <option value="MI|North">MI</option>
            <option value="MN|Central">MN</option>
            <option value="MO|Central">MO</option>
            <option value="MS|South">MS</option>
            <option value="MT|Central">MT</option>
            <option value="NC|South">NC</option>
            <option value="ND|Central">ND</option>
            <option value="NE|Central">NE</option>
            <option value="NH|North">NH</option>
            <option value="NJ|South">NJ</option>
            <option value="NM|Central">NM</option>
            <option value="NV|Central">NV</option>
            <option value="NY|North">NY</option>
            <option value="OH|North">OH</option>
            <option value="OK|Central">OK</option>
            <option value="OR|West">OR</option>
            <option value="PA|North">PA</option>
            <option value="RI|North">RI</option>
            <option value="SC|South">SC</option>
            <option value="SD|Central">SD</option>
            <option value="TN|South">TN</option>
            <option value="TX|Central">TX</option>
            <option value="UT|Central">UT</option>
            <option value="VA|South">VA</option>
            <option value="VT|North">VT</option>
            <option value="WA|West">WA</option>
            <option value="WI|North">WI</option>
            <option value="WV|South">WV</option>
            <option value="WY|Central">WY</option>
          </select>
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none ' }}>State required</span>
        </div>
      </div>
    </div>
  );
};
