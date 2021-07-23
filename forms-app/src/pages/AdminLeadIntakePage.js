import { LeadIntakeAdminTable } from "../components/LeadIntakeAdminTable";
import { useLeads } from "../hooks/useLeads";

export const AdminLeadIntakePage = () => {

    const { leads, deleteLeads } = useLeads();

  return (
    <div>
      <header>
        <h1>Lead Intake Admin</h1>
      </header>
      <LeadIntakeAdminTable intakeData={ leads } onDeleteRow={ deleteLeads }/>
    </div>
  );

};