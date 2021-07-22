import { useSmallBusinessData } from "../hooks/useSmallBusinessData";
import { useBusiness } from "../hooks/useBusiness";
import { SmallBusinessGuide } from "../components/SmallBusinessGuide";
import { LeadIntakeForm } from "../components/LeadIntakeForm";

export const LeadIntakePage = () => {

  const { smallBusinessData } = useSmallBusinessData();
  const { appendBusiness } = useBusiness();

  return (
    <div className="container-fluid">
      <main id="content" className="col-md-8 column-primary">
        <LeadIntakeForm />
      </main>
      <aside id="sidebar" className="col-md-4 column-secondary">
        <SmallBusinessGuide smallBusinessData={smallBusinessData}/>
      </aside>
    </div>
  );
};
