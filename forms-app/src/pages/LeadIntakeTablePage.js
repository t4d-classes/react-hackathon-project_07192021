import { LeadIntakeTable } from "../components/LeadIntakeTable";
import {useLeads} from "../hooks/useLeads";

export const LeadIntakeTablePage = () => {

  const { leads, removeLead } = useLeads();

  return (
    <div>
      <header>
        <h1>Small Commercial Lead Intake Table</h1>
      </header>
      <p>Here is a list of the lead intakes!</p>
      <LeadIntakeTable leadIntakeData={leads} deleteRow={removeLead}/>
    </div>
  );

};
