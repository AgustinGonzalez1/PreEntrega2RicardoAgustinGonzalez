import dataBase from "./products.json";

const tiempo = 1000 * Math.round(Math.random() * (4 - 2) + 2);

export const asyncMock = (setItem) => {
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(dataBase);
		}, tiempo);
	}).then((data) => {
		setItem(data);
	});
};

export const asyncMockId = (setItem) => {
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(dataBase);
		}, tiempo);
	}).then((data) => {
		setItem(data.find((item) => item.id === 1));
	});
};
