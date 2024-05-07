export const ex1t = `
function HW(t){
    return setTimeout(function(){
            console.log("Hello world " , t)
        }, t)
}

HW(t);
`;

export const ex2t = `
async function delayedSum(a, b, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const sum = a + b;
                resolve(sum);
            }, delay)
        })
    }
    
    delayedSum(delay, delay, delay)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.error("Error", error)
        })
        //> для ввода delay
`;
export const ex3t = `
async function getBookID(bookId) {
        try {
            const response = await axios.get(
            \`https://jsonplaceholder.typicode.com/posts/\${bookId}\`
            )
            return response.data
        } catch (error) {
            throw new Error('Error')
        }
    }
    
    getBookID(bookId)
        .then(book => console.log(book))
        .catch(error => console.log(error))
`;
export const ex4t = `
async function getBookID() {
    try {
        const response = await axios.get(
        \`https://jsonplaceholder.typicode.com/posts/\`)
        return response.data
    } catch (error) {
        throw new Error('Error');
    }
}

getBookID()
    .then(books => console.log(books))
    .catch(error => console.log(error))
`;

export const ex5t = `
async function getBookObj(index) {
    try {
        const response = await axios.get(
            \`https://jsonplaceholder.typicode.com/posts/\`)
        return response.data[index];
    } catch (error) {
        throw new Error('Error');
    }
}

getBookObj(index)
    .then(bookObj => console.log(bookObj))
    .catch(error => console.log(error))
`;

export const ex6t = `
async function getBookComments(index) {
    try {
        const response = await axios.get(
    \`https://jsonplaceholder.typicode.com/comments?postId=\${index}\`
        )
        return response.data;
    } catch (error) {
        throw new Error('Error');
    }
}

getBookComments(2)
    .then(comments => comments.forEach(comment => {
        console.log(comment);
    }))
    .catch(error => console.log(error))
`;

export const ex7t = `
    async function getUsers(index) {
        try {
            const users = await axios.get(
                \`https://jsonplaceholder.typicode.com/users\`)
            return users
                .data
                .slice(0, index);
        } catch (error) {
            throw new Error("Error");
        }
    }
    getUsers(index)
    .then(users => console.log(users))
    .catch(error => console.log(error))
`;

export const ex8t = `
async function createUser(userData) {
        try {
            const response = await axios.post(
                \`https://jsonplaceholder.typicode.com/users/\`,
                userData
            );
            return response.data;
        } catch (error) {
            throw new Error("Error create user")
        }
    }
    const newUser = {
        name: 'Makka',
        userName: 'Makka666',
        email: 'Makaka666@mail.ru'
    };
    createUser(newUser)
        .then(createdUser => {
            console.log('User created!', createdUser)
        })
        .catch(error => {
            console.error('Error', error.message)
        })
`

export const ex9t =`
async function updateUser(userId, updatedUser) {
    try {
        const response = await axios.put(
            \`https://jsonplaceholder.typicode.com/users/\${userId}\`, 
            updatedUser);
        return response.data;
    } catch (error) {
        throw new Error("Error updating user")
    }
}
const userId = 3
const updatedUser = {
    name: 'Makka',
    userName: 'Makka666',
    email: 'Makaka666@mail.ru'
};
updateUser(userId, updatedUser)
    .then(updatedUser => {
        console.log('User Update', updatedUser)
    })
    .catch(error => {
        console.error('Error', error.message)
    })
`

export const ex10t = `
async function deleteUser(userId) {
    try {
        const response = await axios.delete(
            \`https://jsonplaceholder.typicode.com/users/\${userId}\`);
        return response.data;
    } catch (error) {
        throw new Error("Error deleting user")
    }
}
deleteUser(userId)
    .then(updatedUser => {
        console.log('User delete', updatedUser)
    })
    .catch(error => {
        console.error('Error deleting user:', error.message)
    })
`

export const ex11t = `
async function patchUser (userId, patchedData){
    try{
        const response = await axios.patch(
            \`https://jsonplaceholder.typicode.com/users/\${userId}\`,
             patchedData)
        return response.data
    } catch (error) {
        throw new Error("Error patching user")
    }
}
 const userPatchedData = {
    name: "lol",
    userName: "obama"
 }

 patchUser(userId, userPatchedData)
 .then(patchedUser => { 
    console.log('User patched', patchedUser)}
    
    ).catch(error => {
        console.error('Error patching user:', error.message)
    })
`

export const ex12t = `
async function getToDos(userId, index){
    try{
        const response = await axios.get(
            \`https://jsonplaceholder.typicode.com/todos?userId=\${userId}\`)
        return response.data.slice(0, index)
    } catch (error) {
        throw new Error('Error')
    }
}

getToDos(userId, 10)
    .then(todos => console.log(todos))
    .catch(error => console.log('Error get todos:', error.messadge))
`