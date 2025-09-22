import { DBRepository } from "src/DB/DB.Repository";
import { Driver } from "./schemas/drivers.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";



export class DriverRepository extends DBRepository<Driver> {
    constructor(@InjectModel(Driver.name) private readonly driverModel: Model<Driver>) {
        super(driverModel);
    }
}