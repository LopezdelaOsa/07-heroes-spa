import {fireEvent, render, screen} from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import {AuthContext} from '../../../src/auth/context/AuthContext'
import {Navbar} from '../../../src/ui/components/NavBar'

const mockedUseNAvigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNAvigate
}) )

describe('Pruebas en <NavBar/>', () => { 

    const contextValue = {
        logged: true,
        user: {
            nameU: 'Federico'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() )

    test('Debe mostar el nonmbre del usuario logueado', () => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Federico')).toBeTruthy()
        //screen.debug()
    })



    test('Debe llamar logout y navigate cuando se hace click en el botón de salir', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)
        
        expect(contextValue.logout).toHaveBeenCalled()
        expect (mockedUseNAvigate).toHaveBeenCalledWith('/login', {"replace": true})

     })

 })