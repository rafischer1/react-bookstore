import { UPDATE_BOOKS } from '../actions/index'
const books = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_BOOKS':
      return [...action.payload]
    default:
      return state
  }
}

export default books