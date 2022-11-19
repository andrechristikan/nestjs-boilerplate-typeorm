import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { SettingEntity } from 'src/common/setting/repository/entities/setting.entity';
import { SettingRepository } from 'src/common/setting/repository/repositories/setting.repository';

@Module({
    providers: [SettingRepository],
    exports: [SettingRepository],
    controllers: [],
    imports: [
        TypeOrmModule.forFeature([SettingEntity], DATABASE_CONNECTION_NAME),
    ],
})
export class SettingRepositoryModule {}
