import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './Dto/routes.Dto';

@Controller('routes')
export class RoutesController {
    constructor(private readonly routesService: RoutesService) { }

    @Post('create')
    async create(@Body() dto: CreateRouteDto) {
        return this.routesService.create(dto)
    }

    @Get()
    async getAll(@Query('page') page, @Query('limit') limit) {
        return this.routesService.findAll(Number(page), Number(limit));
    }

    @Patch(':id/update')
    async compeleteroute(@Param('id') id: string) {
        return this.routesService.compeleteroute(id)
    }
}
