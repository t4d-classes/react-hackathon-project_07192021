import PropTypes from 'prop-types';

export const LeadIntakeAdminTable = ({ intakeData, onDeleteRow }) => {

    const deleteRow = () => {
    
        onDeleteRow({ id: intakeData.id });
    };

    return (
    <table className="table">
      <thead>
        <tr>
          <th>Customer Intake Data</th>
          <th>Customer Intake Data</th>
          <th>Customer Intake Data</th>
          <th>Customer Intake Data</th>
          <th>Customer Intake Data</th>
        </tr>
      </thead>
      <tbody>
        {intakeData.map(i => <tr key={i.id}>
          <td>{i.items1}</td>
          <td>{i.items2}</td>
          <td>{i.items3}</td>
          <td>{i.items4}</td>
          <td>{i.items5}</td>
          <td><button type="button" onClick={deleteRow}>Delete</button></td>
        </tr>)}
      </tbody>
    </table>
    )
}

LeadIntakeAdminTable.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      items1: PropTypes.string.isRequired,
      items2: PropTypes.string.isRequired,
      items3: PropTypes.string.isRequired,
      items4: PropTypes.string.isRequired,
      items5: PropTypes.string.isRequired,
    })).isRequired,
};
  
LeadIntakeAdminTable.defaultProps = {
    intakeData: [],
};