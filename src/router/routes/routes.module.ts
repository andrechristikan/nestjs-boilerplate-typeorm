import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from 'src/common/auth/auth.module';
import { AwsModule } from 'src/common/aws/aws.module';
import { SettingController } from 'src/common/setting/controllers/setting.controller';
import { HealthController } from 'src/health/controllers/health.controller';
import { HealthModule } from 'src/health/health.module';

@Module({
    controllers: [HealthController, SettingController],
    providers: [],
    exports: [],
    imports: [AwsModule, HealthModule, TerminusModule, HttpModule, AuthModule],
})
export class RoutesModule {}
