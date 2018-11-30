// hook up the pieces of the state to the right components

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import BookList from '../../book-list/BookList'


const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)