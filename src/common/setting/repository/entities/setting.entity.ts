import { DatabasePostgresEntityAbstract } from 'src/common/database/abstracts/database.postgres-entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { ENUM_SETTING_DATA_TYPE } from 'src/common/setting/constants/setting.enum.constant';
import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';

export const SettingDatabaseName = 'settings';

@DatabaseEntity({ name: SettingDatabaseName })
export class SettingEntity extends DatabasePostgresEntityAbstract {
    @Column({
        nullable: false,
        unique: true,
        type: String,
    })
    name: string;

    @Column({
        nullable: true,
        type: String,
    })
    description?: string;

    @Column({
        nullable: true,
        type: String,
        enum: ENUM_SETTING_DATA_TYPE,
    })
    type: ENUM_SETTING_DATA_TYPE;

    @Column({
        nullable: false,
        type: String,
    })
    value: string;

    @BeforeInsert()
    @BeforeUpdate()
    beforeSave() {
        this.name = this.name.trim();
        this.value = this.value.trim();
    }
}
