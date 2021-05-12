import React from 'react'
import { adder } from './add'
import App from './App'
import {render, screen} from '@testing-library/react'

test('First Test',()=>{
  expect(true).toBeTruthy();
});

test('Add',()=>{
  let a=1;
  let b=2;
  let sum=3
  expect(adder(a,b)).toBe(sum)
});

