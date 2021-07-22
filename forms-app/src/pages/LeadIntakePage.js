import { LeadIntakeForm } from "../components/LeadIntakeForm";

import { useLeads } from "../hooks/useLeads";

export const LeadIntakePage = () => {

  const { leads, deleteLead,  addLeadIntakeForm } = useLeads();

  return (
    <div>
      <LeadIntakeForm onSubmitForm={addLeadIntakeForm} />
    </div>
  );

};