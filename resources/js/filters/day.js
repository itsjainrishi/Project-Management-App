import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'

const day = {};

function diffForHumans(date) {
	dayjs.extend(relativeTime);
	
	var d = new Date()
	d = (d.getUTCFullYear() + "-" + ("0" + (d.getUTCMonth()+1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2) + " " + ("0" + d.getUTCHours()).slice(-2) + ":" + ("0" + d.getUTCMinutes()).slice(-2) + ":" + ("0" + d.getUTCSeconds()).slice(-2))
	return dayjs(date).from(d);
}

day.install = (Vue) => Vue.filter("day", val => diffForHumans(val));

export default day;