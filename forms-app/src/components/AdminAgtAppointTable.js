import PropTypes from 'prop-types';

import { useAgtAppoint } from '../hooks/useAgtAppoint';

export const AdminAgtAppointTable = () => {

  const { agtAppoints, deleteAgtAppoint, appendAgtAppoint } = useAgtAppoint();

  const deleteItem = (id) => {
    deleteAgtAppoint(id);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Agent Name</th>
          <th>City</th>
          <th>State</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {agtAppoints.map(agtAppoint => <tr key={agtAppoint.id}>
          <td>{agtAppoint.agencyName}</td>
          <td>{agtAppoint.city}</td>
          <td>{agtAppoint.state}</td>
          <td><button type="button" onClick={() => {deleteItem(agtAppoint.id)}}>DELETE</button></td>
        </tr>)}
      </tbody>
    </table>
  );
};

AdminAgtAppointTable.propTypes = {
  agtAppoints: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    agencyName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  })).isRequired,
};

AdminAgtAppointTable.defaultProps = {
  agtAppoints: [],
};