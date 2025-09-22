import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRouteDto {
    @IsString()
    @IsNotEmpty()
    startLocation: string;

    @IsString()
    @IsNotEmpty()
    endLocation: string;

    @IsNumber()
    distance: number;

    @IsString()
    estimatedTime: string;
}
