import 'chai/register-should'
import {
	search,
	util
} from '../src/js/index'

describe('testing Search class', function() {
	
	describe('getFlights(userInputs)', function() {
	  
		it('should return flights for matched criterias', function() {
			let searchConfig = {
				origin: 'Mumbai',
				dest: 'Chennai',
				departDate: util.toDateTime('TODAY|10:10'),
				passengers: 1,
				returnSelected: false,
				minPrice: 0,
				maxPrice: 15000
			}
			let flights = search.getFlights(searchConfig)
			
			flights.should.be.an('array')
			flights.should.be.of.length.above(0)
			
			flights[0].should.be.an('object')
			flights[0].should.include.keys('id', 'src' ,'departTime' ,'carrierDetails')
		})
		
		it('should not return flights for unmatched departDate', function() {
			let searchConfig = {
				origin: 'Mumbai',
				dest: 'Chennai',
				departDate: util.toDateTime('TODAY+2|10:10'),
				passengers: 1,
				returnSelected: false,
				minPrice: 0,
				maxPrice: 15000
			}
			let flights = search.getFlights(searchConfig)
			
			flights.should.be.an('array')
			flights.should.be.of.length(0)
			
			
		})
		
		it('should not return flights for unmatched origin', function() {
			let searchConfig = {
				origin: 'Goa',
				dest: 'Chennai',
				departDate: util.toDateTime('TODAY|10:10'),
				passengers: 1,
				returnSelected: false,
				minPrice: 0,
				maxPrice: 15000
			}
			let flights = search.getFlights(searchConfig)
			
			flights.should.be.an('array')
			flights.should.be.of.length(0)
		})
		
		it('should not return flights for unmatched dest', function() {
			let searchConfig = {
				origin: 'Mumbai',
				dest: 'Ahmedabad',
				departDate: util.toDateTime('TODAY|10:10'),
				passengers: 1,
				returnSelected: false,
				minPrice: 0,
				maxPrice: 15000
			}
			let flights = search.getFlights(searchConfig)
			
			flights.should.be.an('array')
			flights.should.be.of.length(0)
		})
		
		it('should not return flights for unmatched passengers count', function() {
			let searchConfig = {
				origin: 'Mumbai',
				dest: 'Chennai',
				departDate: util.toDateTime('TODAY|10:10'),
				passengers: 26,
				returnSelected: false,
				minPrice: 0,
				maxPrice: 15000
			}
			let flights = search.getFlights(searchConfig)
			
			flights.should.be.an('array')
			flights.should.be.of.length(0)
		})
		
		it('should not return flights for unmatched price range', function() {
			let searchConfig = {
				origin: 'Mumbai',
				dest: 'Chennai',
				departDate: util.toDateTime('TODAY|10:10'),
				passengers: 1,
				returnSelected: false,
				minPrice: 1000,
				maxPrice: 7000
			}
			let flights = search.getFlights(searchConfig)
			
			flights.should.be.an('array')
			flights.should.be.of.length(0)
		})
		
		it('should not return flights for unmatched price range', function() {
			let searchConfig = {
				origin: 'Mumbai',
				dest: 'Chennai',
				departDate: util.toDateTime('TODAY|10:10'),
				returnDate: util.toDateTime('TODAY+1|17:30'),
				passengers: 2,
				returnSelected: true,
				minPrice: 1000,
				maxPrice: 12000
			}
			let flights = search.getFlights(searchConfig)
			
			flights.should.be.an('array')
			flights.should.be.of.length.above(0)
			
			flights[0].should.be.an('object')
			flights[0].should.include.keys('sourceFlight', 'destFlight')
			
			flights[0].sourceFlight.should.include.keys('id', 'src' ,'departTime' ,'carrierDetails')
			flights[0].destFlight.should.include.keys('id', 'src' ,'departTime' ,'carrierDetails')
		})
	})
})