import { useSmallBusinessData } from "../hooks/useSmallBusinessData";
import { SmallBusinessGuide } from "../components/SmallBusinessGuide";
import { LeadIntakeForm } from "../components/LeadIntakeForm";

export const LeadIntakePage = () => {

  const { smallBusinessData } = useSmallBusinessData();

  return (
    <div className="row">
      <header>
        <h1>Lead Intake</h1>
      </header>
      <main id="content" className="col-md-8">
        <LeadIntakeForm />
      </main>
      <aside id="sidebar" className="col-md-4">
        <SmallBusinessGuide smallBusinessData={smallBusinessData}/>
      </aside>
    </div>
  );
};
