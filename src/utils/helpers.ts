export const sleep = (milliseconds: number) => {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
};

export const setCookie = (cName: string, cValue: string, expDays: number) => {
	let date = new Date();
	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
	const expires = "expires=" + date.toUTCString();
	document.cookie = `cName=${cValue};${expires};`;
};
