export function returnDiff (from,to) {
	return Math.ceil(Math.abs(from.getTime() - to.getTime()) / 86400000)
}