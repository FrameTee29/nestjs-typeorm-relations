import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';

import { GlobalEntity } from 'src/global-entities/global-entities/global-entity';
import { Role } from '../roles/role.entity';
import { User } from '../users/user.entity';

@Entity()
export class Profile extends GlobalEntity {
  @Column({ length: 255 })
  firstname: string;

  @Column({ length: 255 })
  lastname: string;

  @Column({ length: 255 })
  address: string;

  @OneToOne(() => User)
  user: User;
}
