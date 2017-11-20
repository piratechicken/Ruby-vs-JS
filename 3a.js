function displayMovie(movie) {
  let title = movie.title
  let year = movie.yearReleased
  let stars = movie.stars.map((star) => {
    return `${star.firstName} ${star.lastName}`
  }
)

  console.log(`Title: ${title}`)
  console.log(`Year released: ${year}`)
  console.log(`Stars: ${stars.join(', ')}`)
}

forestGump = {
  title: 'Forest Gump',
  yearReleased: 1994,
  stars: ['Tom Hanks', 'Robin Wright']
}

backToTheFuture = {
  title: 'Back to the Future',
  yearReleased: 1985,
  stars: ['Michael J. Fox', 'Christopher Lloyd']
}

samNeil = {
  firstName: 'Sam',
  lastName: 'Neil'
}
richardAttenborough = {
  firstName: 'Richard',
  lastName: 'Attenborough'
}

jurassicPark = {
  title: 'Jurrasic Park',
  yearReleased: 1992,
  stars: [samNeil, richardAttenborough]
}

displayMovie(jurassicPark)

/*
Challenges:
1. Add another three movies
2. Add a property for director to each movie, and display it
3. Convert people from being strings (`Tom Hanks`) to objects (with e.g. first & last name)
*/