const fs = require('fs');
let originalPath = undefined;
let referencePath = undefined;
const { exec } = require("child_process");
const datetime = new Date().toISOString().replace(/:/g,".");
process.argv.forEach(function (val,index) {
  if (index == 2) {
    originalPath=val;
  }
  if (index == 3) {
    referencePath=val;
  }
});
setTimeout(()=>{
  fs.readFile('backstop-miso.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else if ( originalPath!==undefined 
      && referencePath!==undefined){
      createConfigJSON(JSON.parse(data));
  }else {
    console.error('ERROR: No se proporciono las rutas de los archivos, por favor leer el readme');
  }
  });
},1000);



function createConfigJSON(configJSON){
   const  escenarios = fs.readdirSync(`./${originalPath}`);
   const referenceJson=configJSON;
   const  testJson= configJSON;
    for(let escenario of escenarios){

      const steps = fs.readdirSync(`./${referencePath}/${escenario}`);
      for(let step of steps){
        referenceJson.scenarios.push(
          {
            label: `${escenario}-${step}`,
            url: `./${originalPath}/${escenario}/${step}`,
            referenceUrl: `./${originalPath}/${escenario}/${step}`,
            readyEvent: "",
            readySelector: "",
            delay: 0,
            hideSelectors: [],
            removeSelectors: [],
            hoverSelector: "",
            clickSelector: "",
            postInteractionWait: 1,
            selectors: [],
            selectorExpansion: true,
            expect: 0,
            misMatchThreshold: 0.1,
            requireSameDimensions: true
          }
        );
        testJson.scenarios.push(
          {
            label: `${escenario}-${step}`,
            url: `./${referencePath}/${escenario}/${step}`,
            referenceUrl: `./${referencePath}/${escenario}/${step}`,
            readyEvent: "",
            readySelector: "",
            delay: 0,
            hideSelectors: [],
            removeSelectors: [],
            hoverSelector: "",
            clickSelector: "",
            postInteractionWait: 1,
            selectors: [],
            selectorExpansion: true,
            expect: 0,
            misMatchThreshold: 0.1,
            requireSameDimensions: true
          }
        );
      }
    }

      createConfigFiles(`${datetime}-1.json`,testJson,()=>{
        createConfigFiles(`${datetime}.json`,referenceJson,()=>{
          executeBackstopAll(`${datetime}.json`,`${datetime}-1.json`);
       })
      });
}

function createConfigFiles(name,json,callback){
  fs.writeFile(name, JSON.stringify(json), 'utf8', 
  function readFileCallback(){
   callback();
  });
}

function aprroveBackstop(configFilenName,configFilenName2){
  exec(`backstop approve --config="${configFilenName}"`, (error, stdout, stderr) => {
    executeBackstop(configFilenName,configFilenName2);  
    if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
  });
}

function deletePath(path){
  const fs = require('fs')

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }
});
}

function executeBackstop(configFilenName,configFilenName2){
exec(`backstop test --config="${configFilenName}"`,{maxBuffer: 1024 * 1000}, (error, stdout, stderr) => {
  deletePath(configFilenName);
  deletePath(configFilenName2);
  if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
}

function executeBackstopAll(configFilenName,configFilenName2){
  console.log(`ejecutando backstop test --config="${configFilenName}"`)
  exec(`backstop test --config="${configFilenName}"`,{maxBuffer: 1024 * 1000}, (error, stdout, stderr) => {
    aprroveBackstop(configFilenName,configFilenName2);
    if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
  });
  }
  






