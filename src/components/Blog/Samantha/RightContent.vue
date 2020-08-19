<template>
<div>
     <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
        <h4>Meest recente berichten</h4>
        <router-link to="/blog/samantha">CANDYSHOOT WITH SAMANTHA KISS</router-link>
        <h4>Recente reacties</h4>
        <br />
        <h4>Archief</h4>
        <br />
        <h4>Categorieën</h4>
        <br />
        <h4>Meta</h4>
        <br />    
        </div>  
</template>
<script>
export default {
    
}
</script>
<style>
   
 

  .right-content {
    width: 20%;
    border-left: 1px solid lightslategray;
    margin-top: 90px;
  }

  .right-content input[type="text"] {
    margin: 20px 0 20px 20px;
  }

  .right-content h4 {
    font-size: 130%;
    margin: 20px;
  }

  .right-content a {
    text-decoration: none;
    margin: 20px 0 20px 20px;
    color: red;
    font-size: 90%;
  }

  .right-content a:hover {
    text-decoration: underline;
  }

  .blog-form p {
    margin: 20px 0;
  }

  .information {
    margin-right: 30px;
  }

  .information p {
    margin: 10px 0;
  }

  .check {
    margin: 50px 0;
  }

  .check p {
    padding-left: 5px;
  }

  .button {
    float: right;
    height: 50px;
    font-size: 90%;
    margin: 20px 30px 60px;
    width: 170px;
  }
</style>
