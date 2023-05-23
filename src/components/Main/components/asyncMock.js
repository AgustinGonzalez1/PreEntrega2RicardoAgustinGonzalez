import dataBase from "./products.json";

const fetchData = async (setData) => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 3000));
		setData(dataBase);
	} catch (error) {
		console.error("Error al obtener los datos:", error);
	}
};

export default fetchData;
