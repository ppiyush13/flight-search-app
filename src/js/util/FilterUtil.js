import {util} from './Util';

class FilterUtil{
	
	filter(obj, configs){
		configs = ( Array.isArray(configs) && configs ) || [configs]
		return configs.every( config => {
			if(!config.enabled)
				return true;
			let value;
			if(typeof config.field == 'function')
				value = config.field.call(obj, obj)
			else
				value = util.resolveKey(obj, config.field )
			switch(config.type){
				case 'equal':
					return value == config.value
				case 'dateEqual':
					return util.compareDate(value, config.value)
				case 'between':
					return (value >= config.minValue && value <= config.maxValue)
				case 'lessThan':
					return value < config.value
				case 'greaterThan':
					return value > config.value
				case 'in':
					return config.value.indexOf(value) != -1
			}
		})
	}
}

export const filterUtil =  new FilterUtil();