import { useSmallBusinessData } from "../hooks/useSmallBusinessData";

export const LeadIntakePage = () => {
  
  const { smallBusinessData } = useSmallBusinessData();

  return (
    <div>
      <header>
        <h1>Lead Intake</h1>
      </header>
      <p>Welcome to the Lead Intake page</p>
    </div>
  );
};