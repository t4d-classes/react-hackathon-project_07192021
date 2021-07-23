import PropTypes from "prop-types";

export const SmallBusinessGuide = ({ smallBusinessData }) => {
  return (
    <div className="panel panel-default">
        <h3 className="panel-heading">Small Business Appetite Guide</h3>
        <div className="panel-body">
            <h3 style={{ color: "darkblue", textAlign: 'center', textDecoration: 'underline' }}>Preferred</h3>
            {smallBusinessData.map(smd =>
                <div key={smd.id}>
                    <h3 key={smd.label} style={{ color: "darkblue"}}>{smd.label}:</h3>
                    <ul>
                        {smd.items.map(i =>
                            <li key={i}>{i}</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    </div>
  );
};

SmallBusinessGuide.defaultProps = {
  smallBusinessData: [],
};

SmallBusinessGuide.propTypes = {
  smallBusinessData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
    })
  ),
};
