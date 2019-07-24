export class ProjectsModel {
    _id?: any;
    id?: any;
    business_office_id: number;
    officeContact?: any;
    client: any;
    client_id?: number;
    name?: string;
    number?: number;
    cost?: number;
    start_date?: Date;
    updated_at?: Date;
    payment_mode?: string;
    run_level_name?: string;
    created_at?: Date;
    created_by?: string;
    deleted_at?: Date;
    end_date?: Date;
    estimated_delivery_date?: Date;
    attachment_date?: Date;
    vertical?;
    description?;
    managers?;
    resource?;
    documents?= [];
    taigaProjectId?;
}