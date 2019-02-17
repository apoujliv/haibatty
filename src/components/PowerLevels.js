const powerLevels = {
  FeetInTheWater: {
    refresh: 6,
    skillPoints: 20,
    skillCap: 4,
    name: "Feet In The Water"
  },
  UpToYourWaist: {
    refresh: 7,
    skillPoints: 25,
    skillCap: 4
  },
  ChestDeep: {
    refresh: 8,
    skillPoints: 30,
    skillCap: 5
  },
  Submerged: {
    refresh: 10,
    skillPoints: 35,
    skillCap: 5
  }
}

export default Object.freeze(powerLevels)
