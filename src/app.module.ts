import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'S3cret',
      username: 'citizix_user',
      entities: [],
      database: 'citizix_db',
      synchronize: true,
      logging: true,
    }),
    
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
