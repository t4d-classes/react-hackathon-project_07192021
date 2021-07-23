import { LeadIntakeForm1 } from "../components/LeadIntakeForm1";

import { useLeads } from "../hooks/useLeads";

export const LeadIntakePage1 = () => {

  const { leads, deleteLead,  addLead } = useLeads();

  return (
    <div>
      <LeadIntakeForm1 onSubmitForm={addLead} />
    </div>
  );

};
