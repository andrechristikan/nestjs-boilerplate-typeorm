import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { LoggerEntity } from 'src/common/logger/repository/entities/logger.entity';
import { LoggerRepository } from 'src/common/logger/repository/repositories/logger.repository';

@Module({
    providers: [LoggerRepository],
    exports: [LoggerRepository],
    controllers: [],
    imports: [
        TypeOrmModule.forFeature([LoggerEntity], DATABASE_CONNECTION_NAME),
    ],
})
export class LoggerRepositoryModule {}
