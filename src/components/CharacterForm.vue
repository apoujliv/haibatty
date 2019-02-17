<template>
<section id="character-section" class="about-section text-center">
  <div class="container">
    <div class="character">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1>
            <clickToEdit :value="character.name"></clickToEdit>
          </h1>
          <h2>
            <clickToEdit :value="character.highConcept"></clickToEdit>
          </h2>
          <img :src="character.imgUrl" alt="character image" style="max-height:250px;max-width:250px;height:auto;width:auto;">
        </div>
        <div class="col-md-6 mx-auto">
          <h2>Aspects</h2>
          <h3>Trouble</h3>
          <clickToEdit :value="character.trouble"></clickToEdit>
          <h3>Aspects</h3>
          <clickToEdit v-for="aspect in character.aspects" :value="aspect.name" isDisabled></clickToEdit>
          <form v-on:submit.prevent="addAspect">
            <input v-model="newAspect.name" isDisabled></input>
            <button>Add New Aspect</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h2>Stunts and Powers</h2>
          <div v-for="stuntPower in character.stuntsAndPowers">
            <clickToEdit :value="stuntPower.name"></clickToEdit>
            <clickToEdit :value="stuntPower.description"></clickToEdit>
          </div>
          <form v-on:submit.prevent="addStuntPower">
            <input v-model="newStuntPower.name"></input>
            <input v-model="newStuntPower.description"></input>
            <button>Add New Stunt or Power</button>
          </form>
        </div>
        <div class="col-md-6 mx-auto">
          <h2>Skills</h2>
          <clickToEdit v-for="skill in character.skills" :value="skill.name"></clickToEdit>
          <form v-on:submit.prevent="addSkill">
            <input v-model="newSkill.name"></input>
            <button>Add New Skill</button>
          </form>
        </div>
      </div>
    </div>
    <button>Save</button>
  </div>
</section>
</template>

<script>
export default {
  methods: {
    addAspect() {
      this.character.aspects.push({
        name: this.newAspect.name
      });
    },
    addStuntPower() {
      this.character.stuntsAndPowers.push({
        name: this.newStuntPower.name,
        description: this.newStuntPower.description
      });
    },
    addSkill() {
      this.character.skills.push({
        name: this.newSkill.name
      });
    }
  },
  props: {
    newAspect: {
      type: Object,
      required: false,
      default: () => ({
        "name": ""
      })
    },
    newStuntPower: {
      type: Object,
      required: false,
      default: () => ({
        "name": "",
        "description": ""
      })
    },
    newSkill: {
      type: Object,
      required: false,
      default: () => ({
        "name": ""
      })
    },
    // type, required and default are optional, you can reduce it to 'options: Object'
    character: {
      type: Object,
      required: false,
      default: () => ({
        "name": "Bob Swineagain",
        "highConcept": "Old Knight of the Old Republic",
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
          name: 'Whack Things Real Hard'
        }],
        "stuntsAndPowers": [{
          name: 'I\'ll Just Ignore You.',
          description: 'Counterarguments are a waste of time. You prefer to simply not listen to the people you disagree with. You may use Will instead of Rapport to defend against attempts to damage your reputation or make you look bad in front of others.'
        }]
      })
    },
  },
  data() {
    return {}
  }
}
</script>
