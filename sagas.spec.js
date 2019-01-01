import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { incrementAsync } from './sagas';

test('incrementAsync Saga test', (assert) => {
  const generator = incrementAsync();

  assert.deepEqual(
    generator.next(),
    { done: false, value: call(delay, 1000) },
    'incrementAsync Saga must call delay(1000)',
  );

  assert.deepEqual(
    generator.next(),
    { done: false, value: put({ type: 'INCREMENT' }) },
    'incrementAsync Saga must dispatch an INCREMENT action',
  );

  assert.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done',
  );

  assert.end();
});
