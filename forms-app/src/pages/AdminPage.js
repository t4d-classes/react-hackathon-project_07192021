import {Link} from "react-router-dom";

export const AdminPage = () => (
    <div>
      <header>
        <h1>Admin</h1>
      </header>
      <p>Welcome to the admin page</p>
      <Link to="/leadIntakeTable">Lead Intake</Link>
    </div>
  );
