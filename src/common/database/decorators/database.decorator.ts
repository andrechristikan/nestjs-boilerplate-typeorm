import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { Entity, EntityOptions } from 'typeorm';

export function DatabaseConnection(
    connectionName?: string
): ParameterDecorator {
    return InjectDataSource(connectionName || DATABASE_CONNECTION_NAME);
}

export function DatabaseModel(
    entity: any,
    connectionName?: string
): ParameterDecorator {
    return InjectRepository(entity, connectionName || DATABASE_CONNECTION_NAME);
}

export function DatabaseEntity(options?: EntityOptions): ClassDecorator {
    return Entity(options);
}
