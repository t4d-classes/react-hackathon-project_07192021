import { AgencyInfo } from './AgencyInfo'

import { useForm } from '../hooks/useForm'

export const LeadIntakeFormCon = () => {

  const [leadIntakeForm, change, resetleadIntakeForm] = useForm({
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
    coverage: '', // figuring out how the container can keep the state data.
  })

  return (
    <form className="container-fluid">
      <AgencyInfo formData={leadIntakeForm} change={change} />
    </form>
  )
}
