import PropTypes from 'prop-types';

export const LeadIntakeTable1 = ({ leadIntakeData, deleteRow }) => {

  return (
    <table className="table">
      <thead>
      <tr>
        <th>Agency Name</th>
        <th>Agency Email</th>
        <th>Customer Name</th>
        <th>Type of Quote</th>
        {/*<th>Coverage(s)</th>*/}
        <th></th>
      </tr>
      </thead>
      <tbody>
      {leadIntakeData.map(leadIntakeData => <tr key={leadIntakeData.id}>
        <td>{leadIntakeData.fullName}</td>
        <td>{leadIntakeData.agencyEmail}</td>
        <td>{leadIntakeData.firstName} {leadIntakeData.lastName}</td>
        <td>{leadIntakeData.typeOfQuote}</td>
        {/*<td>*/}
        {/*  <ul>*/}
        {/*    {leadIntakeData.coverages.map(coverage => <li key={coverage}>{coverage}</li>)}*/}
        {/*  </ul>*/}
        {/*</td>*/}
        <td><button type="button" onClick={deleteRow} id={leadIntakeData.id}>Delete</button></td>
      </tr>)}
      </tbody>
    </table>
  );
};

LeadIntakeTable1.propTypes = {
  leadIntakeData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    nNumber: PropTypes.string.isRequired,
    agencyEmail: PropTypes.string.isRequired,
    agencyPhoneNumber: PropTypes.string.isRequired,
    insuredName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    customerPhoneNumber: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    customerEmailAddress: PropTypes.string.isRequired,
    descBusinessOperation: PropTypes.string.isRequired,
    typeOfQuote: PropTypes.string.isRequired,
    coverages: PropTypes.arrayOf(PropTypes.string).isRequired,
    blscRepName: PropTypes.string,
    formType: PropTypes.string.isRequired,
  })).isRequired,
};

LeadIntakeTable1.defaultProps = {
  leadIntakeData: [],
};
