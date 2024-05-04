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