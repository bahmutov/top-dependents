var la = require('lazy-ass');
var check = require('check-more-types');
var _ = require('lodash');

/* global describe, it */
describe('top dependents', function () {
  var lib = require('..');

  it('is an object', function () {
    la(check.object(lib));
  });

  var libSchema = {
    topDependents: check.fn,
    downloads: check.fn,
    sortedByDownloads: check.fn
  };
  var isValidSchema = _.partial(check.schema, libSchema);

  it('respects schema', function () {
    la(isValidSchema(lib), 'invalid schema', lib);
  });
});
