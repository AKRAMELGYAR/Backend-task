import { Module } from "@nestjs/common";
import { RouteModel } from "./schemas/routes.schema";
import { RoutesController } from "./routes.controller";
import { RoutesService } from "./routes.service";
import { RoutesRepository } from "./routes.Repository";
import { DriversService } from "src/drivers/drivers.service";
import { DriverRepository } from "src/drivers/drivers.repository";
import { DriverModel } from "src/drivers/schemas/drivers.schema";


@Module({
    imports: [RouteModel, DriverModel],
    controllers: [RoutesController],
    providers: [RoutesService, RoutesRepository, DriversService, DriverRepository],

})

export class RoutesModule { }