import React from 'react';
import renderer from 'react-test-renderer';
import App from './HomeScreen';

describe('App', () => {
  it('smoke test', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
