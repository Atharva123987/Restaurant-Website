const Location = () =>{
    return(
        <>
        
       <div id='location-container' className='container'>

      
  	
  	<h2>Location</h2>

  		<div className='contents'>

  		<div class="boxes">
         
  			<h3>Easy to Find</h3>
          
  			<p class="bodyText">Our restaurant is located at the hub of the city of Dublin. Ireland. It is located in Ranelagh near from the Stanford Park School.</p>
  			
  		</div>
  		
  		<div class="boxes">

  			<h3>Address</h3>
          
  			<p class="bodyText">4 Sandford Rd, Ranelagh, Dublin, D06 E201, Ireland.</p>
  			
  		</div>
  		
  		<div class="boxes">
          
  			<h3>Transport</h3>
           
  			<p class="bodyText">The nearest train station is the Connolly Station, Dublin Docklands, Dublin 1 and the nearest tram stop is the Ranelagh tram stop</p>
  		
  		</div>
  		
          
  	</div>
      <div class="maps">
  	<iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191.4544496398034!2d-6.25874528988161!3d53.326984451051146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670ea6802e6a11%3A0x3d836a6eef8dc6bd!2sRanelagh%2C+Co.+Dublin!5e0!3m2!1sen!2sie!4v14797380674" allowfullscreen></iframe>
  	</div>
      </div>
        </>
    )
}
export default Location;