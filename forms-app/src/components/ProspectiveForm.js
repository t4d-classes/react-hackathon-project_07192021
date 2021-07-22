import PropTypes from "prop-types";
import { useForm } from '../hooks/useForm';

export const ProspectiveForm = ({ onSubmitForm }) => {

    const [regionForm, change, resetRegionForm] = useForm({
      name: '',
      abbr: '',
      region: '',
    }); 

    return(
<form className="container-fluid">
      <div className="row">
        <div className="col-md-12 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="name-input">
            NamedInsured:
          </label>
          <span className="required-marker"></span>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="name" value={regionForm.name} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Name required</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="name-input">
            FirstName:
          </label>
          <span className="required-marker"></span>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="abbr" value={regionForm.abbr} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Name required</span>
        </div>
      </div>     
           
    </form>


    );
};