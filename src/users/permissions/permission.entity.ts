import { GlobalEntity } from 'src/global-entities/global-entities/global-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Permission extends GlobalEntity {
  @Column({ length: 255 })
  name: string;
}
