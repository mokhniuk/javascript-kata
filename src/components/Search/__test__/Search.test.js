import React from 'react';
import Search from '../Search';

describe('Search()', () => {
  it("renders Search header", () => {
    const wrapper = <Search />;
    const input = document.getElementsByTagName('input');
    expect(wrapper.contains(input)).toEqual(true);
  });
})

