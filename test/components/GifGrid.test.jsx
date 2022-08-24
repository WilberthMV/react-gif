import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid/>', () => {

    const category = 'One ponch';

    test('debe de mostar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })
    test('debe de mostar items cuando se cargan las imagenes useFetch', () => {

        const gifs = [
            {
                id: 'abc',
                tittle: 'Saitma',
                url: 'https://localhost/saitama.jpg'

            },
            {
                id: '123',
                tittle: 'Goku',
                url: 'https://localhost/goku.jpg'

            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
        //  expect( screen.getByText( category ) );

    })



})