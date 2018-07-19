import vm from './ViewModel';

class Slider{
	init(){
		let rangeElements = document.querySelectorAll('.slider-pane input[type="range"]'),
			rangeDisplayElements = document.querySelectorAll('.range-value > span');
			
		rangeElements.forEach(rangeElement => {
			rangeElement.addEventListener('change', evt =>{
				this.onSliderChange(rangeElements[0].value.split(','))
			})
		});
		
		vm.bindDomElement(rangeDisplayElements[0], 'minPrice')
		vm.bindDomElement(rangeDisplayElements[1], 'maxPrice')
	}
	
	onSliderChange([minValue, maxValue]){
		vm.minPrice = minValue
		vm.maxPrice = maxValue
	}
}

export default new Slider();