
import {gql} from '@apollo/client'

export default class Queries{
    static GET_POKEMONS = gql`
      query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          results {
            id
            name
            image
          }
        }
      }
    `;

    static GET_POKEMON_DETAIL = gql`
        query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                back_default
                front_default
            }
            stats {
                base_stat
                stat {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
            moves {
                move {
                    name
                }
            }
        }
    }
`
}