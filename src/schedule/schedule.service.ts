import { Injectable } from '@nestjs/common';
import { RoutesRepository } from 'src/routes/routes.Repository';

@Injectable()
export class ScheduleService {
    constructor(private readonly routerepository: RoutesRepository) { }

    async getSchedule() {
        const routes = await this.routerepository.findAll()
        return routes.map(route => ({
            routeId: route._id,
            startLocation: route.startLocation,
            endLocation: route.endLocation,
            driver: route.assignedDriver || 'unassigned',
        }));
    }
}
