export type ProductType = {
	id: number;
	title: string;
	price: number;
	image: string;
	category?: Categories;
	count: number;
}

export enum Categories {
	MEN_CLOTHES = "men's clothing",
	WOMEN_CLOTHES = "women's clothing",
	ELECTRONICS = "electronics",
	JEWELRY = "jewelery",
}

