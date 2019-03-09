const index = require('../src/index');

describe('promiseAllWithFailures', () => {
  it('should return error if invalid input type', async () => {
    await expect(index()).rejects.toThrowError();
  });

  it('should resolve with default cb if no failure cb passed in', async () => {
    await expect(
      index([{ func: Promise.resolve(1) }, { func: Promise.resolve(2) }]),
    ).resolves.toEqual([1, 2]);
  });

  it('should call failure cb and return the failure cb return value', async () => {
    await expect(
      index([
        { func: Promise.reject(1), failureCb: () => 21 },
        { func: Promise.resolve(2) },
      ]),
    ).resolves.toEqual([21, 2]);
  });
});
