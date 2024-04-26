import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'

describe('Pruebas en <AppRouter/>', () => { 

    test('Mostrará el login si no está autenticado', () => { 

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        screen.debug()
        expect( screen.getAllByText('Login').length ).toBe(2)


     })

     test('Mostrará el componente Marvel si sí está autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                id: '232',
                name: 'Lorenzo'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        screen.debug()
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1)


      })

 })