const axios = require("axios").default;

export const launcheService = {
  getLaunches,
  getLauncheById,
};

async function getLaunches() {
  try {
    let entities = JSON.parse(sessionStorage.getItem("launchesDB"));
    if (!entities) {
      const response = await axios.get(
        "https://api.spacexdata.com/v4/launches"
      );
      console.log("from axios", response.data);
      sessionStorage.setItem("launchesDB", JSON.stringify(response.data));
      entities = response.data;
    }
    return entities;
  } catch (error) {
    console.error(error);
  }
}

async function getLauncheById(launcheId) {
  const launches = await getLaunches();
  return launches.find((launche) => launche.id === launcheId);
}
