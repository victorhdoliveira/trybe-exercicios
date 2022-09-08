const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets'
    const request = await fetch(url);
    const { data } = await request.json();
    return data.slice(0,10);
};

const addCoin = async () => {
    const cryptoList = await fetchCoins();
    const listCrypto = document.querySelector('#coins-list');
    cryptoList.forEach((coin) => {
        const li = document.createElement('li');
        const usd = Number(coin.priceUsd);
        li.innerText = `${coin.name} (${coin.symbol}): ${usd.toFixed(2)}`;
        listCrypto.appendChild(li);
   });
  };


window.onload = addCoin;