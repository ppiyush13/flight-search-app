import {airports, carriers, flights} from './flight.data';
import {filterUtil} from '../util/FilterUtil';

class FlightService{
	constructor(){
		/*
			Create flights map based on airport as a key
		*/
		this.flightsMap = {}
		flights.forEach(flight => {
			flight.route.forEach(route => {
				let obj = Object.assign({}, flight)
				Object.assign(obj, route)
				obj.route = undefined;
				
				if(!this.flightsMap[route.routeSrc])
					this.flightsMap[route.routeSrc] = []
				this.flightsMap[route.routeSrc].push(obj)
			})
		})
		
		this.airportMap = {}
		airports.forEach( airport => {
			this.airportMap[airport.city.toLowerCase()] = airport.code
		})
		
		this.carrierMap = {}
		carriers.forEach( carrier => {
			this.carrierMap[carrier.code] = carrier
		})
	}
	
	getFlights(filterConfigs, userInputs){
		let filtersMap = this.createMap(filterConfigs, 'id'),
			srcAirportCode = this.airportMap[filtersMap['routeSrc'].value.toLowerCase()],
			destAirportCode = this.airportMap[filtersMap['routeDest'].value.toLowerCase()],
			srcFlights, destFlights, out;
		
		filtersMap['routeSrc'].value = srcAirportCode
		filtersMap['routeDest'].value = destAirportCode
		srcFlights = this.getFlightFromSrcToDest(srcAirportCode, 
						filterConfigs.filter(cfg => cfg.applyStep == 'before'))

		if(userInputs.returnSelected && srcFlights.length){
			filtersMap['routeSrc'].value = destAirportCode
			filtersMap['routeDest'].value = srcAirportCode
			filtersMap['departTime'].value = userInputs.returnDate
			
			destFlights = this.getFlightFromSrcToDest(destAirportCode, 
							filterConfigs.filter(cfg => cfg.applyStep == 'before'));
			out = this.product(srcFlights, destFlights)
		}
		else{
			out = srcFlights
		}
		
		/**
			Apply after filters if any
		*/
		let afterFilters = filterConfigs.filter(cfg => cfg.applyStep == 'after')
		if(afterFilters.length)
			out = out.filter( flight=> filterUtil.filter(flight, afterFilters))
		
		return out
	}
	
	getFlightFromSrcToDest(src, filterConfigs){
		let out = []
		this.flightsMap[src] && this.flightsMap[src].forEach(flight => {
			if(filterUtil.filter(flight, filterConfigs)){
				let temp = Object.assign({}, flight)
				temp.carrierDetails = this.carrierMap[temp.carrier]
				out.push(temp)
			}
		})
		return out;
	}
	
	product(srcFlights, destFlights){
		let out = []
		srcFlights.forEach(srcFlight => {
			destFlights.forEach( destFlight => {
				out.push({
					sourceFlight: srcFlight,
					destFlight
				})
			})
		})
		return out
	}
	
	createMap(array, field){
		let map = {}
		array.forEach(item => {
			map[item[field]] = item
		})
		return map
	}
}
export const flightService = new FlightService();