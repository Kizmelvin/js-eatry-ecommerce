

document.addEventListener('DOMContentLoaded', (event) => {
    // Add an event listener for when the user clicks the submit button to pay
    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        const PBFKey = "FLWPUBK-a37f2a10bc933f3bf2ae30307a2bc11c-X"; // paste in the public key from your dashboard here
        const txRef = ''+Math.floor((Math.random() * 1000000000) + 1); 
        const  amount = cartTotal.innerText;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        // console.log(cartTotal);

        getpaidSetup({
            PBFPubKey: PBFKey,
            amount: amount,
            customer_email:email,
            customer_phone: phone,
            currency: "NGN" ,
            txref: txRef,

            onclose: function() {},
            callback: function(response) {
                flw_ref = response.tx.flwRef;
                console.log("This is the response returned after a charge", response);
                if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0'){
                    //redirect to a success page
                }else{
                    //redirect to a failure page.
                }
                
            }
        })
    })         
    })