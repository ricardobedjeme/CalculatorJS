// Apprentissage sur les tableaux javascript map reduce filter spread et rest operator
const bookList = [
    {title: 'The Hobbit', pageCount: 184, releaseDate: '1937'},
    {title: 'The Two Towers', pageCount: 294, releaseDate: '1954'},
    {title: 'The Return of the King', pageCount: 347, releaseDate: '1955'},
    {title: 'The Slimarillion', pageCount: 411, releaseDate: '1977'} 
  ] 

  const author = {firstname: 'JRR', lastname:'Tolkien'} 

  // Créer une nouvelle version d'un tableau en affichent uniquement les titres des livres
  const bookTitleList = bookList.map(book => book.title)
  console.log(bookTitleList) 

  // Créer une nouvelle version d'un tableau en affichent uniquement les titres des livres et les releaseDate
  const bookTitleListandrelease = bookList.map(book => book.title && book.releaseDate)
  console.log(bookTitleListandrelease)
  
   // Créer une nouvelle version d'un tableau en affichent uniquement les titres des livres et les pageCount
  const bookInfo = bookList.map(book => (
    `${book.title}, ${book.pageCount}`)) 
  console.log(bookInfo)

// Filtrer certaines propriétés d'un tableau d'objets
    // Les livres sorties avant 1970 
    const bookBefore1970 = bookList.filter(book=> book.releaseDate<1970)
    console.log(bookBefore1970)
    // Les livres sorties avant 1970 et ayant moins de 300 pages
    const bookBefore = bookList.filter(book => ( book.releaseDate<1970, book.pageCount<300 ))
    console.log(bookBefore)
    
    // additionner certaines proprietés des elements d'un tableau 
    const pageCount = bookList.reduce((sum,page) => (sum + page.pageCount), 0) 
    console.log(pageCount) 

    

// Spread Operator Fonction fléchée 
    const info =  bookList.map(book => ({...author, ...book})) 
    console.log(info)

  