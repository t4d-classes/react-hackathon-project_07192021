import { AgencyInfo } from './AgencyInfo';
import {ProspectiveCustomer} from './ProspectiveCustomer';
import { useForm } from '../hooks/useForm';
import { BusinessOperation } from './BusinessOperation';

export const LeadIntakeForm = ({onSubmitForm}) => {

  const [intakeForm, change, resetIntakeForm] = useForm({
    // Agency Information inputs
    agencyCode: '',
    mobile: '',
    producerName: '',
    producerEmail: '',

    // Prospective Customer inputs
    namedInsured: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    state: '', // dropdown for all states.

    // Business Operation
    businessType: '', // textarea type.
    coverages: [
      { id: 1, label: 'Property' },
      { id: 2, label: 'General Liability' },
      { id: 4, label: 'Auto' },
      { id: 5, label: 'Workers Compenstation' },
      { id: 6, label: 'Umbrella' },
    ], // figuring out how the container can keep the state data.
  });


  const submitForm = () => {
    onSubmitForm(intakeForm).then(() => {
      resetIntakeForm();
    });
  };

//  const [errorMessage, setErrorMessage] = useState('');

 // const submitForm = () => {
 //   setErrorMessage('');
 //   onSubmitForm({ name: businessOperationForm.businessType });
 //   resetBusinessOperationForm();
 // };

  return (
    <form className="content-cms" >
      <AgencyInfo formData={intakeForm} change={change} />
      <br />
      <ProspectiveCustomer formData={intakeForm} change={change} />
      <br />
      <BusinessOperation formData={intakeForm} change={change} />
      <br />
      <div className="form-group">
        <button className="input-submit btn btn-primary "
                id="lmgbi_formSubmitBtn" type="button" onClick={submitForm}>Submit</button>
      </div>
      <div className="form-group">
        <span className="required-marker"></span>
        <i>Indicates a required field</i>
      </div>
    </form>
  )
}

