import { useSmallBusinessData } from "../hooks/useSmallBusinessData";
import { useBusiness } from "../hooks/useBusiness";
import { LeadIntakeForm } from "../components/LeadIntakeForm";

export const LeadIntakePage = () => {

  const { smallBusinessData } = useSmallBusinessData();
  const { appendBusiness } = useBusiness();

  return (
    <div>
      <header>
        <h1>Lead Intake</h1>
      </header>
      <p>Welcome to the Lead Intake page</p>
      <LeadIntakeForm />
    </div>
  );
};
