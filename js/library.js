var LibraryBook = function ( title1 = "Название книги", year1 = "Год издания", author1 = "Автор" ) {
  var title = title1
	var year = year1
	var author = author1
	var readerName  = null
	var readerData  = null
	function giveTheBook (client, data = new Date() ) {
    readerName = client
    readerData = data
  }
  this.getBookInfo = function () {
   	var info = readerName ? "Отсутствует" : "В наличии"
   	  console.log (`${title}, ${year}, ${author}, ${info}`)
    }
 	this.getTheBook = function (client, data) {
    if ( readerName ) {
      this.getBookInfo ()
      return null
    } 
    else {  
      giveTheBook ( client, data )
      return {
        title: title,
        year: year,
        author: author
      }
    }
	} 
  this.returnBook = function () {
    readerName = null
    readerData = null
  }  
}

var book = []
book [0] = new LibraryBook ( "Старик и море", "1952", "Эрнест Хемингуэй")
book [1] = new LibraryBook ( "Мастер и Маргарита", "1967", "Михаил Булгаков")
book [2] = new LibraryBook ( "Алхимик", "1988", "Пауло Коэльо")
book [2].getTheBook( "Bodnar Mikl", new Date)
book [2].getBookInfo()
book [2].returnBook()
book [2].getBookInfo()
