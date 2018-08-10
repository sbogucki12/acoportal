import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import WarningBanner from '../../components/WarningBanner';
import toJSON from 'enzyme-to-json';

it('should have WarningBanner element', () => {
  const wrapper = shallow(<App />); 
  expect(wrapper).toContainReact(<WarningBanner />);
});

it('should match snapshot', () => {
  const wrapper = shallow(<App />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});



