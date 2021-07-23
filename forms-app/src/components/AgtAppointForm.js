import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";
import { useAgtAppoint } from '../hooks/useAgtAppoint';
import {useState} from 'react'

export const AgtAppointForm = () => {
  const { agtAppoints, deleteAgtAppoint, appendAgtAppoint } = useAgtAppoint();
  const [errorMessages, setErrorMessages] = useState([]);
  const [AgtAppointForm, change, resetAgtAppointForm] = useForm({
    agencyName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    keyContactFirstName: '',
    keyContactLastName: '',
    keyContactTitle: '',
    agencyYearsInBusiness: '',
    agencyStructure: '',
    agencyWebsiteAddress: '',
    numberOfAgencyOfficeLocations: '',
    officeLocations: '',
    numberOfCommercialLinesProducers: '',
    numberOfCommercialLinesCSRs: '',
    totalCommercialLinesAgencyPremium: '',
    numberOfCommercialLinesAccounts: '',
    carrier1: '',
    writtenPremium1: '',
    lossRatio1: '',
    carrier2: '',
    writtenPremium2: '',
    lossRatio2: '',
    carrier3: '',
    writtenPremium3: '',
    lossRatio3: '',
    agencySpecialization: '',
    sizeOfAccounts: '',
    additionalComments: ''
  });

  const submitForm = () => {
    let errors = []

    if (AgtAppointForm.agencyName.length === 0) {
      errors.push("Agency name is required.");

    }
    if (AgtAppointForm.streetAddress.length === 0) {
      errors.push("Street address is required.");

      }
    if (AgtAppointForm.city.length === 0) {
      errors.push("City is required.");
    }
    if (AgtAppointForm.state.length === 0) {
      errors.push("State is required.");

      }
    if (AgtAppointForm.zipCode.length === 0) {
      errors.push("Zipcode is required.");

      }
    if (AgtAppointForm.phoneNumber.length === 0) {
      errors.push("Phone number is required.");

    }
    if (AgtAppointForm.email.length === 0) {
      errors.push("Email is required.");

    }
    if (AgtAppointForm.keyContactFirstName.length === 0) {
      errors.push("Key contact first name is required.");

    }
    if (AgtAppointForm.keyContactLastName.length === 0) {
      errors.push("Key contact last name is required.");

    }
    if (AgtAppointForm.keyContactTitle.length === 0) {
      errors.push("Key contact title is required.");

    }
    if (AgtAppointForm.agencyYearsInBusiness.length === 0) {
      errors.push("Agency years in business is required.");

    }
    if (AgtAppointForm.agencyStructure.length === 0) {
      errors.push("Agency structure is required.");

    }
    if (AgtAppointForm.agencyWebsiteAddress.length === 0) {
      errors.push("Agency website address is required.");

    }
    if (AgtAppointForm.numberOfAgencyOfficeLocations.length === 0) {
      errors.push("Number of agency office locations is required.");

    }
    if (AgtAppointForm.officeLocations.length === 0) {
      errors.push("Office locations are required.");

    }
    if (AgtAppointForm.numberOfCommercialLinesProducers.length === 0) {
      errors.push("Number of commercial line producers is required.");

    }
    if (AgtAppointForm.numberOfCommercialLinesCSRs.length === 0) {
      errors.push("Number of commercial line CSRs is required.");

    }
    if (AgtAppointForm.totalCommercialLinesAgencyPremium.length === 0) {
      errors.push("Total commercial lines  agency premium is required.");

    }
    if (AgtAppointForm.numberOfCommercialLinesAccounts.length === 0) {
      errors.push("Number of commercial lines accounts is required.");

    }

    if (AgtAppointForm.agencySpecialization.length === 0) {
      errors.push("Agency specialization is required.");

    }
    if (AgtAppointForm.sizeOfAccounts.length === 0) {
      errors.push("Size of accounts is required.");

    }
    if(errors){
        setErrorMessages(errors)
        return
    }
    setErrorMessages([]);
    appendAgtAppoint(AgtAppointForm).then(() => {
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
        <div className="col-md-4 form-group lmgbi_formEntry">
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

        <div className="col-md-4 form-group lmgbi_formEntry">
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
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="agencyWebsiteAddress">
            Agency's Website Address:
        </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="agencyWebsiteAddress"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="agencyWebsiteAddress"
            value={AgtAppointForm.agencyWebsiteAddress}
            onChange={change}
          />
          <br />
          <span className="lmgbi_formAlert" style={{ color: "red", display: "none" }}>Agency Website required</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="numberOfAgencyOfficeLocations">
            Number of Agency Office Locations:
          </label>
          <span className="required-marker"></span>
          <input
            id="numberOfAgencyOfficeLocations"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="numberOfAgencyOfficeLocations"
            value={AgtAppointForm.numberOfAgencyOfficeLocations}
            onChange={change}
          />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Number of Agency Office Locations required
          </span>
        </div>
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="officeLocations">
            Office Locations:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="officeLocations"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="officeLocations"
            value={AgtAppointForm.officeLocations}
            onChange={change}
          />
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Office Locations required
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-group form-inline lmgbi_formEntry">
            <label class="lmgbi_formTitle" htmlFor="numberOfCommercialLinesProducers">
              Number of Commercial Lines Producers
              </label>
            <span class="required-marker"></span>
            <br/>
            <select name="numberOfCommercialLinesProducers" id="numberOfCommercialLinesProducers" class="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" >
              <option>Select One</option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11-30">11-30</option>
              <option value="More than 30">More than 30</option>
            </select>
            <br/>
            <span class="lmgbi_formAlert" style={{color:'red', display: 'none'}}>Number of Commercial Lines Producers required</span>
        </div>
        <div class="col-md-6 form-group form-inline lmgbi_formEntry">
            <label class="lmgbi_formTitle" htmlFor="numberOfCommercialLinesCSRs">Number of Commercial Lines CSRs</label>
            <span class="required-marker"></span>
            <br/>
            <select id="numberOfCommercialLinesCSRs" name="numberOfCommercialLinesCSRs" class="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr">
              <option>Select One</option>
              <option value="0">0</option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11-30">11-30</option>
              <option value="More than 30">More than 30</option>
            </select>
            <br/>
            <span class="lmgbi_formAlert" style={{color:'red', display: 'none'}}>Number of Commercial Lines CSRs required</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-group form-inline lmgbi_formEntry">
            <label class="lmgbi_formTitle" htmlFor="totalCommercialLinesAgencyPremium">
              Total Commercial Lines Agency Premium
              </label>
            <span class="required-marker"></span>
            <br/>
            <select id="totalCommercialLinesAgencyPremium" name="totalCommercialLinesAgencyPremium" class="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" >
              <option>Select One</option>
              <option value="Less than $100,000">Less than $100,000</option>
              <option value="$100,000 to $1m">$100,000 to 1m</option>
              <option value="$1m to $5m">$1m to $5m</option>
              <option value="Greater than $5m">Greater than $5m</option>
            </select>
            <br/>
            <span class="lmgbi_formAlert" style={{color:'red', display: 'none'}}>
              Total Commercial Lines Agency Premium required
            </span>
        </div>
        <div class="col-md-6 form-group form-inline lmgbi_formEntry">
            <label class="lmgbi_formTitle" htmlFor="numberOfCommercialLinesAccounts">
              Number of Commercial Lines Accounts
            </label>
            <span class="required-marker"></span>
            <br/>
            <select id="numberOfCommercialLinesAccounts" name="numberOfCommercialLinesAccounts" class="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" >
              <option>Select One</option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11-50">11-50</option>
              <option value="Greater than 50">Greater than 50</option>
            </select>
            <br/>
            <span class="lmgbi_formAlert" style={{color:'red', display: 'none'}}>
              Number of Commercial Lines Accounts required
            </span>
        </div>
      </div>
      <div className="row">
        <h6>Top 3 Current Commercial Lines Markets (Carriers):</h6>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="carrier1">
          Carrier:
          </label>
          <span className="required-marker"></span>
          <input
            id="carrier1"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="carrier1"
            value={AgtAppointForm.carrier1}
            onChange={change}
          />
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="writtenPremium1">
          Written Premium:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="writtenPremium1"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="writtenPremium1"
            value={AgtAppointForm.writtenPremium1}
            onChange={change}
          />
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="lossRatio1">
          Loss Ratio %:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="lossRatio1"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="lossRatio1"
            value={AgtAppointForm.lossRatio1}
            onChange={change}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="carrier2">
          Carrier:
          </label>
          <span className="required-marker"></span>
          <input
            id="carrier2"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="carrier2"
            value={AgtAppointForm.carrier2}
            onChange={change}
          />
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="writtenPremium2">
          Written Premium:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="writtenPremium2"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="writtenPremium2"
            value={AgtAppointForm.writtenPremium2}
            onChange={change}
          />
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="lossRatio2">
          Loss Ratio %:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="lossRatio2"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="lossRatio2"
            value={AgtAppointForm.lossRatio2}
            onChange={change}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="carrier3">
          Carrier:
          </label>
          <span className="required-marker"></span>
          <input
            id="carrier3"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="carrier3"
            value={AgtAppointForm.carrier3}
            onChange={change}
          />
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="writtenPremium3">
          Written Premium:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="writtenPremium3"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="writtenPremium3"
            value={AgtAppointForm.writtenPremium3}
            onChange={change}
          />
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="lossRatio3">
          Loss Ratio %:
          </label>
          <span className="required-marker"></span>
          <br />
          <input
            id="lossRatio3"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="lossRatio3"
            value={AgtAppointForm.lossRatio3}
            onChange={change}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="agencySpecialization">
          Agency specialization in a particular line of business or product:
          </label>
          <span className="required-marker"></span>
          <input
            id="agencySpecialization"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="agencySpecialization"
            value={AgtAppointForm.agencySpecialization}
            onChange={change}
          />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Agency specialization required
          </span>
        </div>
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="sizeOfAccounts">
          Size of accounts agency currently writes:
          </label>
          <span className="required-marker"></span>
          <br />
          <select
            id="sizeOfAccounts"
            className="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="sizeOfAccounts"
          >
            <option>Select One</option>
            <option value="1">Small</option>
            <option value="2">Mid-Size</option>
            <option value="3">Large(1,000+ employees)</option>

          </select>
          <br />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Size of accounts is required
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="additionalComments">
          Additional Comments:
          </label>
          <span className="required-marker"></span>
          <textarea
            id="additionalComments"
            type="textbox"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            rows="6"
            name="additionalComments"
            value={AgtAppointForm.additionalComments}
            onChange={change}
          />
          <span
            className="lmgbi_formAlert"
            style={{ color: "red", display: "none" }}
          >
            Agency specialization required
          </span>
        </div>
        </div>
    <div class="row">
      {
        errorMessages ? errorMessages.map(message => <p style={{color: 'red'}}>{message}</p>) : <></>
      }
    </div>

    <div class="row">
      <div class="form-actions spacing-top-md-lg col-md-6 col-md-offset-5">
      <span class="required-marker"></span>
        Required Fields &nbsp; &nbsp;
      <input class="input-submit btn btn-primary" id="lmgbi_formSubmitBtn" type="button"
          value="Submit" onClick={()=>{submitForm()}}/>
      </div>
      </div>
    </form>
  );
};

AgtAppointForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
