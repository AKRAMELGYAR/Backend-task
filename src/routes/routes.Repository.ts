import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Route, RouteDocument } from "./schemas/routes.schema";
import { Model } from "mongoose";
import { DBRepository } from "src/DB/DB.Repository";



@Injectable()
export class RoutesRepository extends DBRepository<RouteDocument> {
    constructor(@InjectModel(Route.name) private routeModel: Model<RouteDocument>) {
        super(routeModel)
    }

    async findAllPaginate(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        return this.routeModel.find().skip(skip).limit(limit);
    }
}