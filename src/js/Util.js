class Util{
	trimTime(date){
		let retDate = new Date(date)
		retDate.setHours(0, 0, 0, 0)
		return retDate
	}
	
	compareDate(a, b){
		a = this.trimTime(a)
		b = this.trimTime(b)
		return a.getTime() == b.getTime()
	}
	
	toCurrency(n){
		return n.toLocaleString()
	}
	
	toCamelCase(str){
		return str.replace(/^(.)(.*)/, (match, p1, p2) => {
			return p1.toUpperCase() + p2;
		})
	}
	
	formatDate(date){
		let mon = date.toDateString().split(' ')[1];
		return `${date.getDate()} ${mon} ${date.getFullYear()}`;
	}
	
	getTime(date){
		let hours = date.getHours(),
			mins = date.getMinutes(),
			suffix = 'AM'
		if(hours >= 12){
			suffix = 'PM';
			hours -= 12
		}
		if(hours < 10){
			hours = "0" + hours
		}
		if(mins < 10){
			mins = "0" + mins
		}
		return `${hours}:${mins} ${suffix}`
	}
	
	resolveKey(obj, path, defaultValue) { 
		let keys = path.split('.'), i = 0;
		while (obj && i < keys.length)
			obj = obj[keys[i++]];
		return obj || defaultValue;
	}
	
	getDateInputDefaults(){
		let today = new Date(),
			out = [this.getFormattedDate(today)]
		
		today.setDate(today.getDate() + 1)
		out.push(this.getFormattedDate(today))
		return out
	}
	
	// YYYY-MM-DD
	getFormattedDate(d){
		let y = d.getFullYear(),
			m = d.getMonth() + 1,
			dd = d.getDate()
		if(m < 10)
			m = '0' + m
		if(dd < 10)
			dd = '0' + dd
		return `${y}-${m}-${dd}`
	}
}

export default new Util();