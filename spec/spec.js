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
      downloads: check.fn,
      sortedByDownloads: check.fn
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

  it('can fetch top dependents', function () {
    var name = 'heroin';
    return lib.topDependents(name, 10)
      .then(function (list) {
        console.log('top dependents for %s', name);
        console.log(list);
        la(check.arrayOf(check.unemptyString, list), 'invalid list', list);
      });
  });

});
