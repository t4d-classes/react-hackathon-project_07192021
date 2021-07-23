import { useSmallBusinessData } from "../hooks/useSmallBusinessData";
import { SmallBusinessGuide } from "../components/SmallBusinessGuide";
import { LeadIntakeForm } from "../components/LeadIntakeForm";

import { useLeads } from "../hooks/useLeads";

export const LeadIntakePage = () => {

  const { smallBusinessData } = useSmallBusinessData();

  const { appendLeads } = useLeads();

  return (
    <div className="container-fluid">
      <main id="content" className="col-md-8 column-primary">
        <LeadIntakeForm onSubmitForm={appendLeads} />
      </main>
      <aside id="sidebar" className="col-md-4 column-secondary">
        <SmallBusinessGuide smallBusinessData={smallBusinessData}/>
      </aside>
    </div>
  );
};
