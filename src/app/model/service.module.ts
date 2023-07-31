import { Panel } from "./panel.module";
import { Reviews } from "./review.module";
import { Seller } from "./seller.module";


export class Service {
    serviceId?: number;
    nameService?: string;
    description?: string;
    imgService?: string;
    priceService?: number;
    type?: string;
    status?: string;
    seller?: Seller;
    panel?: Panel;
    reviews?: Reviews;
}