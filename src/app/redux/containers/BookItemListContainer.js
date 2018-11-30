// hook up the pieces of the state to the right components

import { connect } from 'react-redux'
import BookItemsList from '../../book-list/BookItemsList'

const mapDispatchToProps = dispatch => ({
  onClickAdd: book =>  false
})

export default connect(
  null,
  mapDispatchToProps
)(BookItemsList)