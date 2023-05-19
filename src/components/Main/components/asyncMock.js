import arrProducts from "./productos.json";

const fetchData = async (setProducts) => {
	const promesa = new Promise((resolve) => {
		setTimeout(() => {
			resolve(arrProducts);
		}, 3000);
	});

	const response = await promesa;
	setProducts(response);
};

export default fetchData;
