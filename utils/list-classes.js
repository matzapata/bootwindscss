const fs = require('fs');
var path = require('path');

const destFilename = path.join(__dirname,'available-classes.md');
const srcDirs = [
  path.join(__dirname,'../docs/content/en/components/'),
  path.join(__dirname,'../docs/content/en/forms/'),
  path.join(__dirname,'../docs/content/en/content/')
];
const blackList = [
  "bg-[a-zA-Z]+",
  "text-[a-zA-Z]+",
  "border-[a-zA-Z]+",
  "flex",
  "grid",
  "relative",
  "space-y-[0-9]+",
  "space-x-[0-9]+",
  "col-span-[0-9]+",
  "grid-[a-zA-Z]+-[0-9]+",
  "justify-center",
  "items-center",
  "font-[a-zA-Z]+",
  "bd-example",
  "pb-[0-9]+",
  "pr-[0-9]+",
  "pl-[0-9]+",
  "pt-[0-9]+",
  "mt-[0-9]+",
  "mb-[0-9]+",
  "mr-[0-9]+",
  "ml-[0-9]+",
  "my-[0-9]+",
  "mx-[0-9]+",
  "py-[0-9]+",
  "px-[0-9]+",
  "w-[0-9]+",
  "w-full",
  "h-full",
  "h-[0-9]+",
  "hidden",
  "p-[0-9]+"
]
var regex = new RegExp(blackList.join("|"), "i");

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
            return classes.indexOf(item) == pos && !regex.test(item);
        }); // return unique classes
        
        classes.forEach(className => {
          fs.appendFileSync(destFilename, `.${className} {/**/}\n`);
        })
      });
  });

})

// var array = [
//   '.px-3 {/**/}',
//   '.navbar {/**/}',
//   '.navbar-light {/**/}',
//   '.bg-light {/**/}',
//   '.p-2 {/**/}'
// ]

// array = array.filter((item) => {
//   return !regex.test(item)
// })

// console.log(array)