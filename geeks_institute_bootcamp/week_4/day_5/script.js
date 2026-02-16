let goodGrades = 95;

let endSemester = new Promise((resolve, reject) => {
    console.log("test1")
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades => 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
    console.log("test2")
})

endSemester.then(value => console.log("Yeahhh I got a gift"))
endSemester.finally(() => console.log(`No matter if I get a gift or not,
                               I want to have good grades`))
console.log("test3");
