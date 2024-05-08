import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('Pruebas en <SearchPage/>', () => {

    test('Debe mostrar correctamente con valores por defecto', () => {
        const {contanier} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect(contanier).toMatchSnapshot()
        //screen.debug()
    })


    test('Debe mostrar a Batman y el input con el valor del querystring', () => {
        render(
            //<MemoryRouter initialEntries={['/search?q=batman']}>
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        //screen.debug()
        const input = screen.getByRole('textbox')
        expect (input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect (img.src).toContain('/assets/heroes/dc-batman.jpg')

        const alertD = screen.getByLabelText('alert-danger')
        expect (alertD.style.display).toBe('none')
        //screen.debug()
    })

})