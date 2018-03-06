const ARG_TYPES = {
    'STRING': 1,
    'NUMBER': 2,
};
exports.ARG_TYPES = ARG_TYPES;

function arg_types_test(arg, type) {
    switch(type){
        case ARG_TYPES.STRING: return typeof arg === 'string' || typeof arg === 'number';
        case ARG_TYPES.NUMBER: return !isNaN(arg);
    }
}

exports.checkTypes = function(args, argTypes){
    let matchesType = [];
    if(args.hasOwnProperty('length') && argTypes.hasOwnProperty('length')){
        for(let i = 0; i < args.length; i++){
            if(argTypes[i] === undefined) {
                return matchesType;
            }
            matchesType.push(arg_types_test(args[i], argTypes[i]));
        }
    }
    return matchesType;
};