import { ConflictException, Injectable } from '@nestjs/common';
import { CreateRouteDto } from './Dto/routes.Dto';
import { DriversService } from '../drivers/drivers.service';
import { RoutesRepository } from './routes.Repository';
import { DriverRepository } from 'src/drivers/drivers.repository';

@Injectable()
export class RoutesService {
    constructor(
        private readonly routesRepository: RoutesRepository,
        private driverRepository: DriverRepository,
        private driversService: DriversService
    ) { }

    async create(dto: CreateRouteDto) {
        //finding available deiver
        const driver = await this.driverRepository.findOne({ availability: true })

        if (driver) {
            await this.driversService.updateAvailability(driver['_id'], false)
        }

        const newRoute = this.routesRepository.create({
            ...dto,
            assignedDriver: driver ? driver['_id'] : null,
            status: driver ? 'assigned' : 'unassigned',
        });

        return newRoute;

    }

    async findAll(page: number, limit: number) {
        return this.routesRepository.findAllPaginate(page, limit)

    }


    async compeleteroute(id: string) {
        const route = await this.routesRepository.findOne({ _id: id })
        if (!route) throw new ConflictException('Route not found')

        if (route.status == 'assigned') {
            this.driverRepository.update(route.assignedDriver, { availability: true })
            return this.routesRepository.update(id, { status: 'completed' })

        }
    }
}
