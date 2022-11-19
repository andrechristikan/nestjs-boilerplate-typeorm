import { Injectable } from '@nestjs/common';
import { DatabasePostgresRepositoryAbstract } from 'src/common/database/abstracts/database.postgres-repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepository } from 'src/common/database/interfaces/database.repository.interface';
import { SettingEntity } from 'src/common/setting/repository/entities/setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingRepository
    extends DatabasePostgresRepositoryAbstract<SettingEntity>
    implements IDatabaseRepository<SettingEntity>
{
    constructor(
        @DatabaseModel(SettingEntity)
        private readonly settingModel: Repository<SettingEntity>
    ) {
        super(settingModel);
    }
}
