const { map, mean, prop } = require("ramda");
const _ = require("lodash");
const _map = require("lodash/map");
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

const generateTestData = (count = 1000000) => {
  const list = [];
  for (let i = 0; i < count; i++){
    list.push({ name: "test", count: count })
  }
  return list;
};

const mappingFunction = (listElement) => ({ name: "modified" });
const es6Map = (list) => list.map(mappingFunction);
const ramdaMap = (list) => map(mappingFunction, list);
const lodashMap = (list) => _.map(list, mappingFunction);
const lodashMapDirect = (list) => _map(list, mappingFunction);
const forLoopMap = (list) => {
  const returnList = [];
  for (let i = 0; i< list.length; i++){
    returnList.push(mappingFunction(list[i]));
  }
  return returnList;
};

const testData = generateTestData();

const tests = {
    'nativeMap': () => es6Map(testData),
    'nativeFor': () => forLoopMap(testData),
    'lodash': () => lodashMap(testData),
    'lodash/map': () => lodashMapDirect(testData),
    'ramda': () => ramdaMap(testData),
};

Object.entries(tests).forEach(([key, fn]) => {
    suite.add(key,fn);
});

suite
// add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        this.filter('successful').map(result => {
            const name = result.name;
            const meanMs = (result.stats.mean * 1000).toFixed(2);
            const variance = (result.stats.variance * 1000).toFixed(2);
            console.log(`${name}: ${meanMs} ± ${variance} ms`);
        });
    });

suite.run();