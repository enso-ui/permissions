const PermissionCreate = () => import('../../../pages/permissions/Create.vue');

export default {
    name: 'system.permissions.create',
    path: 'create',
    component: PermissionCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Permission',
    },
};
