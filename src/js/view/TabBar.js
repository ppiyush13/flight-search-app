import {vm} from './ViewModel'

class TabBar{
	init(){
		this.returnDateElement = document.querySelector('#return-date');
		let tabBar = document.querySelector('.tab-bar');
		tabBar.addEventListener('click', (evt)=>{
			let srcClassList = evt.srcElement.classList;
			if(srcClassList.contains('tab')){
				if(!srcClassList.contains('selected')){
					var prevSelectedTab = document.querySelector('.tab.selected');
					if(prevSelectedTab){
						prevSelectedTab.classList.remove('selected')
					}
					srcClassList.add('selected');
					this.onTabChange(evt.srcElement, prevSelectedTab)
				}
			}
		});
		
		/**
			Will be executed only during initialization 
		*/
		if(!vm.returnSelected){
			this.returnDateElement.style.display = 'none';
		}
	}
	
	onTabChange(newSelectedTab, oldSelectedTab){
		let selectedValue = newSelectedTab.getAttribute('value');
		switch(selectedValue){
			case 'oneWay':
				this.returnDateElement.style.display = 'none';
				vm.returnSelected = false;
				break;
			case 'return':
				this.returnDateElement.style.display = 'block';
				vm.returnSelected = true;
				break;
		}
	}
}

export const tabBar = new TabBar();