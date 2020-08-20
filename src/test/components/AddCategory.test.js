import React from 'react'
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';

describe('pruebas sobre el componente < AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });
  
  test('debe renderizar correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de cambiar el contenido del input', () => {
    let input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });
    input = wrapper.find('input');

    expect( input.prop('value')).toBe( value );
    
  });

  test('deberia hacer un submit sin postear la información', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();
  });

});
