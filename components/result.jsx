export default function Result({result, measurement, setMeasurement}) {
	return (
		<div className="result"> 
			<div className="result-text">
				<div>
					{isNaN(result)? 'Select a Date':(result+" " + measurement)}
				</div>
			</div>
			<div className="result-controls">
				<select
					className="result-select"
					onChange={(e)=>setMeasurement(e.target.value)}
				>
					<option value="seconds">Seconds</option>
					<option value="minutes">Minutes</option>
					<option value="hours">Hours</option>
					<option value="days">Days</option>
				</select>
				<div>

				</div>
			</div>
		</div>
	)
}