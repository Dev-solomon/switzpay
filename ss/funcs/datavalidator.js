const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
                .min(3)
                .max(30),

    password: Joi.string()
                .pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*A-Z)(?=.*\W)(?!.*).{8,20}$/)),

    confirmPassword: Joi.ref('password'), 
    
    email:  Joi.string()
            .email({minDomainSegments: 2, tlds: {
                allow: ['com', 'net', 'org']
            }}) 
});

const test = schema.validate({username: 'abc' })
console.log(test);

module.exports = schema;