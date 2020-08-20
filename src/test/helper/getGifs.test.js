import { getGifs } from '../../helpers/getGifs';

describe('pruebas sobre helper getGifs', () => {
  test('deberia traer 10 elementos', async () => {
    const gifs = await getGifs('Dragon Ball');
    expect(gifs.length).toBe(10);
  });

  test('deberia traer 0 elemento al no entregarle una categoría', async () => {
    const gifs2 = await getGifs('');
    expect(gifs2.length).toBe(0);
  });


});
