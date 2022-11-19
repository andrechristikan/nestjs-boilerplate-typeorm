import { Injectable } from '@nestjs/common';
import { ApiKeyEntity } from 'src/common/api-key/repository/entities/api-key.entity';
import { DatabasePostgresRepositoryAbstract } from 'src/common/database/abstracts/database.postgres-repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepository } from 'src/common/database/interfaces/database.repository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ApiKeyRepository
    extends DatabasePostgresRepositoryAbstract<ApiKeyEntity>
    implements IDatabaseRepository<ApiKeyEntity>
{
    constructor(
        @DatabaseModel(ApiKeyEntity)
        private readonly apiKeyModel: Repository<ApiKeyEntity>
    ) {
        super(apiKeyModel);
    }
}
