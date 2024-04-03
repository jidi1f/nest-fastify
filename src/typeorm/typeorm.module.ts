import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { Organization } from './entities/organization.entity';
import { Token } from './entities/token.entity';
import { ContactUser } from './entities/contact-user.entity';
import { DeviceOrganization } from './entities/device-organization';
import { Device } from './entities/device.entity';
import { Customer } from './entities/customer.entity';
import { Log } from './entities/logs.entity';
import { DeviceFeaturePrice } from './entities/device-feature-price';
import { Order } from './entities/order.entity';
import { DeviceOrder } from './entities/device-order';
import DatabaseFile from './entities/database-file.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASENAME,
        ssl: process.env.DATABASE_SSL === 'true',
        entities: [
          Token,
          User,
          Organization,
          Device,
          DeviceOrganization,
          ContactUser,
          Customer,
          Log,
          Order,
          DeviceFeaturePrice,
          DeviceOrder,
          DatabaseFile,
        ],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class TypeOrmConfModule {}
