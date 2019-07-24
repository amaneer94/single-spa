export class ProjectRoleModel {
    _id?: String;
    model: {
        _id: String,
        name: String,
        typeOfModel: String
    }
    role: RoleModel;//for POST case
    roles?: RoleModel[];
    createdAt?: Date;
    updatedAt?: Date;
}
export class RoleModel {
    _id?: String;
    name: String;
    description?: String;
    permissions?: PermissionModel[]
    model?;
}
export class PermissionModel {
    _id?: String
    name: String
    code: String
    module: String
}