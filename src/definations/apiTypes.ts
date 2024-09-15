// NEWS
export type NewsDataType = {
	author?: string;
	content: string;
	description: string;
	publishedAt: Date;
	source: {
		name: "BBC News";
	};
	title: string;
	url: string;
	urlToImage: string;
};

export type NewsApiType = {
    data: {
        articles: NewsDataType[]
    }
}


// MARKETPLACE
export interface MarketPlacePostApiType {
    updatedAt: Date;
    details: string;
    itemName: string;
    location: string;
    postedBy: string,
    pictureId: string,
    price: number;
    itemType: "animal"| "product" | "tool" | "machinery";
    type: 'sale' | 'rent';
    userId: string;
    __v: number;
    _id: string;
}


export type MarketPlaceType = {
    data: {
        data: MarketPlacePostApiType[],
        message: string
    }
}


// blogs type
export interface BlogType {
    updatedAt: Date;
    title: string;
    body: string;
    createdBy: string,
    userId: string;
    _id: string;
}