import { Injectable } from '@nestjs/common';
import { DatabasePostgresRepositoryAbstract } from 'src/common/database/abstracts/postgres/repositories/database.postgres-repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { SettingEntity } from 'src/common/setting/repository/entities/setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingRepository extends DatabasePostgresRepositoryAbstract<SettingEntity> {
    constructor(
        @DatabaseModel(SettingEntity)
        private readonly settingModel: Repository<SettingEntity>
    ) {
        super(settingModel);
    }
}
