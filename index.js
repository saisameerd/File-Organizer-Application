let inputArr = process.argv.slice(2);

const command = inputArr[0];

switch (command) {
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Please 🙏 Input Right command");
        break;
}

function treeFn (dirPath){
    console.log("Tree has been implemented", dirPath);
}

function organizeFn (dirPath){
    console.log("Organize has been implemented ", dirPath);
}

function helpFn(){
    console.log(`help has been implemented 
            These commands can be implemented
            1)Tree for printing folder tree
            2)Organize for organize a folder
            3)help for listing commands
    
    `);
}

