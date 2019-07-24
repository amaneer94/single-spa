export class ProjectLogsModel {
    _id: String
    project: {
        _id: String,
        name: String
    };
    logs: [{
        _id: String,
        action: String,
        user: {
            name: String,
            _id: String
        },
        dated: Date,
        refId: String,
        model: String,
        prevValue: String,
        newValue: String
    }]
}