import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DriversModule } from './drivers/drivers.module';
import { RoutesModule } from './routes/routes.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './config/.env',
    }),
    MongooseModule.forRoot(process.env.DBURL),
    DriversModule,
    RoutesModule,
    ScheduleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
