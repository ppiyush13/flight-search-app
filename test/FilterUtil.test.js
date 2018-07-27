import 'chai/register-should'
import {filterUtil} from '../src/js/index'

describe('testing FilterUtil class', function() {
	
	describe('filter(obj, configs)', function() {
	  
		it('should return true for type equal on src field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z')
			},
			
			filterConfigs = [
				{
					type: 'equal',
					field: 'src',
					value : 'BOM',
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
			
		})
		
		it('should return true for type between on originDepartTime date field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z')
			},
			
			filterConfigs = [
				{
					type: 'between',
					field: 'originDepartTime',
					minValue : new Date('2018-07-27T12:00:00Z'),
					maxValue : new Date('2018-07-27T13:00:00Z'),
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
		})
		
		it('should return false for type between on originDepartTime date field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z')
			},
			
			filterConfigs = [
				{
					type: 'between',
					field: 'originDepartTime',
					minValue : new Date('2018-07-27T12:01:00Z'),
					maxValue : new Date('2018-07-27T12:10:00Z'),
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(false)
		})
		
		it('should return true for type dateEqual on originDepartTime date field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z')
			},
			
			filterConfigs = [
				{
					type: 'dateEqual',
					field: 'originDepartTime',
					value : new Date('2018-07-27T12:01:00Z'),
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
		})
		
		it('should return false for type dateEqual on originDepartTime date field for incorrect date', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z')
			},
			
			filterConfigs = [
				{
					type: 'dateEqual',
					field: 'originDepartTime',
					value : new Date('2018-07-28T12:01:00Z'),
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(false)
		})
		
		it('should return true for type lessThan on price number field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 1500
			},
			
			filterConfigs = [
				{
					type: 'lessThan',
					field: 'price',
					value : 1800,
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
		})
		
		it('should return false for type lessThan on price number field for greater value', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 2500
			},
			
			filterConfigs = [
				{
					type: 'lessThan',
					field: 'price',
					value : 1800,
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(false)
		})
		
		it('should return false for type greaterThan on price number field for lesser value', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 1500
			},
			
			filterConfigs = [
				{
					type: 'greaterThan',
					field: 'price',
					value : 1800,
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(false)
		})
		
		it('should return true for type greaterThan on price number field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 2500
			},
			
			filterConfigs = [
				{
					type: 'greaterThan',
					field: 'price',
					value : 1800,
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
		})
		
		it('should return true for type in on carrier string field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 2500
			},
			
			filterConfigs = [
				{
					type: 'in',
					field: 'carrier',
					value : ['6E', 'AI', 'NW'],
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
		})
		
		it('should return false for type in on carrier string field', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 2500
			},
			
			filterConfigs = [
				{
					type: 'in',
					field: 'carrier',
					value : ['AI', 'NW'],
					enabled: true
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(false)
		})
		
		it('should return true for no filter criteria', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 2500
			},
			
			filterConfigs = [
				
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
		})
		
		it('should return true with some filter criterias disabled', function() {
			
			let obj = {
				id: '1',
				name: '6E-001',
				carrier: '6E',
				src: 'BOM',
				dest: 'DEL',
				type: 'E',
				originDepartTime: new Date('2018-07-27T12:00:00Z'),
				destArrivalTime: new Date('2018-07-27T14:10:00Z'),
				price: 2500
			},
			
			filterConfigs = [
				{
					type: 'in',
					field: 'carrier',
					value : ['AI', 'NW'],
					enabled: false
				},
				{
					type: 'greaterThan',
					field: 'price',
					value : 1800,
					enabled: true
				},
				{
					type: 'dateEqual',
					field: 'originDepartTime',
					value : new Date('2018-07-27T12:01:00Z'),
					enabled: true
				},
				{
					type: 'between',
					field: 'originDepartTime',
					minValue : new Date('2018-07-27T12:01:00Z'),
					maxValue : new Date('2018-07-27T12:10:00Z'),
					enabled: false
				}
			]
			
			let criteriasPassed = filterUtil.filter(obj, filterConfigs)
			
			criteriasPassed.should.be.a('boolean')
			criteriasPassed.should.be.equal(true)
		})
	})
})