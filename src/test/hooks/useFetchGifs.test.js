import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('realizar pruebas sobre hook useFetchGifs', () => {
  test('Debería retornar el estado incial', () => {

    const category = 'Dragon Ball';
    const { result } = renderHook( () =>  useFetchGifs(category));
    const { data, loading } = result.current;

    expect( data ).toEqual( [] );
    expect( loading ).toBeTruthy();
    
  })
  
});
