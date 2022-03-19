import { useState } from "react"
import From from '../components/select_dates/from'
import To from '../components/select_dates/to'
import Calculate from "./calculate"

export default function Main() {
	const [from,setFrom] = useState()
	const [to,setTo] = useState()
	return (
		<main>
			<From/>
			<Calculate/>
			<To/>
		</main>
	)
}