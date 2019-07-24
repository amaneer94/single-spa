import * as moment from "moment";
export class CommonScripts {
    public static sameDate(d1, d2) {

        try { d1 = new Date(d1) } catch (err) { }
        try { d2 = new Date(d2) } catch (err) { }

        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }
    public static getStatusClass(status) {
        if (!status) return "grey-card";
        switch (status.toLowerCase()) {
            case "new":
                return "grey-card";
            case "in progress":
                return "blue-card";
            case "ready":
            case "ready for test":
                return "brown-card";
            case "completed":
            case "done":
                return "green-card";
            default:
                return "grey-card";
        }
    }

    // Get primary email of the user
    public static setUserPrimaryEmail(user) {
        user.primary_email = '-'; // not set
        if (user.emails && user.emails.length > 0) {
            user.emails.filter((row) => {
                if (row.is_primary) {
                    // user.email = row.email;
                    user.primary_email = row.email.trim();
                }
            });
        }
        if (user.primary_email == "-") {
            try {
                if (user.email) {
                    user.primary_email = user.email.split(",")[0];
                }
            } catch (err) {
            }
        }
        return user;
    }

    // reset the primary email for the users
    public static setUsersPrimaryEmail(users) {
        if (users.length > 0) {
            users.forEach((user) => {
                user = this.setUserPrimaryEmail(user);
            });
        }
        return users;
    }
    public static addTime(time1, time2): string {
        try {
            if (time1 == "00:00:00") {
                return time2;
            } else if (time2 == "00:00:00") {
                return time1;
            }
            if (!time1) time1 = "00:00:00";
            if (!time2) time2 = "00:00:00";
            let hour = 0;
            let minute = 0;
            let second = 0;

            let splitTime1 = time1.split(':');
            let splitTime2 = time2.split(':');

            hour = parseInt(splitTime1[0]) + parseInt(splitTime2[0]);
            minute = parseInt(splitTime1[1]) + parseInt(splitTime2[1]);
            hour = parseInt('' + (hour + (minute / 60)));
            minute = minute % 60;
            if (!splitTime1[2]) splitTime1[2] = "00";
            if (!splitTime2[2]) splitTime2[2] = "00";
            second = parseInt(splitTime1[2]) + parseInt(splitTime2[2]);
            minute = parseInt('' + (minute + second / 60).toFixed(0));
            second = parseInt('' + (second % 60));

            hour = parseInt('' + hour.toFixed(0));

            return (hour < 10 ? '0' + hour : hour) + ":" + (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second);
        } catch (err) {
            console.warn("error in adding time (exception): worklog-home.component", err);
            return "00:00:00";
        }

        // return { combined: hour + ":" + minute + ":" + second, hours: hour, minutes: minute, seconds: second, hours_combined: (hour + (minute / 60.0)).toFixed(1) };
    }
    public static getWeek(fromDate, reverse?) {
        // if its sunday subtract 1 day => to get previos week
        if (fromDate.getDay() === 0) {
            fromDate.setDate(fromDate.getDate() - 1);
        }

        // get first day (monday) of week 
        var firstDayDate = new Date(fromDate.setDate(fromDate.getDate() + 1 - fromDate.getDay()))
            , result = [new Date(firstDayDate)];

        // get date of whole week
        while (firstDayDate.setDate(firstDayDate.getDate() + 1) && firstDayDate.getDay() !== 1) {
            result.push(new Date(firstDayDate));
        }
        if (reverse) {
            result.reverse();
        }
        // return array of dates (week dates)
        return result;
    }
    public static getInterpolatedString(txt, date?) {
        try {
            let subject = txt.match(/\{{(.*?)\}}/)[1].split("date:")[1]; //;
            subject = txt.replace(/ *\{{[^)]*\}} */g, " " + (date ? moment(date) : moment()).format(subject) + " ");
            return subject;
        } catch (err) {
            return txt;
        }
    }
    public static getFileUploadError(item, filter, uploader): string {
        // console.log(item, options);
        let errMsg;
        switch (filter.name) {
            case 'fileSize':
                errMsg = '"' + item.name + '"' + ' file size exceeded, maximum 5mb file allowed.'; break;
            case 'fileType':
                errMsg = '"' + item.name + '"' + ' file type incorrect, allowed: ' + uploader.options.allowedFileType.toString(); break;
            case 'queueLimit':
                errMsg = 'Maximum 10 files are allowed in queue.'; break;
            default:
                errMsg = 'Invalid File, please choose different file.';
        }
        return errMsg;
    }
}