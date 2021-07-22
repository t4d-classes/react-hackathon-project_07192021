import { LeadIntakeForm } from "../components/LeadIntakeForm";

import { useLeads } from "../hooks/useLeads";

export const LeadIntakePage = () => {

  const { leads, deleteLead,  addLead } = useLeads();

  return (
    <div>
      <LeadIntakeForm onSubmitForm={addLead} />
    </div>
  );

};