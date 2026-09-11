export function calculateSum(numere){
	return numere.reduce((acc , numar)=> acc + numar, 0)
}

export function calculateAverage(numere){
	return calculateSum(numere) / numere.length;


}

