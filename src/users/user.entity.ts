import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { IUser } from './user.interface';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date().toJSON();

  @Property({ onUpdate: () => new Date().toJSON() })
  updatedAt = new Date().toJSON();

  @Property()
  name: string;

  @Property()
  email: string;

  constructor(user: IUser) {
    this.name = user.name;
    this.email = user.email;
  }
}
