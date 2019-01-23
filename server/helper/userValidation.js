const joi=require("joi");

module.exports={
    validations:(records)=>{
        const schema = {
            firstname: joi
              .string()
              .min(2)
              .required(),
            lastname: joi
              .string()
              .min(2)
              .required(),
            email: joi
              .string()
              .allow("")
              .trim()
              .strict()
              .email({ minDomainAtoms: 2 })
              .required(),
            phonenumber: joi
              .number()
              .required(),
            username: joi
              .string()
              .min(2)
              .max(15)
              .allow("")
              .trim()
              .strict()
              .required(),
              password: joi.string().required()
          };
        
          return joi.validate(records, schema);
    }
}