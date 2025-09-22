import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



@Schema({ timestamps: true })
export class Driver {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    licenseType: string;

    @Prop({ default: true })
    availability: boolean;

}


export const DriverSchema = SchemaFactory.createForClass(Driver);
export type DriverDocument = HydratedDocument<Driver>;
export const DriverModel = MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }]);