import { Link } from 'react-router-dom';
import { LeadIntakeAdminTable } from "../components/LeadIntakeAdminTable";

export const AdminPage = () => {
  
 return (
    <div>
      <header>
        <h1>Admin</h1>
      </header>
      <p>Welcome to the admin page</p>
      <li>
        <Link to="/adminAgtAppoint">Agency Appointment Form Data</Link>
      </li>
      <li>
        <Link to="/leadIntakeTable">Lead Intake</Link>
      </li>
      <li>
        <Link to="/adminLeadIntake">Lead Intake Form Data</Link>
      </li>
    </div>
    )
};
