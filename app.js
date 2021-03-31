const extractStat = (statName, arr) => {
  // Solution code here...
  let result = arr.reduce((acc, val) => {
    if (val.stat.name == statName) {
      acc = val;
      return acc;
    } else {
      return acc;
    }
  }, {});
  return (result == {}) ? null : result;
};
const snorlaxData = {
  stats: [{
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};
console.log(extractStat('speed', snorlaxData.stats));
