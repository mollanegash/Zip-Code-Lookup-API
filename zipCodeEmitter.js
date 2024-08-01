const EventEmitter = require('events').EventEmitter;
const data = require('./zips.json');

// Custom class 
class ZipCodeEmitter  extends EventEmitter {
	
	// member functions

	
	lookupByZipCode(zip)  {
		this.data=zip;

   for(var zipcode of data){
      if(zipcode._id=='02215' || zipcode._id=='99999'){
		 this.emit(data.zipcode);
    
   }	
	
	}
	
}




	lookupByCityState(city, state)  {
		for(var cityState of data){
			if(cityState.city=='Boston' & cityState.state=='MA'){
			
			data.emit(cityState);
			}else if(cityState.city=='Boston' & cityState.state=='TX'){
				data.emit(cityState)
			
			}else if(cityState.city=='Boston' & cityState.state=='AA'){
			data.emit(cityState);
			}
		}
		
	}
	
	getPopulationByState(state) {
		for(var popBystate of data){
			if(popBystate.state=='MA' ||popBystate.state=='TX' || popBystate.state=='AA'){
			 data.emit(popBystate);
				
		  
			}
		   
		}

	}

}

module.exports.ZipCodeEmitter = ZipCodeEmitter;

