import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('realizar pruebas sobre hook useFetchGifs', () => {
  test('Debería retornar el estado incial', async() => {

    const category = 'Dragon Ball';
    const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs(category));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual( [] );
    expect( loading ).toBeTruthy();
    
  });

  test('debería retornar un array de imágenes y el loading en false ', async() => {

    const category = 'Dragon Ball';
    const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs(category));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual( [] );
    expect( loading ).toBeTruthy();
    
  });
  
});
