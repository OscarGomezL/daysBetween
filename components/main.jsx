import { useState } from "react"
import From from '../components/select_dates/from'
import To from '../components/select_dates/to'
import Calculate from "./calculate"
import Result from "./result"

export default function Main() {
	const [from,setFrom] = useState()
	const [to,setTo] = useState()
	const [result, setResult] = useState('N')
	return (
		<main>
			<From from={from} setFrom={setFrom} />
			<Calculate from={from} to={to} setResult={setResult}/>
			<To to={to} setTo={setTo}/>
			<Result result={result}/>
		</main>
	)
}