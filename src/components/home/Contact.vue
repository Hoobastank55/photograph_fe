<template>
    
        <div class="flex align-ver align-hor contact">
                            <div class=" flex column contact-content">
                                <h1>STUUR MIJ EEN BERICHT</h1>
                                <p>Hartstikke leuk als je vragen of ideeën voor mij hebt.</br>
                                Wil je weten wat er mogelijk is,</br>
                                Heb jij een te gek leuk idee in je hoofd voor een shoot,</br>
                                of wil je meer informatie over mijn tarieven,</br>
                                of…. zomaar een vraag over fotografie ?</br>
                                    mARTijn</p></br>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>VENLO, NEDERLAND</p>

                                    <h2>CONTACT GEGEVENS</h2>
                                    <p><i class="fa fa-phone" aria-hidden="true"></i>+31(0) 6 10 10 11 58</br>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>INFO@MARTIJNPHOTOGRAPHY.NL</p>

                            </div>
                            <div class="flex align-hor alig-ver  contact-form">
                                <div class="flex column contact-form-content">
                                    <p>Your Name</p>
                                    <input type="text" class="field" placeholder="Your Name">
                                    <p>Your E-mail</p>
                                    <input type="email" class="field" placeholder="Your E-mail">
                                    <p>Your Message</p>
                                    <textarea name="" id="" cols="10" rows="3"></textarea>
                                    <button>Send</button>
                                   

                                </div>
                                   
                                    

                            </div>
                        </div>
        
    
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
.contact{
    height: 100vh;
}
.contact-content{
    margin-right: 20px;
}
.contact-content h1{
    color: black;
    font-size: 250%;
    margin: 10px;
}
.contact-content h2{
    color: black;
    padding-left: 0;
    padding:  30px 0;
    font-size: 150%;
}
.contact-content h1::after{
    content: '';
    background: red;
    height: 2px;
    width: 60px;
    display: block;
}
.contact-content i{
    color:red;
    font-size: 150%;
    padding-right: 20px;
}
.contact-content p{
    line-height: 25px;
    margin: 5px;
    
}
.contact-content p:nth-of-type(2){
line-height: 30px;
    margin: 5px;
    font-size: 110%;
}
.contact-content p:nth-of-type(3){
line-height: 40px;
    margin: 5px;
    font-size: 130%;
}
.contact-form{
    
    border: 2px white;
    background-color: black;
    color: white;
    text-align: left;
    padding: 50px;
    width: 40%;
}
.contact-form button{
    background-color: black;
    color: white;
    font-size: 150%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px 20px;
    margin-top: 20px;
    width: 100px;
}
.contact-form-content{
    width: 80%;
}

.contact-form-content p{
    padding: 10px 0 10px 0;
    
}
.field{
    padding: 10px;
}


</style>

