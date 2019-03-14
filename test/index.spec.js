const index = require('../src/index').promiseAllWithFailures;

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
    const failureCb = jest.fn(() => 21);
    await expect(
      index([
        { func: Promise.reject(1), failureCb },
        { func: Promise.resolve(2) },
      ]),
    ).resolves.toEqual([21, 2]);
    expect(failureCb).toBeCalledWith(1);
  });

  it('should return error from rejects', async () => {
    const error = new Error('reject promise');
    await expect(
      index([{ func: Promise.reject(error) }, { func: Promise.resolve(2) }]),
    ).resolves.toEqual([error, 2]);
  });
});
