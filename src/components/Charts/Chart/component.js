import './styles.css';

import ChartBar from './../ChartBar/component';

function Chart(props) {
  return(
    <div className="chart">
      {
        props.data.map((datum) => {
          return (
            <ChartBar
              datum={datum}
              key={datum.label}
              maximum={props.maximum}
            />
          );
        })
      }
    </div>
  );
}

export default Chart;