let message;
for (let i = 1; i < 7; i++) {
    message = ""
    for (let j = 0; j < i; j++) {      
        message += "*";
    };
    console.log(message);
    
}

for (let index = 1; index < 7; index++) {
    console.log("*".repeat(index));
}