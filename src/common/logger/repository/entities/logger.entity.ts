import { ApiKeyEntity } from 'src/common/api-key/repository/entities/api-key.entity';
import { ENUM_AUTH_ACCESS_FOR } from 'src/common/auth/constants/auth.enum.constant';
import { DatabasePostgresEntityAbstract } from 'src/common/database/abstracts/database.postgres-entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import {
    ENUM_LOGGER_ACTION,
    ENUM_LOGGER_LEVEL,
} from 'src/common/logger/constants/logger.enum.constant';
import { ENUM_REQUEST_METHOD } from 'src/common/request/constants/request.enum.constant';
import { Column, ManyToOne } from 'typeorm';

export const LoggerDatabaseName = 'loggers';

@DatabaseEntity({ name: LoggerDatabaseName })
export class LoggerEntity extends DatabasePostgresEntityAbstract {
    @Column({
        nullable: false,
        enum: ENUM_LOGGER_LEVEL,
        type: String,
    })
    level: string;

    @Column({
        nullable: false,
        enum: ENUM_LOGGER_ACTION,
        type: String,
    })
    action: string;

    @Column({
        nullable: false,
        enum: ENUM_REQUEST_METHOD,
        type: String,
    })
    method: string;

    @Column({
        nullable: true,
        type: 'uuid',
    })
    requestId?: string;

    @Column({
        nullable: true,
        type: 'uuid',
    })
    user?: string;

    @Column({
        nullable: true,
        type: 'uuid',
    })
    role?: string;

    @ManyToOne(() => ApiKeyEntity, (apiKey) => apiKey._id, {
        cascade: true,
        lazy: true,
        eager: false,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @Column({
        nullable: true,
        type: 'uuid',
    })
    apiKey?: string;

    @Column({
        nullable: false,
        default: true,
        type: Boolean,
    })
    anonymous: boolean;

    @Column({
        nullable: true,
        enum: ENUM_AUTH_ACCESS_FOR,
        type: String,
    })
    accessFor?: ENUM_AUTH_ACCESS_FOR;

    @Column({
        nullable: false,
        type: String,
    })
    description: string;

    @Column({
        nullable: true,
        type: 'json',
    })
    params?: Record<string, any>;

    @Column({
        nullable: true,
        type: 'json',
    })
    bodies?: Record<string, any>;

    @Column({
        nullable: true,
        type: Number,
    })
    statusCode?: number;

    @Column({
        nullable: true,
        type: String,
    })
    path?: string;

    @Column({
        nullable: true,
        default: [],
        type: 'varchar',
        array: true,
    })
    tags: string[];
}
