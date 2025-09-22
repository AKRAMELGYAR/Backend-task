import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './Dto/drivers.Dto';

@Controller('drivers')
export class DriversController {
    constructor(private readonly driversService: DriversService) { }

    @Post('create')
    async create(@Body() dto: CreateDriverDto) {
        return this.driversService.create(dto);
    }

    @Get(':id/history')
    async getHistory(@Param('id') id: string) {
        return this.driversService.findHistory(id);
    }
}
