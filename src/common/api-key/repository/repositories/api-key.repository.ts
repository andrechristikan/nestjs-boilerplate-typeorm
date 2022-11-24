import { Injectable } from '@nestjs/common';
import { ApiKeyEntity } from 'src/common/api-key/repository/entities/api-key.entity';
import { DatabasePostgresRepositoryAbstract } from 'src/common/database/abstracts/postgres/repositories/database.postgres-repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { Repository } from 'typeorm';

@Injectable()
export class ApiKeyRepository extends DatabasePostgresRepositoryAbstract<ApiKeyEntity> {
    constructor(
        @DatabaseModel(ApiKeyEntity)
        private readonly apiKeyModel: Repository<ApiKeyEntity>
    ) {
        super(apiKeyModel);
    }
}
