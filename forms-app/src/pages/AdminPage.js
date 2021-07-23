import { LeadIntakeAdminTable } from "../components/LeadIntakeAdminTable";
import { useLeads } from "../hooks/useLeads";

export const AdminPage = () => {

  const { leads, deleteLeads } = useLeads();
  
 return (
    <div>
      <header>
        <h1>Admin</h1>
      </header>
      <p>Welcome to the admin page</p>

      <LeadIntakeAdminTable intakeData={ leads } onDeleteRow={ deleteLeads }/>
    </div>
 )
};