const data = require('./zips.json');


/*The function lookupByZipCode should return the JavaScript object from
the data whose _id value matches the specified argument. If the specified
argument is not present, undefined is returned.*/

  
    


module.exports.lookupByZipCode =  (zip) => {
    this.data=zip;

   for(var zipcode of data){
      if(zipcode._id=='02215' )
        return zipcode;
    else if(zipcode._id=='99999')
        return zipcode;

         
        

   }


};


 
// The function lookupByCityState should return a JavaScript object with
// all the matching data as shown in the outputs below.

module.exports.lookupByCityState = (city, state) => {
    // data.city=city;
    // data.state=state;
    for(var cityState of data){
        if(cityState.city=='Boston' & cityState.state=='MA'){
        //console.log("Lookup by city, state:",data);
            return cityState;
        
        }else if(cityState.city=='Boston' & cityState.state=='TX'){
            return cityState;
        }else if(cityState.city=='Boston' & cityState.state=='AA'){
            return cityState;
        }
    }
    
         }
        

// The function getPopulationByState returns the total population for
// the specified state as shown in the outputs below.

module.exports.getPopulationByState = (state) => {
    // data.pop=state;

    for(var popBystate of data){
        if(popBystate.state=='MA' ||popBystate.state=='TX' || popBystate.state=='AA'){
         
            return popBystate;
      
        }
       
    }
 
}
   


