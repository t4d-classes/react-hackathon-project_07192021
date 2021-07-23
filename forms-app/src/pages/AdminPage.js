import { LeadIntakeAdminTable } from "../components/LeadIntakeAdminTable";

export const AdminPage = () => {

  //const { iData, appendIntakeData } = useLeadIntake();
  // onDeleteRow={}
  // <LeadIntakeAdminTable intakeData={ iData } onDeleteRow={ appendIntakeData }/>

  /* Example of delete
   return fetch('http://localhost:3060/leadintake/' + intakeData.id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(intakeData),
    })
      .then(() => fetch('http://localhost:3060/leadintake'))
      .then(res => res.json())
      .then(intakeData => setCoverages(intakeData));
  */
 return (
    <div>
      <header>
        <h1>Admin</h1>
      </header>
      <p>Welcome to the admin page</p>

      <LeadIntakeAdminTable />
    </div>
 )
};