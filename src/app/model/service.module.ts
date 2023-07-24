import { Panel } from "./Panel.module";
import { Reviews } from "./review.module";
import { Seller } from "./seller.module";

export interface Service {
    serviceId: number;
    nameService: string;
    description: string;
    imgService: any;
    priceService: number;
    type: string;
    status: string;
    seller: Seller;
    panel: Panel;
    reviews: Reviews;
}