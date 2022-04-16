export function returnDiff (from,to, measurement) {
	return Math.ceil(Math.abs(from.getTime() - to.getTime()) / measurement)
}
export function returnTimeMeasurement (key) {
	switch (key) {
		case "seconds":
			return 1000;
		case "minutes" :
			return 60000;
		case "hours" :
			return 3600000;
		case "days" :
			return 86400000;
	}
}