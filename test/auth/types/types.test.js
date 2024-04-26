import { types } from "../../../src/auth"

describe('Pruebas en "Types', () => {

    test('Debe regresar estos types', () => {

        //console.log(types)
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })

    })
 })