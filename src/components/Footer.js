import React from 'react'

function Footer() {
  return (
    <footer className="text-center copyright">
        <div className="text-center">
            <p>copyright &copy; 2023</p>
            <i className="fa fa-facebook-square" style={{"font-size":"20px"}} title='Facebook'></i>
            <i className="fa fa-youtube-square" style={{"font-size":"20px"}} title='YouTube'></i>
            <i className="fa fa-linkedin-square" style={{"font-size":"20px"}} title='LinkedIn'></i>
            <i className="fa fa-twitter-square" style={{"font-size":"20px"}} title='Twitter'></i>
        </div>
    </footer>
  )
}

export default Footer