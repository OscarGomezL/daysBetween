export default function Result({result}) {
	return (
		<div className="result">
			<div className="result-text">{isNaN(result)? 'Select a Date':(result+" days")}</div>
		</div>
	)
}