import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Slider from './Slider';

configure ({adapter: new Adapter()});

describe('<App />', () =>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders slider component', () => {
    const slider = <Slider />;
    expect(wrapper.contains(slider)).toEqual(true);
  });
});
