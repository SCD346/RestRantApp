// const React = require('react')
// const Def = require('./default')

// // function error404() {}

// //error404 function. Uses the Def component that we created in the default.jsx file as a wrapper, then put a little bit of stub 404 page code inside it
// function error404() {
//   return (
//     <Def>
//       <main>
//         <h1>404: PAGE NOT FOUND</h1>
//         <p>Oops, sorry, we can't find this page!</p>
//       </main>
//     </Def>
//   )
// }

// module.exports = error404

const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <Def>
      <main>
        <h1>404: Page not found</h1>
        <p>Oops, sorry we can't find this page!</p>
        <img
          src="http://placekitten.com/500/500"
          alt="Cat that is very sorry he can't find your page"
        />
      </main>
    </Def>
  )
}

module.exports = error404
