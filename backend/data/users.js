import bcrypt from 'bcryptjs'; 
const users = [
    { 
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    { 
        name: 'Jone Done',
        email: 'jone@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    { 
        name: 'Jame As',
        email: 'jame@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
];

export default users;