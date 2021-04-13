import Support from '../models/Support';
//import User from '../models/User';

export async function createSupport(req, res) {
    try {
        const { id_usr, supporter_id, tittle, description, status, user_priority, createdAt, updatedAt } = req.body;
        console.log(req.body);
        const newSupport = await Support.create({
            id_usr,
            tittle,
            description,
            status: "Pending",
            user_priority,
            createdAt,
            updatedAt
        }, {
                fields: ['id_usr', 'tittle', 'description', 'status', 'user_priority' ]
            });
        res.json({ message: 'New support created' });
    }
    catch (error) {
        console.log(error);
    }
};

//get supports by user id
export async function getSupportsByUser(req, res) {
    const { iduser } = req.params;
    const support = await Support.findAll({
        attributes: [ 'id', 'tittle', 'description', 'status', 'createdAt' ],
        where: {
            id_usr: iduser
        }
    });
    res.json({
        data: support
    });
}

//all supports for suporter users
export async function getSupportSup(req, res) {
    const support = await Support.findAll({
        attributes: [ 'id', 'id_usr', 'tittle', 'description', 'status', 'user_priority', 'supporter_id', 'createdAt', 'updatedAt' ],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({
        data: support
    });
}

//supporters only
export async function updateSuportSup(req, res) {
    const { id } = req.params;
    const { user_priority, supporter_id, status } = req.body;
    try {
        const suport = await Support.findOne({
            attributes: [ 'id', 'user_priority', 'supporter_id', 'supporter_id', 'status' ],
            where: { id }
        });
        const updatedSup = await Support.update(
            { id, user_priority, supporter_id, status },
            { where: { id } }
        )
        res.json({ message: 'Support Updated', updatedSup });
    } catch (e) {
        console.log(e);
    }
};

//supporters only
export async function deleteSupport(req, res) {
    const { id } = req.params;
    try {
        const supportDeleted = await Support.destroy({
            where: { id }
        });
        res.json({
            message: 'Support Deleted'
        })
    } catch (e) {
        console.log(e);
    }
};

//suporter only
export async function getSupportById(req, res) {
    const { id } = req.params;
    try {
        const support = await Support.findOne({
            where: { id },
            attributes: [ 'id', 'tittle', 'description', 'status', 'created_at' ]
        });
        res.json({ data: support });
    } catch (e) {
        console.log(e);
    }
};

//suporter only
export async function getSupportByTittle(req, res) {
    const { tittle } = req.params;
    try {
        const support = await Support.findOne({
            attributes: [ 'id', 'tittle', 'description', 'status', 'created_at', 'user_priority' ],
            where: {
                tittle
            }
        });
        res.json({ data: support });
    } catch (e) {
        console.log(e);
    }
};
