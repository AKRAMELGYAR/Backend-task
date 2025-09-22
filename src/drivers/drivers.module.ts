import { Module } from "@nestjs/common";
import { DriverModel } from "./schemas/drivers.schema";
import { DriverRepository } from "./drivers.repository";
import { DriversController } from "./drivers.controller";
import { DriversService } from "./drivers.service";
import { RoutesRepository } from "src/routes/routes.Repository";
import { RouteModel } from "src/routes/schemas/routes.schema";


@Module({
    imports: [DriverModel, RouteModel],
    controllers: [DriversController],
    providers: [DriverRepository, DriversService, RoutesRepository],
})
export class DriversModule { }