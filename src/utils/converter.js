import { useState, useMemo } from "react";
import axios from "axios";

const useCurrencyConverter = (fee) => {
  const dataUser = JSON.parse(localStorage.getItem("userData"));

  const countries = [
    {
      id: 1,
      country: "uganda",
      curr: "UGX",
    },
    {
      id: 2,
      country: "rwanda",
      curr: "RWF",
    },
    {
      id: 3,
      country: "kenya",
      curr: "KES",
    },
    {
      id: 4,
      country: "nigeria",
      curr: "NGN",
    },
    {
      id: 5,
      country: "ghana",
      curr: "GHS",
    },
    {
      id: 6,
      country: "tanzania",
      curr: "TZS",
    },
    {
      id: 7,
      country: "zambia",
      curr: "ZMW",
    },
    {
      id: 8,
      country: "Sierra Leone",
      curr: "SLL",
    },
    {
      id: 9,
      country: "cameroon",
      curr: "XOF",
    },

    {
      id: 10,
      country: "zimbabwe",
      curr: "XOF",
    },
  ];

  const filteredCountries = countries.filter(
    (countryObj) =>
      countryObj.country.toLowerCase() === dataUser?.user.country.toLowerCase()
  );

  const [baseState, setBaseState] = useState({
    currencies: [
      "USD",
      "UGX",
      "KES",
      "NGN",
      "RWF",
      "TZS",
      "SLL",
      "GHS",
      "ZMW",
      "XOF",
    ],
    base: "USD",
    amount: fee?.toString(),
    convertTo:
      filteredCountries[0]?.curr === null || undefined
        ? "USD"
        : filteredCountries[0]?.curr,
    result: "",
  });

  const { currencies, base, amount, convertTo } = baseState;

  useMemo(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyConverter = async () => {
        try {
          const response = await axios.get(
            `https://openexchangerates.org/api/latest.json?app_id=9109134d78fa4fa6a12f3f7bfa0b1934&base=${base}`
          );
          const result = (response?.data?.rates[convertTo] * amount).toFixed(3);
          setBaseState((prevBaseState) => ({
            ...prevBaseState,
            result,
          }));
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      getCurrencyConverter();
    }
  }, [amount, base, convertTo]);

  return baseState;
};

export default useCurrencyConverter;
