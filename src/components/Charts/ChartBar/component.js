import './styles.css';

function ChartBar(props) {
  const { datum, maximum } = props;
  const { label, value } = datum;
  let fillHeight = 0;

  if(maximum > 0) {
    fillHeight = Math.round((value / maximum) * 100);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: `${fillHeight}%` }}></div>
      </div>
      <label className="chart-bar__label">{label}</label>
    </div>
  );
}

export default ChartBar;