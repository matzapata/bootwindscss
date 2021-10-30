const fs = require('fs');
var path = require('path');

const destFilename = path.join(__dirname,'available-classes.md');
const srcDirs = [
  path.join(__dirname,'../docs/content/en/components/'),
  path.join(__dirname,'../docs/content/en/forms/'),
  path.join(__dirname,'../docs/content/en/content/')
];

fs.unlinkSync(destFilename)

srcDirs.forEach(async (srcDir) => {
  
  fs.readdir(srcDir, (err, files) => {

    fs.appendFileSync(destFilename, `\n# ${srcDir}\n`)
    
    files.forEach((file) => {
  
        fs.appendFileSync(destFilename, `\n## ${file}\n`)
  
        // Read and append the used classes
        const data = fs.readFileSync(`${srcDir}${file}`, 'utf8');
        
        var classes = [];
        
        data.replace(/class=['"][^'"]+/g, function (m) {
            classes = classes.concat(m.match(/[^'"]+$/)[0].split(" ")); // https://regex101.com/r/jD0wX1/2
        });
        
        classes = classes.filter(function (item, pos) {
            return classes.indexOf(item) == pos;
        }); // return unique classes
        
        classes.forEach(className => {
          fs.appendFileSync(destFilename, `.${className} {/**/}\n`);
        })
      });
  });

})