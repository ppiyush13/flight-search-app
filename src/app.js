import {
	tabBar,
	slider,
	search,
	vm,
	domHelper,
	util
} from './js/Index'

import './scss/base.scss';
import './lib/multi_range_slider/multirange.css';
import './lib/multi_range_slider/multirange.js';
import './lib/dom_air_logo/dom.css';

window.onload = ()=>{
	tabBar.init();
	slider.init();
	search.init();
	vm.init();
	domHelper.init();
	let defs = util.getDateInputDefaults();
	
	vm.origin = 'Mumbai';
	vm.dest = 'bengaluru';
	vm.departDate = defs[0];
	vm.returnDate = defs[1];
	vm.passengers = '2';
	vm.minPrice = 2500;
	vm.maxPrice = 15000;
	
	vm.rangeValue = '2501,15000';
	vm.rangeMin = '0';
	vm.rangeMax= '20000';
	
	search.loadResult();
}