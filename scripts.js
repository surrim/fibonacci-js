const M = [
	[1n, 1n],
	[1n, 0n]
];

function multiply(f, m) {
	return [
		[f[0][0] * m[0][0] + f[0][1] * m[1][0], f[0][0] * m[0][1] + f[0][1] * m[1][1]],
		[f[1][0] * m[0][0] + f[1][1] * m[1][0], f[1][0] * m[0][1] + f[1][1] * m[1][1]]
	];
}

function power(f, n) {
	if (n < 2) {
		return f;
	}
	let result = power(f, Math.floor(n / 2));
	result = multiply(result, result);
	if (n % 2 != 0) {
		result = multiply(result, M);
	}
	return result;
}

function fibonacci(n) {
	return (n != 0) ? power(M, n - 1)[0][0] : 0n;
}

function do_calculate() {
	const n = document.getElementById("n").valueAsNumber;
	const fibonacciNumber = fibonacci(n);
	document.getElementById("fibonacciNumber").innerText = fibonacciNumber;
}

document.addEventListener('DOMContentLoaded', do_calculate);
