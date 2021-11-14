import { Column, Entity, ManyToOne } from 'typeorm';

import { GlobalEntity } from 'src/global-entities/global-entities/global-entity';
import { Role } from '../roles/role.entity';

@Entity()
export class User extends GlobalEntity {
  @Column({ length: 255, comment: 'email' })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  firstname: string;

  @Column({ length: 255 })
  lastname: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}
