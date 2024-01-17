const pruebaJson = require("./reports/my_new_report.json");
const fs = require("fs");
module.exports = pruebaJson;

let testTotales = 0;
let testPasados = 0;
let testFallados = 0;
let testSkipped = 0;

let data = "";

console.log("POST-PROCESAMIENTO de Reporte JSON");

pruebaJson.results[0].suites.forEach((suite, idSuite) => {
  console.log(`SUITE ${idSuite + 1} - ${suite.title}`);
  data += `SUITE ${idSuite + 1} - ${suite.title} \n`;

  suite.tests.forEach((test, idTests) => {
    console.log(`TEST ${idTests + 1} - ${test.title} - ${test.state}`);
    data += `TEST ${idTests + 1} - ${test.title} - ${test.state} \n`;

    switch(test.state){
      case "passed":
        testPasados++;
        break;
      case "failed":
        testFallados++;
        break;
      case "pending":
        testSkipped++;
        break;
    }
  });
});

testTotales = testPasados + testFallados + testSkipped;

console.log(`TEST TOTALES: ${testTotales}`);
console.log(`TEST PASADOS: ${testPasados}`);
console.log(`TEST FALLADOS: ${testFallados}`);
console.log(`TEST SKIPEADOS: ${testSkipped}`);

data += `TEST TOTALES: ${testTotales} \n`;
data += `TEST PASADOS: ${testPasados} \n`;
data += `TEST FALLADOS: ${testFallados} \n`;
data += `TEST SKIPEADOS: ${testSkipped} \n`;

fs.writeFileSync("reports/reseumenTest.txt", data);