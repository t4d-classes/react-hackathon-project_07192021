import PropTypes from 'prop-types';

export const LeadIntakeAdminTable = ({ intakeData, onDeleteRow }) => {

    const deleteRow = (id) => {
        onDeleteRow({ id: id });
    };

    return (
    <>
    <header>Lead Intake Admin Data</header>
    <table className="table">
      <thead>
        <tr>
          <th>Agency Code</th>
          <th>Producer Name</th>
          <th>Producer Email</th>
          <th>Phone Number</th>
          <th>Named Insured</th>
        </tr>
      </thead>
      <tbody>
        {intakeData.map(i => <tr key={i.id}>
          <td>{i.agencyCode}</td>
          <td>{i.producerName}</td>
          <td>{i.producerEmail}</td>
          <td>{i.phoneNumber}</td>
          <td>{i.namedInsured}</td>
          <td><button type="button" onClick={() => deleteRow(i.id)}>Delete</button></td>
        </tr>)}
      </tbody>
    </table>
    </>
    )
}

LeadIntakeAdminTable.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      agencyCode: PropTypes.string.isRequired,
      producerName: PropTypes.string.isRequired,
      producerEmail: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      namedInsured: PropTypes.string.isRequired,
    })).isRequired,
};
  
LeadIntakeAdminTable.defaultProps = {
    intakeData: [],
    onDeleteRow: [],
};