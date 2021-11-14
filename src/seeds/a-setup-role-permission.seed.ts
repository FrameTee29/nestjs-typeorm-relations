import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Permission } from '../users/permissions/permission.entity';
import { Role } from '../users/roles/role.entity';

export default class SetupRolesAndPermissions implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    /* Create all permission */
    await connection
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values([
        { name: 'INVESTOR_VIEW' },
        { name: 'INVESTOR_KYC_LEVEL_EDIT' },
        { name: 'INVESTOR_INVESTOR_STATUS_EDIT' },
        { name: 'INVESTOR_INVESTOR_LEVEL_EDIT' },
        { name: 'INVESTOR_ACCOUNT_NUMBER_EDIT' },
        { name: 'INVESTOR_CREATE' },
        { name: 'TRANSACTION_VIEW' },
        { name: 'TRANSACTION_SUBSRIPTION_STATUS_EDIT' },
        { name: 'TRANSACTION_PAYMENT_INFORMATION_EDIT' },
        { name: 'TRANSACTION_CREATE' },
        { name: 'ADMIN_VIEW' },
        { name: 'ADMIN_EDIT' },
        { name: 'ADMIN_DELETE' },
        { name: 'ADMIN_CREATE' },
        { name: 'PROJECT_AUTH_VIEW' },
        { name: 'PROJECT_AUTH_ADD_ADMIN' },
        { name: 'PROJECT_AUTH_DELETE_ADMIN' },
        { name: 'PROJECT_AUTH_ADD_PROJECT' },
        { name: 'PROJECT_VIEW' },
        { name: 'PROJECT_PERFORMANCE_VIEW' },
        { name: 'PROJECT_STATUS_EDIT' },
        { name: 'APPROVAL_INVESTOR_KYC_EDIT' },
        { name: 'APPROVAL_INVESTOR_LEVEL_EDIT' },
        { name: 'APPROVAL_INVESTOR_ACCOUNT_NUMBER_EDIT' },
        { name: 'APPROVAL_INVESTOR_KYC_TRADABLE' },
        { name: 'APPROVAL_INVESTOR_CREATE' },
        { name: 'APPROVAL_TRANSACTION_STATUS_EDIT' },
        { name: 'APPROVAL_TRANSACTION_PAYMENT_EDIT' },
        { name: 'APPROVAL_TRANSACTION_CREATE' },
        { name: 'APPROVAL_PROJECT_PROCESS' },
        { name: 'APPROVAL_ADMIN_CREATE' },
        { name: 'APPROVAL_ADMIN_ROLE_EDIT' },
        { name: 'APPROVAL_ADMIN_DELETE' },
        { name: 'APPROVAL_ADD_ADMIN_PROJECT_AUTH' },
        { name: 'APPROVAL_DELETE_ADMIN_PROJECT_AUTH' },
        { name: 'APPROVAL_ADD_PROJECT_AUTH' },
        { name: 'VIEW_TICKET' },
      ])
      .execute();

    /* Create all roles */
    await connection
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values([
        { name: 'SCB CS' },
        { name: 'Customer experience' },
        { name: 'Planning and Operation' },
        { name: 'Planning and Op 2' },
        { name: 'Business development' },
        { name: 'FA and IB' },
        { name: 'IT admin' },
        { name: 'CEO' },
        { name: 'COO' },
        { name: 'CTO' },
        { name: 'CIO' },
      ])
      .execute();

    /* Get all roles */
    const scbCsRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'SCB CS' })
      .getOne();

    const customerExperienceRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'Customer experience' })
      .getOne();

    const planningAndOperationRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'Planning and Operation' })
      .getOne();

    const planningAndOp2Role = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'Planning and Op 2' })
      .getOne();

    const businessDevelopmentRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'Business development' })
      .getOne();

    const faAndIbRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'FA and IB' })
      .getOne();

    const itAdminRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'IT admin' })
      .getOne();

    const ceoRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'CEO' })
      .getOne();

    const cooRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'COO' })
      .getOne();

    const ctoRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'CTO' })
      .getOne();

    const cioRole = await connection
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.name = :name', { name: 'CIO' })
      .getOne();

    /* Get Permission Role */
    const scbCsPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: ['INVESTOR_VIEW', 'TRANSACTION_VIEW', 'PROJECT_VIEW'],
      })
      .getMany();

    const customerExperiencePermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'INVESTOR_VIEW',
          'INVESTOR_ACCOUNT_NUMBER_EDIT',
          'INVESTOR_CREATE',
          'TRANSACTION_VIEW',
          'TRANSACTION_CREATE',
          'PROJECT_VIEW',
        ],
      })
      .getMany();

    const planningAndOperationPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'INVESTOR_VIEW',
          'INVESTOR_KYC_LEVEL_EDIT',
          'INVESTOR_INVESTOR_STATUS_EDIT',
          'INVESTOR_INVESTOR_LEVEL_EDIT',
          'INVESTOR_ACCOUNT_NUMBER_EDIT',
          'TRANSACTION_VIEW',
          'TRANSACTION_SUBSRIPTION_STATUS_EDIT',
          'TRANSACTION_PAYMENT_INFORMATION_EDIT',
          'TRANSACTION_CREATE',
          'PROJECT_VIEW',
        ],
      })
      .getMany();

    const planningAndOp2Permission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'INVESTOR_VIEW',
          'TRANSACTION_VIEW',
          'PROJECT_VIEW',
          'APPROVAL_INVESTOR_LEVEL_EDIT',
          'APPROVAL_INVESTOR_ACCOUNT_NUMBER_EDIT',
          'APPROVAL_INVESTOR_CREATE',
          'APPROVAL_TRANSACTION_STATUS_EDIT',
          'APPROVAL_TRANSACTION_PAYMENT_EDIT',
          'APPROVAL_TRANSACTION_CREATE',
        ],
      })
      .getMany();

    const businessDevelopmentPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'PROJECT_VIEW',
          'PROJECT_PERFORMANCE_VIEW',
          'PROJECT_STATUS_EDIT',
        ],
      })
      .getMany();

    const faAndIbPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'PROJECT_VIEW',
          'PROJECT_PERFORMANCE_VIEW',
          'PROJECT_STATUS_EDIT',
        ],
      })
      .getMany();

    const itAdminPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'ADMIN_VIEW',
          'ADMIN_EDIT',
          'ADMIN_DELETE',
          'ADMIN_CREATE',
          'PROJECT_AUTH_VIEW',
          'PROJECT_AUTH_ADD_ADMIN',
          'PROJECT_AUTH_DELETE_ADMIN',
          'PROJECT_AUTH_ADD_PROJECT',
        ],
      })
      .getMany();

    const CEOAndCOOPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'PROJECT_VIEW',
          'PROJECT_PERFORMANCE_VIEW',
          'APPROVAL_INVESTOR_KYC_EDIT',
          'APPROVAL_INVESTOR_KYC_TRADABLE',
          'APPROVAL_PROJECT_PROCESS',
          'APPROVAL_ADMIN_CREATE',
          'APPROVAL_ADMIN_ROLE_EDIT',
          'APPROVAL_ADMIN_DELETE',
        ],
      })
      .getMany();

    const CTOPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: ['PROJECT_VIEW', 'PROJECT_PERFORMANCE_VIEW'],
      })
      .getMany();

    const CIOPermission = await connection
      .getRepository(Permission)
      .createQueryBuilder('permission')
      .where('permission.name IN (:...names)', {
        names: [
          'PROJECT_VIEW',
          'PROJECT_PERFORMANCE_VIEW',
          'APPROVAL_INVESTOR_KYC_EDIT',
          'APPROVAL_INVESTOR_KYC_TRADABLE',
          'APPROVAL_PROJECT_PROCESS',
          'APPROVAL_ADD_ADMIN_PROJECT_AUTH',
          'APPROVAL_DELETE_ADMIN_PROJECT_AUTH',
          'APPROVAL_ADD_PROJECT_AUTH',
        ],
      })
      .getMany();

    /* Set Role and Permission */
    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(scbCsRole)
      .add(scbCsPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(customerExperienceRole)
      .add(customerExperiencePermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(planningAndOperationRole)
      .add(planningAndOperationPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(planningAndOp2Role)
      .add(planningAndOp2Permission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(businessDevelopmentRole)
      .add(businessDevelopmentPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(faAndIbRole)
      .add(faAndIbPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(itAdminRole)
      .add(itAdminPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(ceoRole)
      .add(CEOAndCOOPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(cooRole)
      .add(CEOAndCOOPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(ctoRole)
      .add(CTOPermission);

    await connection
      .createQueryBuilder()
      .relation(Role, 'permissions')
      .of(cioRole)
      .add(CIOPermission);
  }
}
