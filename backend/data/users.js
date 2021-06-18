import bcrypt from 'bcryptjs'; 
const users = [
    { 
        name: 'Admin User',
        email: 'admin@example.com',
        address: 'Thôn 8',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    { 
        name: 'Jone Done',
        email: 'jone@example.com',
        address: 'Thôn 9',
        password: bcrypt.hashSync('123456', 10)
    },
    { 
        name: 'Jame As',
        email: 'jame@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    { 
        name: 'Le Thanh Trung',
        email: 'trung@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
];

export default users;