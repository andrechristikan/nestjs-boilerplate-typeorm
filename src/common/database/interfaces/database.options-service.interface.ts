
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IDatabaseOptionsService {
    createOptions(): TypeOrmModuleOptions;
}
