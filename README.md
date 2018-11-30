# React Bookstore using API calls

### Run
`npm install`

`npm start`

### Steps for setting up db and API calls
> Note: Object.assign: spread defines new properties, while Object.assign() sets them


### Data Model:

  |Column Name| Data Type|
  |-----------|----------|
  |id	        |SERIAL    |
  |title	    |   STRING |
  | author	  |STRING    |
  |pages	    |  STRING  |
  | inCart    |	BOOLEAN  |
 

 ### User Stories
 This application must meet the following user stories:

Customer:

 __GET__:
 As a customer, when I arrive to the home page, I see a list of all of the books, a search bar on top, and a checkout/cart area to the right.

 __Filter__: As a customer, I am able to filter the list of books by title or author.
 [Filter CodePen](https://codepen.io/mtclmn/pen/QyPVJp)

 __AddToCart__: As a customer, I am able to add a book to the cart by clicking the "Add to cart" button.

 __TotalPrice__: As a customer, when I add a book to the cart, I should see the total dollar amount be updated to reflect all of the books in the cart




