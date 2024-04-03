import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity as TypeOrmBaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export abstract class BaseEntity extends TypeOrmBaseEntity {
  @ApiProperty({
    example: '095641af-e961-4f5d-9842-b1c421454413',
    description: 'Primary key',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '2023-04-06T09:55:46.178Z',
    description: 'Date of creation',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: '2023-04-06T09:55:46.178Z',
    description: 'Date of updation',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
