<template>
  <div>
    <div class="flex align-hor samantha-main">
      <div class="left-content">
        <div class="samantha-title">
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
      </div>
      <div class="right-content">
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
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>


<style>
.left-content {
  width: 60%;
  margin-top: 90px;
  margin-right: 30px;
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