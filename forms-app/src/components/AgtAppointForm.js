import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

export const AgtAppointForm = ({ onSubmitForm }) => {
  const [AgtAppointForm, change, resetAgtAppointForm] = useForm({
    agencyName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    keyContactFirstName: "",
    keyContactLastName: "",
    keyContactTitle: "",
    agencyYearsInBusiness: "",
    agencyStructure: "",
    agencyWebsiteAddress: "",
  });

  const submitForm = () => {
    onSubmitForm(AgtAppointForm).then(() => {
      resetAgtAppointForm();
    });
  };

  return (
    <form className="container-fluid">
      <div className="row">
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="agencyName">
            Agency Name:
          </label>
          <span className="required-marker"></span>
          <input
            id="agencyName"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="agencyName"
            value={AgtAppointForm.agencyName}
            onChange={change}
          />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Agency Name required
          </span>
        </div>
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="streetAddress">
            Street Address:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="streetAddress"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="streetAddress"
            value={AgtAppointForm.streetAddress}
            onChange={change}
          />
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Street Address required
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="city">
            City:
          </label>
          <span className="required-marker"></span>
          <input
            id="city"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="city"
            value={AgtAppointForm.city}
            onChange={change}
          />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            City Name required
          </span>
        </div>
        <div className="col-md-3 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="state">
            State:
          </label>
          <span className="required-marker"></span>
          <br />
          <select
            id="state"
            className="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="state"
          >
            <option>Select One</option>
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
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            State is required
          </span>
        </div>
        <div className="col-md-3 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="zipCode">
            ZipCode:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="zipCode"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="zipCode"
            value={AgtAppointForm.zipCode}
            onChange={change}
          />
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Zip Code required
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <span className="required-marker"></span>
          <input
            id="phoneNumber"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="phoneNumber"
            value={AgtAppointForm.phoneNumber}
            onChange={change}
          />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Phone Number required
          </span>
        </div>
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="email">
            Email:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="email"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="email"
            value={AgtAppointForm.email}
            onChange={change}
          />
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Email required
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="keyContactFirstName">
            Key Contact First Name:
          </label>
          <span className="required-marker"></span>
          <input
            id="keyContactFirstName"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="keyContactFirstName"
            value={AgtAppointForm.keyContactFirstName}
            onChange={change}
          />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Contact FirstName required
          </span>
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="keyContactLastName">
            Key Contact Last Name:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="keyContactLastName"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="keyContactLastName"
            value={AgtAppointForm.keyContactLastName}
            onChange={change}
          />
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Contact LastName required
          </span>
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="keyContactTitle">
            Key Contact's Title:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="keyContactTitle"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="keyContactTitle"
            value={AgtAppointForm.keyContactTitle}
            onChange={change}
          />
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            contact Title required
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="agencyYearsInBusiness">
            Agency's Years in Business:
          </label>
          <span className="required-marker"></span>
          <br />
          <select
            id="agencyYearsInBusiness"
            className="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="agencyYearsInBusiness"
          >
            <option>Select One</option>
            <option value="1">1 Year</option>
            <option value="2">1-3 Years</option>
            <option value="3">Greater than 3 Years</option>
          </select>
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Agency Years in Business is required
          </span>
        </div>

        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="agencyStructure">
            Agency's Structure:
          </label>
          <span className="required-marker"></span>
          <br />
          <select
            id="agencyStructure"
            className="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="agencyStructure"
          >
            <option>Select One</option>
            <option value="Corporation">Corporation</option>
            <option value="Partnership">Partnership</option>
            <option value="Sole Proprietor">Sole Proprietor</option>
            <option value="LLC">LLC</option>
            <option value="LLP">LLP</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Agency's Structure is required
          </span>
        </div>


      </div>

      <div className="row">
        <button type="button" onClick={submitForm}>
          submit
        </button>
      </div>
    </form>
  );
};

AgtAppointForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
