<template>
<section class="text-center">
  <div>
    <section>
      <p>Welcome to haibatty.</p>
    </section>
    <section>
      <div v-for="campaign in campaigns">
        <div class="row">
          <h3 class="my-4">
            <button type="button" class="btn btn-danger" @click="deleteCampaign(campaign.name)" value="campaign.name">X</button>
            Campaign: {{campaign.name}}<br />
          </h3>
        </div>
        <div>
          <characterList :characters="campaign.characters"></characterList>
        </div>
      </div>
      <form v-on:submit.prevent="addCampaign">
        <input v-model="newCampaign.name"></input>
        <button type="submit" class="btn btn-primary">Add New Campaign</button>
      </form>
    </section>
  </div>

  </div>
</section>
</template>

<script>
import PowerLevels from './PowerLevels.js'
import axios from 'axios'

export default {
  name: 'Home',
  created() {
    this.refreshCampaign()
  },
  methods: {
    saveCampaigns() {
      console.log(this.campaigns);
      axios.post('http://localhost:3000/campaigns', this.campaigns).then(response => {
        console.log(response)
      });
    },
    addCampaign() {
      this.campaigns.push({
        name: this.newCampaign.name,
        characters: []
      });
      this.newCampaign.name = null;
      this.saveCampaigns();
    },
    deleteCampaign(campaignName) {
      var test = JSON.stringify({name: campaignName});
      var test2 = { body: test};

      console.log(test2);
      axios.delete('http://localhost:3000/campaign/' + campaignName, null).then(response => {
        console.log(response)
        this.refreshCampaign();
      });
    },
    refreshCampaign() {
      axios.get('http://localhost:3000/campaigns').then(response => {
        this.campaigns = response.data;
      });
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
      default: () => ([]),
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
