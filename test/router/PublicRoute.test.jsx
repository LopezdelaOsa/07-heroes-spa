import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <PublicRoute />', () => {
    
    test('Si no está autenticado, debe mostrar el children', () => {

        const contextValue = {
            logged: false
        }

        //render(<PublicRoute />)
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública (para no logueados)</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        //screen.debug()
        expect(screen.getByText('Ruta pública (para no logueados)')).toBeTruthy()
        
    })

    test('Si está autenticado, debe navegar', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Asi me llamo',
                id: '123'
            }
        }

        //render(<PublicRoute />)
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={ <h1>Ruta pública (para no logueados)</h1>} />
                        <Route path='marvel' element={ <h1>Página Marvel</h1>} />
                    </Routes>

                    <PublicRoute>
                        <h1>Ruta pública (para no logueados)</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        //screen.debug()
        expect(screen.getByText('Página Marvel')).toBeTruthy()

    })
 }) 