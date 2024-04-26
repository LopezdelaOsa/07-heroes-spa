import { HeroCard } from './HeroCard'
import { getHeroesByPublisher } from '../helpers'
import { useMemo } from 'react'

export const HeroList = ( {publisher} ) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] ) // getHeroesByPublisher(publisher)

  return (
    
        <div className="row rows-cols-1 row-cols-md-3 g-3"> 
            {
                heroes.map( hero =>  (
                    <HeroCard
                        key={hero.id }
                        {...hero}
                    />
                    // /* <li key={hero.id}>
                      //  {hero.superhero}
                     //</li> */
                 ) )
            }
        </div>
    
  )
}
