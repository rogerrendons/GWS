import User from '../models/User';
import Support from '../models/Support';
const jwt = require('jsonwebtoken');

//jwt
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, 'hola', {
        expiresIn: ONE_WEEK
    })
}

//supporters only
export async function getUsers(req, res) {
    //res.send('hello');
    try {
        const nojoda = await User.findAll({
            atributes: ['id', 'email', 'first_name', 'last_name', 'supporter']
        });
        res.json({
            data: nojoda
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
                data: {},
                message: 'something goes wrong'
            });
    }
};

export async function getSupporters(req, res) {
    const { email, first_name, last_name, supporter } = req.body;
    try {
        const allSupporters = await User.findAll({
            atributes: ['id', 'first_name', 'last_name'],
            where: {
                supporter: true
            }
        });
        res.json({
            data: allSupporters
        })
    } catch (error) {
        console.log(error);
        res.send(404);
        res.json({
            data: {},
            message: 'something goes wrong'
        });
    }
};

export async function login (req, res) {
    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(403).send({
                error: 'La informacion de inicio sesion es incorrecta'
            })
        }
        const passwordValid = await user.validPassword(password)
        
        if (!passwordValid) {
            return res.status(403).send({
                error: 'Datos ingresados incorrectos'
            })
        }
        const userJson = user.toJSON()
        res.send ({
            user: userJson,
            token: jwtSignUser(userJson)
        })
    } catch (err) {
        res.status(403).send({
            error: err.message
        })
    }
}

export async function createUser(req, res) {
    console.log('aqui vamo melo caramelo-------------');
    //const { id, email, first_name, last_name, supporter, password } = req.body;
    console.log('aqui vamo melo caramelo-------------');
    try {
        console.log('aqui vamo melo caramelo-------------');
        const { email, first_name, last_name, supporter, password } = req.body;
        const newUser =  await User.create({
            email,
            first_name,
            last_name,
            supporter,
            password
        }, {
                fields: ['email', 'first_name', 'last_name', 'supporter', 'password']
            });
            console.log('aqui vamo melo caramelo------frghgfsdbgfbdfbds------------------------');
        if (newUser) {
            console.log('aqui vamo melo caramelo------frghgfsdbgfbdfbds----------------------11--')
            return res.json({
                message: 'New user created',
                data: newUser
            })
        }
        console.log('aqui vamo melo caramelo------frghgfsdbgfbdfbds--------------------22----')
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong. Try Again.',
            data: {},
        })
    }
    res.json('received');
};

export async function getName(req, res) {
    const { first_name, last_name } = req.params;
    try {
        const username = await User.findAll({
            atributes: ['first_name', 'last_name'],
            where: {
                first_name,
                last_name
            }
        });
        return res.json({
            data: username
        });
    } catch (error) {
        console.log(error);
    }
}
//suporters only
export async function updateUser(req, res) {
    const { id } = req.params;
    const { email, first_name, last_name, supporter, password } = req.body;
    try {
        const userup = await User.findAll({
            atributes: ['id', 'email', 'first_name', 'last_name', 'supporter', 'password'],
            where: {
                id
            }
        });
        if (userup.length > 0) {
            userup.forEach(async (userup) => {
                await userup.update({
                    // name: name ? name : project.name,
                    id,
                    email,
                    first_name,
                    last_name,
                    supporter,
                    password
                });
            });
            return res.json({
                message: 'Project Updated',
                data: userup
            })
        }
    } catch (e) {
        res.json({
            message: 'Cannot update this Project.',
            data: {}
        })
    }
};
//suporter only

// aquí vamos hpta
export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        //borrar support
        // await Support.destroy({
        //     where: {
        //         id: id
        //     }
        // });
        const deleteRowsCount = await User.destroy({
            where: {
                id
            }
        });
        return res.json({
            message: 'User Deleted',
            count: deleteRowsCount
        })
    } catch (error) {
        res.json({
            message: 'Delete Failed.',
            data: {}
        });
    }
};