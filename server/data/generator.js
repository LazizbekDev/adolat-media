import jwt from "jsonwebtoken";

const generator = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
}

export default generator;