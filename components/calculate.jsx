import { returnDiff } from "../logic/functions"

export default function Calculate({to, from, setResult}) {
	return (
		<div 
			className="calculate"
			onClick={()=>setResult(returnDiff(new Date(from), new Date(to)))}
		>
			<div className="calculate-text">Calculate</div>
		</div>
	)
}