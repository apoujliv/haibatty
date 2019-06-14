<template>
<section id="character-section" class="about-section text-center">
  <div>
    <div class="character">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <h2>
            <clickToEdit :value="editedCharacter.name" placeholder="FirstName LastName"></clickToEdit>
          </h2>
          <h3>
            <clickToEdit :value="editedCharacter.highConcept" placeholder="High Concept"></clickToEdit>
          </h3>
          <img :src="editedCharacter.imgUrl" alt="character image" style="max-height:250px;max-width:250px;height:auto;width:auto;padding:5px">
          <form v-on:submit.prevent="updateImage">
            <input v-model="newImgUrl.url"></input>
            <button class="btn btn-primary">Update Image URL</button>
          </form>
        </div>
        <div class="col-md-8 mx-auto">
          <h3>Power Level: {{editedCharacter.powerLevel.name}}</h3>
          <h3>Aspects</h3>
          <h4>Trouble</h4>
          <clickToEdit :value="editedCharacter.trouble" placeholder="Trouble"></clickToEdit>
          <h4>Aspects</h4>
          <clickToEdit v-for="aspect in editedCharacter.aspects" :value="aspect.name" placeholder="Aspect"></clickToEdit>
          <form v-on:submit.prevent="addAspect">
            <input v-model="newAspect.name"></input>
            <button class="btn btn-primary">Add New Aspect</button>
          </form>
          <h3>Stunts and Powers</h3>
          <div>Total Refresh: <span>{{totalRefresh}}</span></div>
          <div class="row">
            <div v-for="stuntPower in editedCharacter.stuntsAndPowers" class="col-md-5 card border-dark m-2 pb-4 box-shadow">
              <clickToEdit :value="stuntPower.refresh"></clickToEdit>
              <clickToEdit :value="stuntPower.name"></clickToEdit>
              <clickToEdit :value="stuntPower.description" :multiline="true"></clickToEdit>
            </div>
          </div>
          <div class="row">
            <form v-on:submit.prevent="addStuntPower">
              <input v-model="newStuntPower.name" placeholder="Enter Stunt Name"></input>
              <input v-model="newStuntPower.description" placeholder="Enter Stunt Description"></input>
              <input v-model="newStuntPower.refresh" type="number" style="width:50px"></input>
              <button class="btn btn-primary">Add New Stunt or Power</button>
            </form>
          </div>
          <div class="row">
            <h3>Skills</h3>
            <clickToEdit v-for="skill in editedCharacter.skills" :value="skill.name"></clickToEdit>
          </div>
          <div class="row"><form v-on:submit.prevent="addSkill">
              <input v-model="newSkill.name"></input>
              <button class="btn btn-primary">Add New Skill</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{    name: 'Home' }">
      <button class="btn btn-primary">Save</button>
    </router-link>
  </div>
</section>
</template>

<script>
import PowerLevels from './PowerLevels.js'
export default {
  methods: {
    addAspect() {
      this.editedCharacter.aspects.push({
        name: this.newAspect.name
      });
      this.newAspect.name = null;
    },
    addStuntPower() {
      this.editedCharacter.stuntsAndPowers.push({
        name: this.newStuntPower.name,
        description: this.newStuntPower.description,
        refresh: this.newStuntPower.refresh
      });
      this.newStuntPower.name = null;
      this.newStuntPower.description = null;
      this.newStuntPower.refresh = null
    },
    addSkill() {
      this.editedCharacter.skills.push({
        name: this.newSkill.name
      });
      this.newSkill.name = null;
    },
    updateImage() {
      this.editedCharacter.imgUrl = this.newImgUrl.url;
      this.newImgUrl.url = null;
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
        "description": "",
        "refresh": null
      })
    },
    newSkill: {
      type: Object,
      required: false,
      default: () => ({
        "name": ""
      })
    },
    newImgUrl: {
      type: Object,
      required: false,
      default: () => ({
        "url": ""
      })
    },
    character: {
      type: Object,
      required: false,
      default: () => ({
        "name": "",
        "highConcept": "",
        "powerLevel": PowerLevels.FeetInTheWater,
        "trouble": "",
        "imgUrl": "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
        "aspects": [],
        "skills": [],
        "stuntsAndPowers": []
      })
    }
  },
  computed: {
    totalRefresh: function() {
      return this.editedCharacter.powerLevel.refresh - (this.editedCharacter.stuntsAndPowers.reduce((acc, item) => acc + parseInt(item.refresh, 10), 0))
    }

  },
  data() {
    return {
      editedCharacter: this.character
    }
  },
  watch: {
    editedCharacter: function(val) {
      this.$emit('character', val);
    }
  }
}
</script>
