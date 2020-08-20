import React from 'react'
import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';

describe('pruebas sobre el componente < AddCategory />', () => {

  const setCategories = () => {};
  const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  
  test('debe renderizar correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de cambiar el contenido del input', () => {
    let input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });
    input = wrapper.find('input');
    console.log(input.prop('value'));

    expect( input.prop('value')).toBe( value );
    
  });

});
