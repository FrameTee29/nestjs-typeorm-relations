import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { GlobalEntity } from 'src/global-entities/global-entities/global-entity';
import { Role } from '../roles/role.entity';
import { Profile } from '../profiles/profile.entity';

@Entity()
export class User extends GlobalEntity {
  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  password: string;

  @OneToOne(() => Profile, { cascade: true })
  @JoinColumn()
  profile: Profile;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}
