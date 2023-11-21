import { User } from "../Models/index.js";
import { Op } from "sequelize";

class UserController {
    constructor() { }


    getAllUser = async (req, res) => {
        try {
            const users = await User.findAll({
                attributes: ["id", "name", "email"],
            });
            // Eliminar la contraseña de cada usuario antes de enviar la respuesta
           /*  users.forEach(user => {
                delete user.dataValues.password; //dataValues contiene los datos reales del usuario
            }); */
            res.status(200).send({ success: true, message: "Todos los usuarios", data: users })
        } catch (error) {
            res.status(500).send({ success: false, message: 'Error al obtener usuarios', error: error.message });
        }
    };

    getUserById = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findOne({
                where: { id },
                attributes: ['id', 'name', 'email'],
            });
            if (!user) {
                return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
            }

            // No enviar la contraseña en la respuesta
            delete user.dataValues.password;

            res.status(200).send({ success: true, message: 'Usuario obtenido:', data: user });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al obtener el usuario', error: error.message });
        }
    };

    createUser = async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Verificar email
            console.log("Valor del email:", email);
            if (!email) {
                return res.status(400).send({ success: false, message: 'Se requiere un email para crear el usuario' });
            }
            // Verifico si el email ya está en uso antes de crear el user
            const existeUser = await User.findOne({ where: { email } });
            if (existeUser) {
                return res.status(400).send({ success: false, message: 'El email ya está en uso' });
            }

            // Creo el user si el email no está duplicado
            const nuevoUser = await User.create({ name, email, password });
            if (!nuevoUser) {
                throw new Error('No se pudo crear el usuario');
            }

            return res.status(201).send({ success: true, message: 'Usuario creado correctamente', data: nuevoUser });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ success: false, message: 'Error al crear el usuario', error: error.message });
        }
    };


    updateUser = async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;

            // Verificar si el email es único antes de actualizar
            const existeUser = await User.findOne({ where: { email, id: { [Op.not]: id } } }); //Op.not se utiliza en consultas para negar una condición.
            if (existeUser) {
                return res.status(400).send({ success: false, message: 'El email ya está en uso' });
            }

            // Actualizar los campos 
            const updatedUser = await User.update(
                { name, email, password },
                { where: { id } }
            );
            if (updatedUser[0] === 0) {
                return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
            }

            return res.status(200).send({ success: true, message: 'Usuario actualizado correctamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ success: false, message: 'Error al actualizar el usuario', error: error.message });
        }
    };

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params;

            //Verifico si el usuario existe antes de eliminarlo
            const buscarUser = await User.findByPk(id);
            if (!buscarUser) {
                return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
            }
            // Elimino el usuario
            await User.destroy({
                where: { id },
            });

            res.status(200).send({ success: true, message: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).send({ success: false, message: 'Error al eliminar el usuario', error: error.message });
        }
    };


    //Login
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: { email },
            });
            if (!user) throw new Error("Usuario no encontrado");
            const validate = await user.validatePassword(password);
            if (!validate) throw new Error("Password incorrecta");
            const payload = {
                id: user.id,
            };
            const token = generateToken(payload);
            res.cookie("token", token);

            res.status(200).send({ success: true, message: "Usuario Logueado" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
    me = async (req, res) => {
        try {
            const { user } = req;
            res.status(200).send({ success: true, message: "Operacion exitosa", data: user });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }
}
export default UserController;