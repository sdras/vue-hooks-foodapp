import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    food: [
      {
        name: "appetizer", desc: "Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.", tags: ["starters", "cafe", "pairings"]
      },
      {
        name: "avocado", desc: "Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.", tags: ["salad", "cafe", "lunch"]
      },
      {
        name: "berries", desc: "Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.", tags: ["breakfast", "cafe", "healthy"]
      },
      {
        name: "bowl", desc: "Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.", tags: ["lunch", "cafe", "healthy"]
      },
      {
        name: "breakfast", desc: "Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.", tags: ["pancakes", "cafe", "fruit"]
      },
      {
        name: "burger2", desc: "Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.", tags: ["takeout", "sides", "meat"]
      },
      {
        name: "corn", desc: "Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.", tags: ["dinner", "woodfire", "healthy"]
      },
      {
        name: "dumpling", desc: "Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.", tags: ["dinner", "chinese", "soup"]
      },
      {
        name: "egg2", desc: "Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.", tags: ["starters", "cafe", "pairings"]
      },
      {
        name: "fig", desc: "Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.", tags: ["salad", "cafe", "lunch"]
      },
      {
        name: "fries", desc: "Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.", tags: ["breakfast", "cafe", "healthy"]
      },
      {
        name: "oyster", desc: "Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.", tags: ["lunch", "cafe", "healthy"]
      },
      {
        name: "pancake", desc: "Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.", tags: ["pancakes", "cafe", "fruit"]
      },
      {
        name: "pasta", desc: "Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.", tags: ["takeout", "sides", "meat"]
      },
      {
        name: "pasta2", desc: "Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.", tags: ["dinner", "woodfire", "healthy"]
      },
      {
        name: "pizza", desc: "Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.", tags: ["dinner", "chinese", "soup"]
      },
      {
        name: "plates", desc: "Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.", tags: ["starters", "cafe", "pairings"]
      },
      {
        name: "popcicle", desc: "Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.", tags: ["salad", "cafe", "lunch"]
      },
      {
        name: "salmon", desc: "Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.", tags: ["breakfast", "cafe", "healthy"]
      },
      {
        name: "soup", desc: "Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.", tags: ["lunch", "cafe", "healthy"]
      },
      {
        name: "steak", desc: "Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.", tags: ["pancakes", "cafe", "fruit"]
      },
      {
        name: "steamed", desc: "Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.", tags: ["takeout", "sides", "meat"]
      },
      {
        name: "toast", desc: "Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.", tags: ["dinner", "woodfire", "healthy"]
      },
      {
        name: "tomato", desc: "Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.", tags: ["dinner", "chinese", "soup"]
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
