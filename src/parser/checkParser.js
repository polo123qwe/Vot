const {ARG_TYPES} = require('../utils/constants');

function arg_types_test(arg, type) {
    switch(type){
        case ARG_TYPES.STRING: return typeof arg === 'string' || typeof arg === 'number';
        case ARG_TYPES.NUMBER: return typeof arg === 'number' || !isNaN(arg);
    }
}

exports.checkTypes = function(args, argTypes){
    let matchesType = [];
    if(!Array.isArray(args) || !Array.isArray(argTypes)){
        return matchesType;
    }

    for(let i = 0; i < args.length; i++){
        if(argTypes[i] === undefined) {
            return matchesType;
        }
        matchesType.push(arg_types_test(args[i], argTypes[i]));
    }
    return matchesType;
};
