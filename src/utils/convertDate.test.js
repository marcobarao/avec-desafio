import { expect } from 'chai';
import convertDate from './convertDate';

it('convertDate should be a function', () => {
  expect(convertDate).to.be.a('function');
});

it('converTimeZone("2014-02-17T12:05:47Z") should return "17/02/2014 09:05:47"', () => {
  const UTC = '2014-02-17T12:05:47Z';
  const result = '17/02/2014 09:05:47';
  expect(convertDate(UTC)).to.be.equal(result);
});

it('converTimeZone("2019-02-02T13:45:49Z") should return "02/02/2019 11:45:49"', () => {
  const UTC = '2019-02-02T13:45:49Z';
  const result = '02/02/2019 11:45:49';
  expect(convertDate(UTC)).to.be.equal(result);
});
