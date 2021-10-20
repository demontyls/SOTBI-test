const url = 'http://jsonplaceholder.typicode.com/users';
let response = fetch(url);

response.then((data) => {
    if (data.ok) {
        return data.json();
    };
}).then((data) => {
    const shuffledArr = shuffle(data).slice(0, 8);
    const formattedNames = shuffledArr.map(item => `${item.name} ${item.username}`);
    console.log(formattedNames);
});

let shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}
