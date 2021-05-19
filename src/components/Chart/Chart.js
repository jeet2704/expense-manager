import React from 'react'
import '../../style/Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxValue = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => <ChartBar label={dataPoint.label} value={dataPoint.value} maxValue={maxValue} key={dataPoint.label}/>)
            }
        </div>
    )
}
export default Chart