import { ConflictException, Injectable } from "@nestjs/common";
import { DriverRepository } from "./drivers.repository";
import { RoutesRepository } from "src/routes/routes.Repository";



@Injectable()
export class DriversService {
    constructor(
        private readonly driversRepository: DriverRepository,
        private readonly routesRepository: RoutesRepository
    ) { }

    async create(dto: any) {
        return this.driversRepository.create(dto);
    }

    async findHistory(driverId: string) {
        const driver = await this.driversRepository.findOne({ _id: driverId })
        if (!driver) throw new ConflictException('Driver not found')

        const history = await this.routesRepository.findOne({ assignedDriver: driverId, status: 'completed' });
        return history
    }

    async updateAvailability(driverId: string, available: boolean) {
        return this.driversRepository.update(driverId, { availability: available });
    }




}