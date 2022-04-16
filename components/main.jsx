import { useState, useEffect } from "react"
import From from '../components/select_dates/from'
import To from '../components/select_dates/to'
import Result from "./result"
import {returnDiff, returnTimeMeasurement} from '../logic/functions'

export default function Main() {
	const [measurement, setMeasurement] = useState("seconds")
	const [from,setFrom] = useState('')
	const [to,setTo] = useState('')
	const [result, setResult] = useState('N')
	useEffect(() => {
		setResult(returnDiff(new Date(from), new Date(to), returnTimeMeasurement(measurement)))
	}, [from, to, measurement])
	
	//<Calculate from={from} to={to} setResult={setResult}/>
	return (
		<main>
			<From from={from} setFrom={setFrom} />
			<To to={to} setTo={setTo}/>
			<Result result={result} measurement={measurement} setMeasurement={setMeasurement}/>
		</main>
	)
}