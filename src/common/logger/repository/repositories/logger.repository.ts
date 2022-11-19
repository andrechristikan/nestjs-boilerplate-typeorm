import { Injectable } from '@nestjs/common';
import { DatabasePostgresRepositoryAbstract } from 'src/common/database/abstracts/database.postgres-repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepository } from 'src/common/database/interfaces/database.repository.interface';
import { LoggerEntity } from 'src/common/logger/repository/entities/logger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoggerRepository
    extends DatabasePostgresRepositoryAbstract<LoggerEntity>
    implements IDatabaseRepository<LoggerEntity>
{
    constructor(
        @DatabaseModel(LoggerEntity)
        private readonly loggerModel: Repository<LoggerEntity>
    ) {
        super(loggerModel, {
            apiKey: true,
        });
    }
}
