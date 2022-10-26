import React from "react";
import '../bootstrap.min.css'
import '../Pages/HelloThere.css'
import pic from '../images/image001.png'


function HelloThere() {
  return (
      <div className="container">
          <br/>
          <h4 className="alert-heading">Warning :) this page is full of toxic comments. </h4>
          <br/>
          <div className="mb-0">
              <p>
                  What’s the most terrifying word in GPA testing?
              </p>

               <p> <b>Oops</b></p>
              <p>
                  Who will be next? Do u want to place your bet? If yes, please register yourself.
              </p>

            </div>

          <div className='image'>
              <img src={pic} class="img-fluid" alt="Meme"/>
          </div>

      </div>


  );
}

export default HelloThere;
