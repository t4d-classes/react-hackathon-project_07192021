import { useSmallBusinessData } from "../hooks/useSmallBusinessData";
import { LeadIntakeForm } from "../components/LeadIntakeForm";

export const LeadIntakePage = () => {

  const { smallBusinessData } = useSmallBusinessData();

  return (
    <div>
      <header>
        <h1>Lead Intake</h1>
      </header>
      <LeadIntakeForm />
    </div>
  );
};
