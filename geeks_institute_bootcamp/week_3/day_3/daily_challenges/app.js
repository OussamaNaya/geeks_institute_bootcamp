const fs = require('fs');
//new content
const newContent = "House Salad"

//writeFile method
fs.writeFile('menu.txt', newContent, function (err) {
    if (err) {
        console.error(err)
        return
    }
});

//readFile method
fs.readFile('menu.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});

console.log("-----Restaurant Menu---------", '\n',);


fs.unlink('test.txt', function (err) {
    console.log('write operation complete.');
});

fs.readdir('./', (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    console.log('files: ', files)
})