export interface ICreatedBy {
    display_name: string;
}

export interface IAvatar {
    original: string;
    compressed: string;
}

export interface IJsonNftData {
    name: string;
    description: string;
}

export interface INesting {
    product_id: number;
    name: string;
    description: string;
    created_by: ICreatedBy;
    avatar: IAvatar;
    created_at: string;
    initial_price: number;
    is_wearable: boolean;
    type: string;
    tx_status: string;
    json_nft_data: IJsonNftData;
    quantity_available: number;
    quantity: number;
}


