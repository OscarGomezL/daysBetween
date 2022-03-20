export default function From({from, setFrom}) {
	return (
		<div className="select_date from">
			<div className="select_date-title_container">
				<div className="select_date-title_container-text">
					From
				</div>
			</div>
			<div className="select_date-date">
				<div className="select_date-date-text">
					{from}
				</div>
			</div>
			<div className="select_date-input_container">
				<input 
					className="select_date-input_container-input"
					type="date"
					value={from}
					onChange={e=>{setFrom(e.target.value)}}
				/>
			</div>
		</div>
	)
}