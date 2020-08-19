<template>
   <div class="samantha-title">
          <ul class="flex breadcrumb-samantha">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li>CandyShoot with Samantha Kiss</li>
                </ul>
          <h2>CANDYSHOOT MET SAMANTHA KISS</h2>
          <h2>INTRODUCTION</h2>
          <p>Readymade godard brooklyn, kogi shoreditch hashtag hella shaman kitsch man bun pinterest flexitarian. Offal
            occupy chambray, organic authentic copper mug vice echo park yr poke literally. Ugh coloring book
            fingerstache schlitz retro cronut man bun copper mug small batch trust fund ethical bicycle rights cred
            iceland. Celiac schlitz la croix 3 wolf moon butcher. Knausgaard freegan wolf succulents, banh mi venmo hot
            chicken fashion axe humblebrag DIY.</p>
          <br />
          <p>Waistcoat gluten-free cronut cred quinoa. Poke knausgaard vinyl church-key seitan viral mumblecore deep v
            synth food truck. Ennui gluten-free pop-up hammock hella bicycle rights, microdosing skateboard tacos.
            Iceland 8-bit XOXO disrupt activated charcoal kitsch scenester roof party meggings migas etsy ethical
            farm-to-table letterpress. Banjo wayfarers chartreuse taiyaki, stumptown prism 8-bit tote bag.</p>
          <h2>STORY</h2>
          <p>Listicle offal viral, flannel franzen roof party shoreditch meditation subway tile bicycle rights tbh
            fingerstache copper mug organic umami. Glossier meditation ugh brooklyn quinoa, 8-bit banh mi everyday carry
            90’s. Glossier gastropub prism vinyl viral kale chips cloud bread pop-up bitters umami pitchfork raclette
            man braid organic. Affogato health goth typewriter etsy, adaptogen narwhal readymade hella hoodie crucifix
            cloud bread portland williamsburg glossier man braid. Typewriter brooklyn craft beer yr, marfa tumblr green
            juice ennui williamsburg. Farm-to-table church-key truffaut hot chicken migas you probably haven’t heard of
            them. Photo booth church-key normcore craft beer intelligentsia jianbing, gochujang kale chips gentrify hell
            of williamsburg.</p>
          <h2>CONCLUSION</h2>
          <p>Venmo fixie knausgaard readymade. 3 wolf moon blue bottle sartorial blog. Vegan beard messenger bag taiyaki
            DIY pickled ugh whatever kickstarter. Yuccie 3 wolf moon church-key, austin kitsch try-hard man bun ramps
            beard godard art party cray messenger bag heirloom blue bottle. Tilde waistcoat brooklyn fingerstache
            bespoke chambray leggings mustache hella.</p>
          <div class="blog-form">
            <h3>GEEF EEN REACTIE</h3>
            <p>Het e-mailadres wordt niet gepubliceerd. Vereiste velden zijn gemarkeerd met *</p>
            <p>Reactie</p>
            <textarea name id cols="100" rows="10"></textarea>
          </div>
          <div class="flex">
            <div class="flex column information">
              <p>Your Name *</p>
              <input type="text" class="field" placeholder />
            </div>
            <div class="flex column information">
              <p>Your E-mail *</p>
              <input type="email" class="field" placeholder />
            </div>
            <div class="flexcolumn information">
              <p>Website *</p>
              <input type="text" class="field" placeholder />
            </div>
          </div>
          <div class="flex check">
            <input type="checkbox" id name value />
            <p>Mijn naam, e-mailadres en website bewaren in deze browser voor de volgende keer wanneer ik een reactie
              plaats.</p>
          </div>
          <button class="button">REACTIE PLAATSEN</button>
        </div>
</template>
<script>
export default {
    
}
</script>


<style>
  .left-content {
    width: 60%;
    margin-top: 90px;
    margin-right: 30px;
  }
  .breadcrumb-samantha{
    margin-top: 30px;
    color: black;
}
.breadcrumb-samantha li{
    margin: 0px;
    list-style: none;

}

.breadcrumb-samantha  li a{
    text-decoration: none;
    color:gray;
    margin-right: 5px;
}
.breadcrumb-samantha  li a:hover{
    text-decoration: none;
    color:gray;
    margin-right: 5px;
    text-decoration: underline;
}
ul.breadcrumb-samantha li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

  .samantha-title h2 {
    color: black;
    font-size: 200%;
    padding-left: 0px;
  }

  .samantha-title h3 {
    color: black;
    width: 100%;
    font-size: 200%;
    padding-left: 0;
  }

  .samantha-title h3::before {
    content: "";
    background: lightslategray;
    height: 1px;
    width: 100%;
    display: block;
    margin: 20px 0;
  }

  
</style>
    
