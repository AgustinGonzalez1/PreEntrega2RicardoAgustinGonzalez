import dataBase from "./products.json";

export const asyncMock = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(id ? dataBase.filter((item) => item.section === id) : dataBase);
		}, 2000);
	});
};

export const asyncMockItem = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(dataBase.find((item) => item.idx === parseInt(id)));
		}, 2000);
	});
};
