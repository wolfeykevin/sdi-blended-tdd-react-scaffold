import { render, screen } from '@testing-library/react';
import App from './App';
import MovieDetails from './MovieDetails'

describe('Unit Testing for Home Page', () =>{
  test('renders learn react link', () => {
    const app = render(<App />);
    const title = app.getByText('GMDB')
  })
  
  test('pictures must have src = "{movie.poster}"', () => {
    render(<App />);
    // const poster = 
    // const poster = screen.getByRole('img');
    // expect(poster).toHaveAttribute('src', {poster});
      // expect(logo).toHaveAttribute('alt', 'Logo');
    // const image = app.getByAltText('')
    // expect(images).toHaveLength(28);
  
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });
})
describe('Unit Testing for Movie Details Page', () => {
  test('test that header matches movie title', () => {
    const app = render(<MovieDetails isTesting={true} testingId={1}/>)



    const title = screen.findByText('Guardians of the Galaxy')
    // expect(title).toBeInTheDocument()
    expect(screen.getByText('metascore')).toBeInTheDocument()
    app.findByText('Guardians of the Galaxy')



  })
  test('another test', ()=>{
    const app = render(<MovieDetails isTesting={true} testingId={1}/>)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.queryByText('metascore')).toBeInTheDocument()
  })
})



// // mocking up a fake fetch function for testing purposes, currently only returns van gogh data
// let myFetch = (url) => {

//   let data;
//   // if the url includes 'artistOrCulture', we treat is as the first fetch for artist data
//   if (url.indexOf('artistOrCulture') !== -1) {
//     // make this fake data object
    
//     data =  {"total":1,"objectIDs":[459123]}    // one of Van Gogh's artwork pieces

//   } else {
//     // else we treat it as the second fetch for artwork data
//     data = {  // artwork information for that specified piece
//       "primaryImageSmall":"https://images.metmuseum.org/CRDImages/rl/web-large/DT3154.jpg",
//       "title":"Madame Roulin and Her Baby",
//       "artistDisplayName":"Vincent van Gogh",
//       "objectEndDate":1888,
//       "medium":"Oil on canvas",
//     }
//   }
  
//   // this fetch returns a promise which will eventually resolve to this data
//   return new Promise((resolve, reject) => resolve(data))
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // since artGenerator.js is not running in browser, we have to do the following:

// // create a global variable for the document object
// global.document = document

// // giving other files access to the fetch function we created..but only the files we have imported in here
// global.fetch = myFetch

// // importing click handler function which was exported from artGenerator.js
// const clickHandler = require('./artGenerator.js')
