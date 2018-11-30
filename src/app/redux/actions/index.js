// react-inbox-solution API GET
// export const MESSAGES_REQUEST_STARTED = 'MESSAGES_REQUEST_STARTED'
export const UPDATE_BOOKS = 'UPDATE_BOOKS'
export const getBooks = () => {
  return async (dispatch) => {
    // dispatch({ type: MESSAGES_REQUEST_STARTED })
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/books`)
    const json = await response.json()
    dispatch({
      type: UPDATE_BOOKS,
      messages: json,
    })
  }
}