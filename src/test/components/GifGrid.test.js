import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre el componente < GifGrid />', () => {
  const category = 'Dragon Ball';
  const dataArray = [{id: '861761', title: 'Esto es una prueba', url:'https://esto.es/una/prueba'}];

  test('Deberia renderizar el componente', () => {
    
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    
    const wrapper = shallow(< GifGrid category={ category } />);
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debería de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
    useFetchGifs.mockReturnValue({ data: dataArray, loading: false });

    const wrapper = shallow(< GifGrid category={ category } />);

    expect( wrapper ).toMatchSnapshot();
  });
  
});
