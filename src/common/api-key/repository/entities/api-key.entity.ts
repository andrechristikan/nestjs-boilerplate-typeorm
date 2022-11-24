import { DatabasePostgresEntityAbstract } from 'src/common/database/abstracts/postgres/entities/database.postgres-entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';

export const ApiKeyDatabaseName = 'apikeys';

@DatabaseEntity({ name: ApiKeyDatabaseName })
export class ApiKeyEntity extends DatabasePostgresEntityAbstract {
    @Column({
        nullable: false,
        type: String,
        length: 100,
    })
    name: string;

    @Column({
        nullable: true,
        type: String,
        length: 255,
    })
    description?: string;

    @Column({
        nullable: false,
        type: String,
        unique: true,
    })
    key: string;

    @Column({
        nullable: false,
        type: String,
    })
    hash: string;

    @Column({
        nullable: false,
        type: String,
    })
    encryptionKey: string;

    @Column({
        nullable: false,
        type: String,
    })
    passphrase: string;

    @Column({
        nullable: false,
        type: Boolean,
    })
    isActive: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    beforeSave() {
        this.name = this.name.toLowerCase().trim();
        this.key = this.key.trim();
        this.hash = this.hash.trim();
        this.encryptionKey = this.encryptionKey.trim();
        this.passphrase = this.passphrase.trim();
    }
}
