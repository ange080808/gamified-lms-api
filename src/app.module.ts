import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ModulesModule } from './modules/modules.module';
import { LessonsModule } from './lessons/lessons.module';
import { VideosModule } from './videos/videos.module';
import { ActivitiesModule } from './activities/activities.module';
import { AnnouncementsModule } from './announcements/announcements.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    ModulesModule,
    LessonsModule,
    VideosModule,
    ActivitiesModule,
    AnnouncementsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
