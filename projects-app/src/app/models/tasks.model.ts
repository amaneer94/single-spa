export class TasksModel {
    _id?: any;
    title?: string;
    status? = "new";
    type? = "feature";
    start_date? = new Date();
    delivery_date?: Date;
    children?: any;
    target?: boolean;
    project_id?;
    level?;
    data?;
    mode?;
    parent_id?;
    nodeType?;
    documents? = [];
    assignees = [];
    project?;

    constructor() {
        this.delivery_date = new Date();
        this.delivery_date.setDate(this.delivery_date.getDate() + 1);
    }
}