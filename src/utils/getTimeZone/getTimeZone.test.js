import { expect } from 'chai';
import getTimeZone from './index';

it('getTimeZone should be a function', () => {
  expect(getTimeZone).to.be.a('function');
});

it('getTimeZone() should return "UTC-2"', () => {
  expect(getTimeZone()).to.be.equal('UTC-2');
});

it('getTimeZone(-600) should return "UTC+10"', () => {
  expect(getTimeZone(-600)).to.be.equal('UTC+10');
});

it('getTimeZone(600) should return "UTC-10"', () => {
  expect(getTimeZone(600)).to.be.equal('UTC-10');
});

it('getTimeZone(0) should return "UTC-10"', () => {
  expect(getTimeZone(0)).to.be.equal('UTC');
});
