import { IsBoolean, IsNotEmpty, IsString } from "class-validator";



export class CreateDriverDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    licenseType: string

    @IsBoolean()
    availability: boolean
}