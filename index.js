const driverNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const driverObjects = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];
function findMatching(drivers, query) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === query.toLowerCase();
  });
}
function fuzzyMatch(drivers, query) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase().startsWith(query.toLowerCase());
  });
}

function matchName(drivers, query) {
  return drivers.filter(function(driver) {
    return driver.name === query;
  });
}