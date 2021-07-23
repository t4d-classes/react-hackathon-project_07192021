<<<<<<< HEAD
import { Link } from 'react-router-dom';

export const AdminPage = () => (
  <div>
    <header>
      <h1>Admin</h1>
    </header>
    <p>Welcome to the admin page</p>
    <li>
      <Link to="/adminAgtAppoint">Agency Appointment Form Data</Link>
    </li>
  </div>
);
=======
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
>>>>>>> c43597cb950964a1c5cb961b56454085cae92e18
