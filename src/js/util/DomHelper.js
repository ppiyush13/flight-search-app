import {vm} from '../view/ViewModel' 
import {util} from '../util/Util'

class DomHelper{
	init(){
		let journeyLoc = document.querySelector('.journey-location'),
			journeyDepartDate = document.querySelector('#journey-dates-depart span:nth-child(2)'),
			journeyReturnDate = document.querySelector('#journey-dates-return span:nth-child(2)')
			
		vm.bindDomElement(journeyLoc, 'journeyVenues');
		vm.bindDomElement(journeyDepartDate, 'journeyDepartDate');
		vm.bindDomElement(journeyReturnDate, 'journeyReturnDate');
	}
	
	loadRecords(records){
		let resultPane = document.querySelector('.flight-result'),
			outString = '';
		records.forEach((record)=>{
			outString += this.getRecordDom(record);
		})
		resultPane.innerHTML = outString;
	}
	
	getRecordDom(record){
		if(vm.returnSelected)
			return this.getTwoWayFlightDom(record)
		else
			return this.getOneWayFlightDom(record)
	}
	
	updateJourneyDetails(configs){
		this.updateJourneyLocation(configs)
		this.updateJourneyDates(configs)
	}
	
	updateJourneyLocation(configs){
		let locations = [],
			origin = util.toCamelCase(configs.origin),
			dest = util.toCamelCase(configs.dest)
		
		locations[0] = origin
		locations[1] = dest
		if(configs.returnSelected)
			locations[2] = origin
		
		vm.journeyVenues = locations.join(' > ');
	}
	
	updateJourneyDates(configs){
		let journerReturnDateElem = document.querySelector('#journey-dates-return')
		
		vm.journeyDepartDate = util.formatDate(configs.departDate)
		if(configs.returnSelected){
			vm.journeyReturnDate = util.formatDate(configs.returnDate)
			journerReturnDateElem.style.display = 'block'
		}
		else{
			journerReturnDateElem.style.display = 'none'
		}
	}
	
	getOneWayFlightDom(record){
		return `
			<div class="flight hbox">
				<div class="flight-details vbox">
					<div class="price"><h1>Rs. ${util.toCurrency(record.fareDetails.adult)}</h1></div>
					<div class="flight-venue">
						<div class="flight-venue-route source-venue">
							<div class="flight-no font-80">${record.name}</div>
							<div class="flight-route">${record.routeSrc} > ${record.routeDest}</div>
							<div class="flight-depart">
								<span>Depart: </span>
								<span>${util.getTime(record.departTime)}</span>
							</div>
							<div class="flight-arrive">
								<span>Arrive: </span>
								<span>${util.getTime(record.arrivalTime)}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="flight-info vbox">
					<div class="flight-logo">
						<i class="domAirLogo size-70 fl x${record.carrier}" title="${record.carrierDetails.name}"></i>
					</div>
					<div class="flight-book">
						<input type="button" value="Book" class="flight-book-btn"/>
					</div>
				</div>
			</div>
		`;
	}
	
	getTwoWayFlightDom(record){
		return `
			<div class="flight hbox">
				<div class="flight-details vbox">
					<div class="price"><h1>Rs. ${util.toCurrency(record.sourceFlight.fareDetails.adult + 
					record.destFlight.fareDetails.adult)}</h1></div>
					<div class="flight-venue">
						<div class="flight-venue-route source-venue">
							<div class="flight-no font-80">${record.sourceFlight.name}</div>
							<div class="flight-route">${record.sourceFlight.routeSrc} > ${record.sourceFlight.routeDest}</div>
							<div class="flight-depart">
								<span>Depart: </span>
								<span>${util.getTime(record.sourceFlight.departTime)}</span>
							</div>
							<div class="flight-arrive">
								<span>Arrive: </span>
								<span>${util.getTime(record.sourceFlight.arrivalTime)}</span>
							</div>
						</div>
						<div class="flight-venue-route dest-venue" >
							<div class="flight-no font-80">${record.destFlight.name}</div>
							<div class="flight-route">${record.destFlight.routeSrc} > ${record.destFlight.routeDest}</div>
							<div class="flight-depart">
								<span>Depart: </span>
								<span>${util.getTime(record.destFlight.departTime)}</span>
							</div>
							<div class="flight-arrive">
								<span>Arrive: </span>
								<span>${util.getTime(record.destFlight.arrivalTime)}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="flight-info vbox">
					<div class="flight-logo">
						<i class="domAirLogo size-70 fl x${record.sourceFlight.carrier}"></i>
						<i class="domAirLogo size-70 fl x${record.destFlight.carrier}"></i>
					</div>
					<div class="flight-book">
						<input type="button" value="Book" class="flight-book-btn"/>
					</div>
				</div>
			</div>
		`;
	}
}

export const domHelper =  new DomHelper();