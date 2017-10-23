getJSON(
    `https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime`,
    function(data) {


        console.log(data);
        
        var results = document.querySelector(".results");
        var tempStr = "";
       


        data.forEach( function(i) {
            var contactInfow = i.contactInfo;
            var phone = contactInfow.replace("Tel.:", "");

           

          
           tempStr += '<div class="parking">'
                tempStr += '<div class="upper">'
                    tempStr += `<h2> ${i.description} </h1>`
                tempStr += '</div>'                
                tempStr += '<div class="lower">'
                    tempStr += `<a href="https://www.google.com/maps/?q=${i.latitude},${i.longitude}"><p class="adress"> <i class="zmdi zmdi-pin">  </i> ${i.address} </p></a>`
                    tempStr += `<a href="tel:${phone}"><p> <i class="zmdi zmdi-phone"></i></i> ${i.contactInfo} </p></a>`
                    tempStr += `<div class="capacity">`
                         tempStr += `<p>Total Capacity: ${i.parkingStatus.totalCapacity} places </p>`
           tempStr += '</div>'



           var totalCapacity = i.parkingStatus.totalCapacity;
           console.log(totalCapacity);

           var available = i.parkingStatus.availableCapacity;
           // console.log(available);

           var vrijPercentage = available/totalCapacity*100;
           // console.log(bezetPercentage);

           console.log(`vrije Percentage = ${vrijPercentage}%`);

           if (vrijPercentage > 50) {
                 tempStr += `<p class="green">Available Capacity: ${i.parkingStatus.availableCapacity} places </p>`
                    tempStr += `</div>`
                tempStr += `</div>`

           }
            else if (vrijPercentage >= 20 && vrijPercentage <=50) {
                tempStr += `<p class="orange">Available Capacity: ${i.parkingStatus.availableCapacity} places </p>`
                    tempStr += `</div>`
                tempStr += `</div>`
            }
            else{
                 tempStr += `<p class="red">Available Capacity: ${i.parkingStatus.availableCapacity} places </p>`
                    tempStr += `</div>`
                tempStr += `</div>`
            }

        });

        results.innerHTML = tempStr;
    },
    function(error) {
        console.log(error);
    }
);

