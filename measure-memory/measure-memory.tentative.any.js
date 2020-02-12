// META: script=/common/get-host-info.sub.js
// META: script=./resources/common.js
'use strict';

promise_test(async testCase => {
  try {
    let result = await performance.measureMemory();
    checkMeasureMemory(result);
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw error;
    }
    assert_equals(error.name, 'SecurityError');
  }
}, 'Well-formed result of performance.measureMemory.');

