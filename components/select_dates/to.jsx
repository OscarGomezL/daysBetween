export default function To({to, setTo}) {
	return (
		<div className="select_date to">
			<div className="select_date-title_container">
				<div className="select_date-title_container-text">
					To
				</div>
			</div>
			<div className="select_date-date">
				<div className="select_date-date-text">
					{to}
				</div>
			</div>
			<div className="select_date-input_container">
				<input 
					className="select_date-input_container-input"
					type="date"
					value={to}
					onChange={e=>{setTo(e.target.value)}}
				/>
			</div>
		</div>
	)
}