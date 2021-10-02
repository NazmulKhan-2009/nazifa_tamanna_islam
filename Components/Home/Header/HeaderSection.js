import React from 'react';
import styles from '../../../styles/HeaderSection.module.css'

export default function HeaderSection() {


 return (
  <section className="" id="home">
    
      <div className="container pt-5">
        <div id="button">
        
        <div className="row">
          <div className={`col-md-10 mr-auto  my-auto ${styles.get_appoint}`}>           
              <h3>Lorem ipsum dolor sit amet.</h3>
              <button className={styles.appointment_btn} >Get Appointment</button>
        
          </div>
        </div>
        
        </div>
      </div>
    </section>
 )
}
