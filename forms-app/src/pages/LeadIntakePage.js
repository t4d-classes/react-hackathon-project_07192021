import { useSmallBusinessData } from "../hooks/useSmallBusinessData";
import { SmallBusinessGuide } from "../components/SmallBusinessGuide";

export const LeadIntakePage = () => {
  
  const { smallBusinessData } = useSmallBusinessData();

  return(
    <div className="row">
      <header>
        <h1>Lead Intake</h1>
      </header>
      <p>Welcome to the Lead Intake page</p>
      <main id="content" className="col-md-8"></main>
      <aside id="sidebar" className="col-md-4">
        <SmallBusinessGuide smallBusinessData={smallBusinessData}/>
      </aside>
    </div>
  )
};