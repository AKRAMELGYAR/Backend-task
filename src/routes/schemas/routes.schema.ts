import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema({ timestamps: true })
export class Route {
    @Prop({ required: true })
    startLocation: string

    @Prop({ required: true })
    endLocation: string

    @Prop({ required: true })
    distance: number

    @Prop({ required: true })
    estimatedTime: string

    @Prop({ type: String, default: null })
    assignedDriver: string | null

    @Prop({ enum: ['assigned', 'unassigned', 'completed'], default: 'unassigned' })
    status: string
}


export const RouteSchema = SchemaFactory.createForClass(Route)
export type RouteDocument = HydratedDocument<Route>
export const RouteModel = MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }])

