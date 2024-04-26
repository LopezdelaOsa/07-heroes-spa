// import { authReducer } from "../../../src/auth/context/authReducer"
// import { types } from "../../../src/auth/types/types"
import { authReducer, types } from "../../../src/auth"


describe('Pruebas en authReducer', () => {

    test ('Debe devolver el estado por defecto', () => {

        const state = authReducer({ logged: false}, {} )

        expect (state).toEqual({ logged: false })

    })

    test ('Debe de (login) llamar el login autenticar y establecer el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action)

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
        
    })

    test ('Debe de (logout) borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: {id: '123', name: 'Juan'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action)
        console.log(newState)

        expect (newState).toEqual({logged: false})
        
    })
})