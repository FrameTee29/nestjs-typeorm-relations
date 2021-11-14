import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

import { GlobalEntity } from 'src/global-entities/global-entities/global-entity';
import { User } from '../users/user.entity';
import { Permission } from '../permissions/permission.entity';

@Entity()
export class Role extends GlobalEntity {
  @Column({ length: 255 })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @ManyToMany(() => Permission, { eager: true })
  @JoinTable()
  permissions: Permission[];
}
