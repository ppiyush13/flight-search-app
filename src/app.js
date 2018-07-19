import tabBar from './js/TabBar';
import slider from './js/Slider';
import search from './js/Search';
import viewModel from './js/ViewModel';
import domHelper from './js/DomHelper';
import util from './js/Util';

import './scss/base.scss';
import './lib/multi_range_slider/multirange.css';
import './lib/multi_range_slider/multirange.js';
import './lib/dom_air_logo/dom.css';

window.onload = ()=>{
	tabBar.init();
	slider.init();
	search.init();
	viewModel.init();
	domHelper.init();
	let defs = util.getDateInputDefaults();
	
	viewModel.origin = 'Mumbai';
	viewModel.dest = 'bengaluru';
	viewModel.departDate = defs[0];
	viewModel.returnDate = defs[1];
	viewModel.passengers = '2';
	viewModel.minPrice = 2500;
	viewModel.maxPrice = 15000;
	
	viewModel.rangeValue = '2501,15000';
	viewModel.rangeMin = '0';
	viewModel.rangeMax= '20000';
	
	search.loadResult();
}