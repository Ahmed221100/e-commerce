

import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
  return (
    <>
    <footer className="bg-body-tertiary text-center position-fixed button-0">
  <div className="container p-4 pb-0">
    <section className>
      <form action>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form5Example26" className="form-control" />
              <label className="form-label" htmlFor="form5Example26">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button data-mdb-ripple-init type="submit" className="btn bg-main text-white mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2020 Copyright:
    <link className="text-body" href="https://mdbootstrap.com/" />a.saeedd2001@gmail.com
    &amp;&amp;AhmedSaeed2001
  </div>
</footer>

    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
