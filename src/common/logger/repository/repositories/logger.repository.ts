import { Injectable } from '@nestjs/common';
import { DatabasePostgresRepositoryAbstract } from 'src/common/database/abstracts/postgres/repositories/database.postgres-repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { LoggerEntity } from 'src/common/logger/repository/entities/logger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoggerRepository extends DatabasePostgresRepositoryAbstract<LoggerEntity> {
    constructor(
        @DatabaseModel(LoggerEntity)
        private readonly loggerModel: Repository<LoggerEntity>
    ) {
        super(loggerModel, {
            apiKey: true,
        });
    }
}
