<template>
<section id="hello-section" class="about-section text-center">
  <div>
    <section>
      <p>Welcome to haibatty.</p>
    </section>
    <section>
      <div v-for="campaign in campaigns">
        <div class="row">
          <h3 class="my-4">
            Campaign: {{campaign.name}}<br />
          </h3>
        </div>
          <div>
            <characterList :characters="campaign.characters"></characterList>
          </div>
        </div>
        <form v-on:submit.prevent="addCampaign">
          <input v-model="newCampaign.name"></input>
          <button>Add New Campaign</button>
        </form>
    </section>
  </div>

  </div>
</section>
</template>

<script>
import PowerLevels from './PowerLevels.js'
export default {
  name: 'Home',
  methods: {
    addCampaign() {
      this.campaigns.push({
        name: this.newCampaign.name,
        characters: []
      });
      this.newAspect.name = null;
    }
  },
  props: {
    newCampaign: {
      type: Object,
      required: false,
      default: () => ({
        "name": ""
      })
    },
    msg: String,
    campaigns: {
      type: Array,
      required: false,
      default: () => ([{
        name: "Something Wicked This Way Comes",
        characters: [{
            "name": "Bob Swineagain",
            "highConcept": "Old Knight of the Old Republic",
            "powerLevel": PowerLevels.FeetInTheWater,
            "trouble": "Eats too much",
            "imgUrl": "https://c1.staticflickr.com/1/159/417827922_4998f4e61d_z.jpg?zz=1",
            "aspects": [{
                name: 'A Chest Full of Diamonds'
              },
              {
                name: 'Tall, Dark, and Ugly'
              },
              {
                name: 'Class Clown'
              },
              {
                name: 'Devilishly Witty'
              },
              {
                name: 'Friend to Fiends'
              },
              {
                name: 'My Mothers Frozen Heart'
              },
              {
                name: 'Wicked Cool Broomstick'
              }
            ],
            "skills": [{
              name: 'Whack Things Real Hard',
              rating: '0'
            }],
            "stuntsAndPowers": [{
              name: 'I\'ll Just Ignore You.',
              description: 'Counterarguments are a waste of time. You prefer to simply not listen to the people you disagree with. You may use Will instead of Rapport to defend against attempts to damage your reputation or make you look bad in front of others.',
              refresh: "1"
            }]
          },
          {
            "name": "Sarah Moors",
            "highConcept": "Wizard of the Coast",
            "powerLevel": PowerLevels.FeetInTheWater,
            "trouble": "Rampant Paranoia",
            "imgUrl": "https://i.pinimg.com/236x/77/a7/a3/77a7a38877cb05374c9c48a31a0631f8--hair-models-face-reference.jpg",
            "aspects": [{
                name: 'My lucky, trusty stick'
              },
              {
                name: 'Friend to all God\'s creatures'
              },
              {
                name: 'Sticks and Stones Won\'t Break MY Bones'
              },
              {
                name: 'Agoraphobic'
              },
              {
                name: 'Germs are everywhere'
              }
            ],
            "skills": [{
              name: 'Whack Things Real Hard',
              rating: '0'
            }],
            "stuntsAndPowers": [{
              name: 'Danger Sense.',
              description: 'You have an almost preternatural capacity for detecting danger. Your Notice skill works unimpeded by conditions like total concealment, darkness, or other sensory impairments in situations where someone or something intends to harm you.',
              refresh: "1"
            }]
          },
          {
            "name": "Trillian Meowertins",
            "highConcept": "Free Real Estate Agent",
            "powerLevel": PowerLevels.FeetInTheWater,
            "trouble": "Human Contact At All Times",
            "imgUrl": "https://images-ra.adoptapet.com/seo/2/ff/1136_ff.jpg",
            "aspects": [{
                name: 'Thwapy Tail'
              },
              {
                name: 'Good Meowing Voice'
              },
              {
                name: 'Sleep All Day, Zoom All Night'
              },
              {
                name: 'Monster Truck'
              },
              {
                name: 'Pet Me'
              }
            ],
            "skills": [{
              name: 'Whack Things Real Hard',
              rating: '0'
            }],
            "stuntsAndPowers": [{
              name: 'Proximity Alert',
              description: '+2 to noticing when someone is close to you.',
              refresh: "1"
            }]
          }
        ]
      }])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
