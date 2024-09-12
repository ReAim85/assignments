const fs = require("fs");


function fileCleaner(path) {
         fs.readFile(path, "utf-8", (err, data)=>{
            if(err){
                console.log("an error occurred: "+ err)
                return;
            }

            const cleanedData = data.replace(/\s+/g, " ")

            fs.writeFile(path, cleanedData, (err)=>{
                if(err){
                    console.log("an error occurred" + err)
                    return;
                }
                console.log("file cleaned successfully")
            })
        }
    )}

    fileCleaner("medium/a.txt");