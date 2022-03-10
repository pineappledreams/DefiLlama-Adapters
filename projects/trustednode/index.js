const axios = require("axios");

const TVL_URL = "https://tnode-backend.hydrogenx.tk/token/total-assets-staked"; 

async function fetch() {
  const { data: tvl } = await axios.get(TVL_URL);
  return tvl.totalAssetsStaked;
};

module.exports={
    methodology: "TVL aggregates the total cost of all staked tokens across networks in USD.",
    timetravel: false,
    fetch
}
