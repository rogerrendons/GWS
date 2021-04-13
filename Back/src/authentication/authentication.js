const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            first_name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            last_name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            email: Joi.string()
                .email(),
            supporter: Joi.boolean().default(false),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        })
        const value = schema.validate(req.body)

        if (value.error) {
            switch (value.error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Ingresa un email correcto'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'Contraseña con caracteres invalidos'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Datos invalidos'
                    })
            }
        } else {
            return next()
        }
    }
}
