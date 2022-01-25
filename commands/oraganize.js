const fs = require('fs');
const path = require('path');

let types = {
    media: ["mp3","mp4", "mkv","jpg","jpeg","png","gif"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organizeFn (dirPath){
    let OF_path;
   if(dirPath == undefined){
    OF_path = process.cwd();
    return;
   }else{
       let doesExist = fs.existsSync(dirPath);
       if(doesExist){
           OF_path = path.join(dirPath,'Organized_Files');
           if(fs.existsSync(OF_path)==false){
            fs.mkdirSync(OF_path);
            console.log('Organizer-Files folder created');
           }else{
            console.log('Organizer-Files folder already created');
           }                 
       }else{
        console.log("Please Enter Valid Path");
        return;
       }
   }
   organizeHelper(dirPath,OF_path);
}


function organizeHelper(src,dest){
    let fileNames = fs.readdirSync(src);
    for(let i=0;i<fileNames.length;i++){
          let fileAddress = path.join(src,fileNames[i]);
          let isFile = fs.lstatSync(fileAddress).isFile();
          if(isFile){
              let category = getCategory(fileNames[i]);
              console.log(fileNames[i]," belongs to -->",category);

              sendFiles(fileAddress,dest,category);
          }
    }

}

function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types){
        let currTypeArr = types[type];
        for(let i =0;i<currTypeArr.length;i++){
            if(ext == currTypeArr[i]){
                return type;
            }
        }
        
    }
  
    return "others";
    
}

function sendFiles(srcFilePath,dest,category){
 let categoryPath = path.join(dest,category);
if(fs.existsSync(categoryPath)==false){
    fs.mkdirSync(categoryPath);
}
let fileName = path.basename(srcFilePath);
let destPath = path.join(categoryPath,fileName);
fs.copyFileSync(srcFilePath,destPath);
fs.unlinkSync(srcFilePath);
console.log(fileName,"copying to ---->",category);

}

module.exports = organizeFn