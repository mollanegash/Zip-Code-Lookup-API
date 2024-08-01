const cities = require('./zipCodeModule_v1');
const colors = require('colors');



console.log(colors.red("Lookup by zip code (02215)\n"), cities.lookupByZipCode('02215'));
console.log(colors.red("\nLookup by zip code (99999)\n"), cities.lookupByZipCode('99999'));
console.log(colors.red("\nLookup by city (BOSTON, MA)\n"),cities.lookupByCityState('Boston','MA') );
console.log(colors.red("\nLookup by city (BOSTON, TX)\n"),cities.lookupByCityState('Boston','TX') );
console.log(colors.red("\nLookup by city (BOSTON, AK)\n"),cities.lookupByCityState('Boston','AK'));
console.log(colors.red("\nGet population by state (MA)\n"),cities.getPopulationByState('MA') );
console.log(colors.red("\nGet population by state (TX)\n"), cities.getPopulationByState('TX'));
console.log(colors.red("\nGet population by state (AA)\n"),cities.getPopulationByState('AA'));


   //file system with asysynclonization =frize the other programm: recommended
  

//file system with sync=frize the other programm:gicves feedback to the user :callback func
var fs =require('fs');
var write=fs.writeFile('hw1aFixes.txt',"orginal", function(err){
    if(err) throw err;
    console.log('the file has been save');
});


