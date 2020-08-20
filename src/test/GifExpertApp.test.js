import React from 'react';
import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';

describe(' pruebas sobre GifExpertApp', () => {
  let wrapper = shallow(<GifExpertApp />);

  test('Debería renderizar la aplicación', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
