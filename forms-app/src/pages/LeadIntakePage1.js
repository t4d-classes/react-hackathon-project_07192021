import { LeadIntakeForm1 } from "../components/LeadIntakeForm1";

import { useLeads1 } from "../hooks/useLeads1";

export const LeadIntakePage1 = () => {

  const { leads, deleteLead,  addLead } = useLeads1();

  return (
    <div>
      <LeadIntakeForm1 onSubmitForm={addLead} />
    </div>
  );

};
