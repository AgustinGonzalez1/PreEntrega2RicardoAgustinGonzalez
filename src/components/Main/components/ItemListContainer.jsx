import dataBase from "./productos.json";

const ItemListContainer = () => {
	return (
		<div>
			{dataBase.map((item) => {
				return (
					<div key={item.id} className="">
						<div>
							<img src={item.image} alt={item.title} />
						</div>
						<div>
							<h3>{item.title}</h3>
							<p>{item.section}</p>
							<p>{item.price}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemListContainer;
