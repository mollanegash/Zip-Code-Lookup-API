const colors = require('colors');

const ZipCodeEmitter = require('./zipCodeEmitter').ZipCodeEmitter;

//ZipCodeEmitter object using the default constructor.

const emitter= new ZipCodeEmitter();


	emitter.on('event1', function (args){
        console.log("Lookup by zip code (02215)\n");
        console.log(colors.blue("Event looupByZipCode raised!(Handler1)\n", args));
        args.handled= true;
       

    });   

    emitter.emit({a: 'citiy', b: 'state'});
    


emitter.on('event1', function(args){
console.log(colors.red("\nLookup by city (BOSTON, MA)\n"));
console.log(colors.blue("Event lookupByCityState raised!(Handler1)\n", args));
args.handled=true;
});

 emitter.on('event2', function(args){
        if(args.handled){
        console.log('event2', argus);
        }

       
    });
    emitter.emit({c: 'citiy', s: 'state'});

    emitter.on('event', function(args){
        console.log(colors.red("\nGet population by state (AA)\n"));
        console.log(colors.blue("Event GetPopulationByState raised! (Handler1)\n"));
    });
    emitter.emit({c: 'citiy', s: 'state'});