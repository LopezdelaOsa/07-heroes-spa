
import { useLocation, useNavigate } from 'react-router-dom'
import { HeroCard} from '../components'
import { useForm } from '../hooks/useForm'
import queryString from 'query-string' // yarn add query-string
import { getHeroByName } from '../helpers'

export const SearchPage = () => {

  const navegar = useNavigate()
  const localizacion = useLocation()
  //console.log(localizacion)
  const {q = ''} = queryString.parse(location.search)
  //console.log(query)
  const heroes = getHeroByName(q)

  const muestraBusqueda = (q.length === 0)
  const muestraError = (q.length > 0) && heroes.length === 0

  const {textoBusqueda, onInputChange } = useForm({
    textoBusqueda: q
  })

  const onEnviarBusqueda = (event) => {
    event.preventDefault()
    //if ( textoBusqueda.trim().length <= 1 ) return

    navegar(`?q=${textoBusqueda}`)

  }

    return (
      <>
        <h1>Búsquedas...</h1>
        <hr/>

        <div className="row">
          <div className="col-5">
            <h4>Buscando</h4>
            <hr/>
            <form onSubmit={onEnviarBusqueda}>
              <input type="text" placeholder="Buscar un héroe" className="form-control" autoComplete="off"
                name="textoBusqueda"
                value={textoBusqueda}
                onChange={onInputChange}
              />
              <button className="btn btn-outline-primary mt-1">
                Buscar
              </button>


            </form>
          </div>

          <div className="col-7">
          <h4>Resultados</h4>
          <hr/>
            {/* {
              ( q === '' ) 
              ? <div className="alert alert-primary">Héroes...</div>
              : (heroes.length === 0) && <div className="alert alert-danger">No hay coincidencias con <b>{ q }</b></div>
            } */}
            <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: muestraBusqueda ? '' : 'none' }}>
              Héroes...
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: muestraError ? '' : 'none' }}>
              No hay coincidencias con <b>{ q }</b>
            </div>

            {/* <HeroCard {...hero} /> */}
            {
              heroes.map (hero => (
                <HeroCard key={ hero.id } {...hero} />
              ))
            }

          </div>

        </div>



      </>
      
    )
  }