import { render, screen } from "@testing-library/react"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"

describe   ('Pruebas en el <PrivateRoute/>', () => {

    test('Si sí está autenticado, debe mostrar el children', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: '323',
                name: 'Federico'
            }
        }

        //render(<PublicRoute />)
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada (para sí logueados)</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        //screen.debug()
        expect(screen.getByText('Ruta privada (para sí logueados)')).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/search?q=batman')
        
    })


} )