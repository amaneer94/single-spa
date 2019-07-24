export class TargetsModel {
    _id?: any;
    title?: string;
    status?: string;
    type?: string;
    start_date? = new Date();
    end_date?: Date;
    children?: any;
    target?: boolean;
    opened?; 
    project_id?;
    project?;
    nodeType?: string;
    level?: number;
    mode?: string;
    documents?: [];

    constructor() {
        this.end_date = new Date();
        this.end_date.setDate(this.end_date.getDate() + 1);
    }
}