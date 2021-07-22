import { useSmallBusinessData } from "../hooks/useSmallBusinessData";
import { useBusiness } from "../hooks/useBusiness";
import { BusinessOperationForm } from "../components/BusinessOperationForm";

export const LeadIntakePage = () => {
  
  const { smallBusinessData } = useSmallBusinessData();
  const { appendBusiness } = useBusiness();

  return(
    <div>
      <header>
        <h1>Lead Intake</h1>
      </header>
      <p>Welcome to the Lead Intake page</p>
      <div>
        <h1>Business Operation</h1>
        <BusinessOperationForm onSubmitForm={appendBusiness}/>
      </div>
    </div>
  )
};