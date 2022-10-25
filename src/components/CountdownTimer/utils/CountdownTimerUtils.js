import dayjs from 'dayjs'

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
    const timestampDayjs = dayjs(timestampMs)
    const nowDayjs = dayjs()
    if(timestampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: getSeconds(timestampDayjs, nowDayjs),
            minutes: getMinutes(timestampDayjs, nowDayjs),
            hours: getHours(timestampDayjs, nowDayjs),
            days: getDays(timestampDayjs, nowDayjs)
        }
    }
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    }
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
    return padWithZeros(seconds, 2)
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
    return padWithZeros(minutes, 2)
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
    return padWithZeros(hours, 2)
}

function getRemainingDays(nowDayjs, timestampDayjs) {
    return timestampDayjs.diff(nowDayjs, 'days').toString()
}

function getSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
    return padWithZeros(seconds, 2)
}

function getMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
    return padWithZeros(minutes, 2)
}

function getHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
    return padWithZeros(hours, 2)
}

function getDays(nowDayjs, timestampDayjs) {
    return timestampDayjs.diff(nowDayjs, 'days').toString()
}

function padWithZeros(number, minLength) {
    const numberString = number.toString()
    if(numberString.length >= minLength) return numberString
    return '0'.repeat(minLength - numberString.length) + numberString
}
