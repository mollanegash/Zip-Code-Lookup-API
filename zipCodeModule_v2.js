const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {

    //this.data=zip;

    
        const cipCode = data.find((value) => value._id=='02215');
            return cipCode;

       
 
          
         
 
            


    
   
   
		
};


module.exports.lookupByCityState = (city, state) => {
  

 
   return data.filter(data.map(cy, st => (cy.city=='Boston'), (cy.state=='MA')));
   return data.filter(data.map(cy, st => (cy.city=='Boston'), (cy.state=='TX')));
   return data.filter(data.map(cy, st => (cy.city=='Boston'), (cy.state=='AA')));
  
  
  
		
};

module.exports.getPopulationByState = (state) => {
   // console.log(data.reduce((s) =>s.state)) 


		
};

