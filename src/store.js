import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    food: [
      {
        name: "appetizer",
        restaurant: "The Chopping Tulip",
        desc: "Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.", tags: ["starters", "cafe", "pairings"]
      },
      {
        name: "avocado",
        restaurant: "The Boiling Tripe",
        desc: "Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.", tags: ["salad", "cafe", "lunch"]
      },
      {
        name: "berries",
        restaurant: "l'Origine",
        desc: "Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.", tags: ["breakfast", "cafe", "healthy"]
      },
      {
        name: "bowl",
        restaurant: "The Cane",
        desc: "Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.", tags: ["lunch", "cafe", "healthy"]
      },
      {
        name: "breakfast",
        restaurant: "la Salle du Nord",
        desc: "Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.", tags: ["pancakes", "cafe", "fruit"]
      },
      {
        name: "burger2",
        restaurant: "Limestone",
        desc: "Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.", tags: ["takeout", "sides", "meat"]
      },
      {
        name: "corn",
        restaurant: "Saffron",
        desc: "Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.", tags: ["dinner", "woodfire", "healthy"]
      },
      {
        name: "dumpling",
        restaurant: "Little China",
        desc: "Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.", tags: ["dinner", "chinese", "soup"]
      },
      {
        name: "egg2",
        restaurant: "Roadhouse",
        desc: "Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.", tags: ["starters", "cafe", "pairings"]
      },
      {
        name: "fig",
        restaurant: "le Fleur Frais",
        desc: "Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.", tags: ["salad", "cafe", "lunch"]
      },
      {
        name: "fries",
        restaurant: "The Violet Diner",
        desc: "Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.", tags: ["breakfast", "cafe", "healthy"]
      },
      {
        name: "oyster",
        restaurant: "le Jardin",
        desc: "Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.", tags: ["lunch", "cafe", "healthy"]
      },
      {
        name: "pancake",
        restaurant: "The Locket",
        desc: "Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.", tags: ["pancakes", "cafe", "fruit"]
      },
      {
        name: "pasta",
        restaurant: "Vagabonds",
        desc: "Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.", tags: ["takeout", "sides", "meat"]
      },
      {
        name: "pasta2",
        restaurant: "Basil",
        desc: "Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.", tags: ["dinner", "woodfire", "healthy"]
      },
      {
        name: "pizza",
        restaurant: "The Parlour",
        desc: "Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.", tags: ["dinner", "chinese", "soup"]
      },
      {
        name: "plates",
        restaurant: "Trilogy",
        desc: "Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.", tags: ["starters", "cafe", "pairings"]
      },
      {
        name: "popcicle",
        restaurant: "Paragon",
        desc: "Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.", tags: ["salad", "cafe", "lunch"]
      },
      {
        name: "salmon",
        restaurant: "The Urban Shark",
        desc: "Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.", tags: ["breakfast", "cafe", "healthy"]
      },
      {
        name: "soup",
        restaurant: "The Glass Pantry",
        desc: "Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.", tags: ["lunch", "cafe", "healthy"]
      },
      {
        name: "steak",
        restaurant: "Castle",
        desc: "Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.", tags: ["pancakes", "cafe", "fruit"]
      },
      {
        name: "steamed",
        restaurant: "Ambience",
        desc: "Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.", tags: ["takeout", "sides", "meat"]
      },
      {
        name: "toast",
        restaurant: "The Village Cow",
        desc: "Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.", tags: ["dinner", "woodfire", "healthy"]
      },
      {
        name: "tomato",
        restaurant: "French Street Kitchen",
        desc: "Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.", tags: ["dinner", "chinese", "soup"]
      },
    ],
    activities: [
      {
        title: "City Zoo",
        date: "August 3",
        profile: "profile1.jpg",
        post: "If you do too much it's going to lose its effectiveness. You can just push a little tree out of your brush like that. Maybe there's a happy little waterfall happening over here. This present moment is perfect simply due to the fact you're experiencing it."
      },
      {
        title: "Painting Classes",
        date: "September 25",
        profile: "profile2.jpg",
        post: "That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. You can't have light without dark. You can't know happiness unless you've known sorrow. This is the way you take out your flustrations. There are no mistakes. You can fix anything that happens."
      },
      {
        title: "Playground",
        date: "April 15",
        profile: "profile3.jpg",
        post: "Clouds are free. They just float around the sky all day and have fun. Let's put some happy trees and bushes back in here. It's life. It's interesting. It's fun. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. I want everbody to be happy. That's what it's all about. Let's do that again."
      },
      {
        title: "Steamboat Casino",
        date: "April 30",
        profile: "profile4.jpg",
        post: "This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. There he comes. When things happen - enjoy them. They're little gifts. Talk to trees, look at the birds."
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
