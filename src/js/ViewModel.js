class ViewModel{
	init(){
		let elements = document.querySelectorAll('*[bind]');
		elements.forEach(element => {
			let bindProperty = element.getAttribute('bind');
			if(bindProperty.includes('{')){
				// potentially json
				// try parsing it
				try{
					let properties = JSON.parse(bindProperty)
					for(let prop in properties){
						this.bind(element, properties[prop], prop);
					}
				}
				catch(ex){
					// may not be a json
					this.bind(element, bindProperty);
				}
			}
			else
				this.bind(element, bindProperty);
		});
	}
	
	bind(element, bindProperty, elementAttribute = 'value'){
		Object.defineProperty(this, bindProperty, {
			get(){
				return element[elementAttribute];
			},
			set(newValue){
				element[elementAttribute] = newValue;
			}
		});
	}
	
	bindDomElement(element, property){
		Object.defineProperty(this, property, {
			get(){
				return element.innerHTML
			},
			set(newValue){
				element.innerHTML = newValue;
			}
		});
	}
}

export default new ViewModel();