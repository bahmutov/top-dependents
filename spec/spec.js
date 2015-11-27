var la = require('lazy-ass');
var check = require('check-more-types');
var _ = require('lodash');

/* global describe, it */
describe('top dependents', function () {
  var lib = require('..');

  it('is an object', function () {
    la(check.object(lib));
  });

  it('respects schema', function () {
    var libSchema = {
      topDependents: check.fn,
      infoForDependents: check.fn,
      sortedByValues: check.fn
    };
    var isValidSchema = _.partial(check.schema, libSchema);
    la(isValidSchema(lib), 'invalid schema', lib);
  });

  it('can fetch top dependents', function () {
    var name = 'heroin';
    return lib.topDependents(name, 10)
      .then(function (list) {
        console.log('top dependents for %s', name);
        console.log(list);
        la(check.arrayOf(check.unemptyString, list), 'invalid list', list);
      });
  });

  it('can fetch information for dependents', function () {
    la(check.fn(lib.infoForDependents));
    var list = ['obind', 'qunit-inject'];
    var metric = 'downloads';
    return lib.infoForDependents(metric, list)
      .then(function (results) {
        console.log('info for dependents', list);
        console.log(results);
        la(check.object(results), 'expected object with results', results);
        la(_.keys(results).length === list.length,
          'expected result for each dependent', results, list);
        la(check.arrayOf(check.number, _.values(results)),
          'expected values to be numbers', results);
      });
  });

});
