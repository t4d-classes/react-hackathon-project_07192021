import { LeadIntakeTable1 } from "../components/LeadIntakeTable1";
import {useLeads1} from "../hooks/useLeads1";

export const LeadIntakeTablePage1 = () => {

  const { leads, removeLead } = useLeads1();

  return (
    <div>
      <header>
        <h1>Small Commercial Lead Intake Table</h1>
      </header>
      <p>Here is a list of the lead intakes!</p>
      <LeadIntakeTable1 leadIntakeData={leads} deleteRow={removeLead}/>
    </div>
  );

};
