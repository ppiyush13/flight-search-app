import domHelper from './DomHelper';
import flightService from './flight.service';
import vm from './ViewModel';

class Search{
	init(){
		/**
			Handle Search btn
		*/
		let searchBtn = document.querySelector('#search-btn');
		searchBtn.addEventListener('click', ()=>{
			this.searchClicked();
		});
		/*
			Add listner for search-btn
		*/
		let flightResultContainer = document.querySelector('.flight-result');
		flightResultContainer.addEventListener('click', (evt)=>{
			if(evt.srcElement.classList.contains('flight-book-btn')){
				/*
					Book btn was clicked
				*/
				alert('clicked');
			}
		});
	}
	
	searchClicked(){
		if(vm.origin && vm.dest && vm.departDate && vm.passengers &&
			(!vm.returnSelected || (vm.returnSelected && vm.returnDate))){
			this.loadResult();
		}
		else{
			alert('All the fields are required !');
		}
	}
	
	loadResult(){
		let searchConfig = {
			origin: vm.origin,
			dest: vm.dest,
			departDate: new Date(vm.departDate),
			passengers: vm.passengers,
			returnSelected: vm.returnSelected,
			minPrice: vm.minPrice,
			maxPrice: vm.maxPrice
		};		
		
		if(vm.returnSelected)
			searchConfig.returnDate =  new Date(vm.returnDate)
		
		let records = this.getFlights(searchConfig);
		
		domHelper.loadRecords(records);
		domHelper.updateJourneyDetails(searchConfig);
	}
	
	/*
		Create filter config object and search fligts using flightService class
	*/
	getFlights(userInputs){
		let filterConfigs = [
			{
				id: 'routeSrc',
				type: 'equal',
				field: 'routeSrc',
				value : vm.origin,
				enabled: true,
				applyStep: 'before'
			},
			{
				id: 'routeDest',
				type: 'equal',
				field: 'routeDest',
				value : vm.dest,
				enabled: true,
				applyStep: 'before'
			},
			{
				id: 'departTime',
				type: 'dateEqual',
				field: 'departTime',
				value : new Date(vm.departDate),
				enabled: true,
				applyStep: 'before'
			},
			{
				id: 'passengers',
				type: 'greaterThan',
				field: 'availibility.adult',
				value: vm.passengers,
				enabled: true,
				applyStep: 'before'
			},
			{
				id: 'oneWayPrice',
				type: 'between',
				field: 'fareDetails.adult',
				minValue: vm.minPrice,
				maxValue: vm.maxPrice,
				enabled: !vm.returnSelected,
				applyStep: 'before'
			},
			{
				id: 'returnPrice',
				type: 'between',
				field: flight => flight.sourceFlight.fareDetails.adult + flight.destFlight.fareDetails.adult,
				minValue: vm.minPrice,
				maxValue: vm.maxPrice,
				enabled: vm.returnSelected,
				applyStep: 'after'
			},
			{
				id: 'carrier',
				type: 'in',
				field: 'carrier',
				value: ['SG', 'UK'],
				enabled: false,
				applyStep: 'before'
			}
		]
		return flightService.getFlights(filterConfigs, userInputs)
	}
}

export default new Search();