import { hashSync } from 'bcrypt';

const users = [
    {
        name: "Mahmudov Azamat",
        email: "Azamat@gmail.com",
        password: hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Aziz Tojiboyev",
        email: "textnow@gmail.com",
        password: hashSync('123456', 10)
    },
    {
        name: "Shahboz Tojiboyev",
        email: "Shaki@gmail.com",
        password: hashSync('123456', 10)
    },
]

export default users