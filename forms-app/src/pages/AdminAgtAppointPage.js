import { AdminAgtAppointTable } from "../components/AdminAgtAppointTable";

import { useAgtAppoint } from '../hooks/useAgtAppoint';

export const AdminAgtAppointPage = () => {

 // const { agtAppoints, deleteAgtAppoint } = useAgtAppoint();

  return (
    <div>
      <header>
        <h1>Agent Appointments Admin</h1>
      </header>
      <AdminAgtAppointTable />
    </div>
  );

};