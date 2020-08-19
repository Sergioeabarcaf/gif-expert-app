import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas sobre el componente <GifGridItem />', () => {
    const dataImageTest = {id: 1, title: 'hola', url: 'kajakj'};
    let wrapper = shallow( < GifGridItem  dataImage={dataImageTest} />);

    test('Debería renderizar el componente < GifGridItem />', () => {
        expect( wrapper ).toMatchSnapshot();
    });
});