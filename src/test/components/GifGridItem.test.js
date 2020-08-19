import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas sobre el componente <GifGridItem />', () => {
    const dataImageTest = {id: 1, title: 'hola', url: 'kajakj'};
    let wrapper = shallow( < GifGridItem  dataImage={dataImageTest} />);

    test('Debería renderizar el componente < GifGridItem />', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debería de tener un parrafo con la propiedad title', () => {
        const p = wrapper.find('p');
        expect ( p.text().trim() ).toBe( dataImageTest.title );
    });

    test('debería de obtener la imagen igual al url y al alt de dataImageTest', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( dataImageTest.url );
        expect( img.prop('alt') ).toBe( dataImageTest.title );
    });

    test('debería de tener la clase animate__fadeInUp', () => {
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeInUp') ).toBe(true);
        
    })
    
    
    
});