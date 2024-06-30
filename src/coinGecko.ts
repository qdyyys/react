export const getCurrencies = async (
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    const params = {
      ids: "bitcoin,ethereum,ripple,bitcoin-cash,cardano,solana,dogecoin,polkadot,litecoin,stellar",
      vs_currencies: "usd",
    };
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?${queryString}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(
      "Ошибка при попытке получить информацию о валюте, попробуйте позже"
    );
    setError(
      "Ошибка при попытке получить информацию о валюте, попробуйте позже"
    );
  }
};

export const getCurrencyChart = async (
  id: string,
  vsCurrency: string,
  setCurrenciesChange: React.Dispatch<React.SetStateAction<any>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vsCurrency}&days=180`
    );
    const data = await response.json();
    const dataArray = Object.entries(data);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setCurrenciesChange([
      {
        x: monthNames[new Date(data.prices[30][0]).getMonth()],
        y: Math.round(data.prices[30][1]),
      },
      {
        x: monthNames[new Date(data.prices[60][0]).getMonth()],
        y: Math.round(data.prices[60][1]),
      },
      {
        x: monthNames[new Date(data.prices[90][0]).getMonth()],
        y: Math.round(data.prices[90][1]),
      },
      {
        x: monthNames[new Date(data.prices[120][0]).getMonth()],
        y: Math.round(data.prices[120][1]),
      },
      {
        x: monthNames[new Date(data.prices[150][0]).getMonth()],
        y: Math.round(data.prices[150][1]),
      },
      {
        x: monthNames[new Date(data.prices[179][0]).getMonth()],
        y: Math.round(data.prices[179][1]),
      },
    ]);
    return dataArray;
  } catch (error) {
    console.error(
      "Ошибка при попытке получить информацию о валюте, попробуйте позже"
    );
    setError(
      "Ошибка при попытке получить информацию о валюте, попробуйте позже"
    );
  }
};
