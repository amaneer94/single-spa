export const BREADS = [
    { route: "/configurations/acl", breads: [{ title: 'Configurations', link: '/configurations/dashboard' }, { title: 'Acl' }] },

    { route: "/employees/add", breads: [{ title: 'Employees', link: '/employees/list' }, { title: 'add' }] },
    { route: "/employees/personal/update/", breads: [{ title: 'Employees', link: '/employees/list' }, { title: 'personal info' }] },
    { route: "/employees/personal/employmentInfo/", breads: [{ title: 'Employees', link: '/employees/list' }, { title: 'employment-info' }] },

    { route: "/projects/project/add", breads: [{ title: 'Projects', link: '/projects/list', eventRouteName: 'project-nav' }, { title: 'add' }] },
    { route: "/projects/project/edit/", breads: [{ title: 'Projects', link: '/projects/list', eventRouteName: 'project-nav' }, { title: 'edit project' }] },
    { routeNoMatch: [{ no: 5, match: 'targets' }], breads: [{ title: 'Projects', link: '/projects/list', eventRouteName: 'project-nav' }, { title: 'targets' }] },
    { routeNoMatch: [{ no: 5, match: 'team' }], breads: [{ title: 'Projects', link: '/projects/list', eventRouteName: 'project-nav' }, { title: 'team' }] },
    { routeNoMatch: [{ no: 5, match: 'activity-log' }], breads: [{ title: 'Projects', link: '/projects/list', eventRouteName: 'project-nav' }, { title: 'activity-logs' }] },
    { routeNoMatch: [{ no: 5, match: 'settings' }], breads: [{ title: 'Projects', link: '/projects/list', eventRouteName: 'project-nav' }, { title: 'settings' }] },


    { route: "/eod/eod-report", breads: [{ title: 'Timesheet', link: '/timesheet/worklogs' }, { title: 'eod' }] },

]