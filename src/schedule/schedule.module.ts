import { Module } from '@nestjs/common'
import { ScheduleController } from './schedule.controller'
import { ScheduleService } from './schedule.service'
import { RoutesRepository } from 'src/routes/routes.Repository'
import { RouteModel } from 'src/routes/schemas/routes.schema'

@Module({
    imports: [RouteModel],
    controllers: [ScheduleController],
    providers: [ScheduleService, RoutesRepository],
})
export class ScheduleModule { }
