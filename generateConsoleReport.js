const pruebaJson = require("./reports/my new report.json");
const fs = require("fs");
module.exports = pruebaJson;

let testTolates = 0;
let testPasados = 0;
let testFallados = 0;
let testSkipped = 0;

let data = "";

console.log("POST-PROCESAMIENTO de Reporte JSON");

pruebaJson.result[0].suites.forEach((suite, idSuite) => {
  console.log(`SUITE ${idSuite + 1} - ${suite.title}`);
  data += `SUITE ${idSuite + 1} - ${suite.title}\n`;

  suite.test.forEach((test, idTest) => {
    console.log(`TEST ${idTest + 1} - ${test.title} - ${test.state}`);
    data += `TEST ${idTest + 1} - ${test.title} - ${test.state}\n`;

    switch (test.state) {
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

testTolates = testPasados + testFallados + testSkipped;
console.log(`TEST TOTALES: ${testTolates}`);
console.log(`TEST PASADOS: ${testPasados}`);
console.log(`TEST FALLADOS: ${testFallados}`);
console.log(`TEST SKIPEADOS: ${testSkipped}`);

data += `TEST TOTALES: ${testTolates}\n`;
data += `TEST PASADOS: ${testPasados}\n`;
data += `TEST FALLADOS: ${testFallados}\n`;
data += `TEST SKIPEADOS: ${testSkipped}\n`;

fs.writeFileSync("./reports/resumeTest.txt", data);