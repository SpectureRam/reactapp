// import React from 'react'

// function Home() {
//   return (
//     <section className='hero'>
//       <h1>Home</h1>
//     </section>

//   )
// }

// export default Home
import React from "react";
import { Link } from "react-router-dom";
import './style/home.css'

function Home(){
  return (
   <div className="main">
    <div className="p1">
        <h1>Welcome To M4U</h1>
    </div>
    <div className="p2">
        <h3>Find Your Next Book</h3>
    </div>

    <div className="p3">
 <h5>
 <span className="word"></span>
                    <div className="message">
                        <div className="word1">“If you don’t like to read, you haven’t found the right book.” — J.K. Rowling</div>
                        <div className="word2">“Classic’ – a book which people praise and don’t read.”</div>
                        <div className="word3">“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</div>

                    </div>
                </h5>
    </div>

   <div className="btn-reg">
     
   <Link to="/register"><button>Register</button></Link>
   <Link to="/login"><button>Login</button></Link>
       
   </div>

   </div>
  )
}

export default Home;