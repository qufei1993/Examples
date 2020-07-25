let a;

return Promise.resolve().then(() => {
    return a.b;
}).catch(err => {
    console.log(JSON.stringify('undefined'));
});