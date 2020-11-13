'use strict';

var utils = require('../utils/writer.js');
var MerkleTree = require('../service/MerkleTreeService');

module.exports./path/LeafIndex&gt;getsapatharrayforleafIndex = function /path/LeafIndex&gt;getsapatharrayforleafIndex (req, res, next, contentType) {
  MerkleTree./path/LeafIndex&gt;getsapatharrayforleafIndex(contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports./siblingPath/LeafIndex&gt;getsasiblingPatharrayforleafIndex = function /siblingPath/LeafIndex&gt;getsasiblingPatharrayforleafIndex (req, res, next, contentType) {
  MerkleTree./siblingPath/LeafIndex&gt;getsasiblingPatharrayforleafIndex(contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports./start&gt;startstheeventfilter = function /start&gt;startstheeventfilter (req, res, next) {
  MerkleTree./start&gt;startstheeventfilter()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports./update&gt;updatesthemerkletree = function /update&gt;updatesthemerkletree (req, res, next) {
  MerkleTree./update&gt;updatesthemerkletree()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
