import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { ResponsiveLine } from "@nivo/line";
import { getCurrencies, getCurrencyChart } from "../coinGecko";

interface CurrenciesChange {
  x: string;
  y: number;
}

const Tracker = () => {
  const [data, setData] = useState<[string, any][]>([]);
  const [ethereumChange, setEthereumChange] = useState<CurrenciesChange[]>([]);
  const [liteCoinChange, setLiteCoinCHange] = useState<CurrenciesChange[]>([]);
  const [bitCoinCash, setBitCoinCash] = useState<CurrenciesChange[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCurrencies(setError);
      const dataArray = Object.entries(result);
      setTimeout(() => {
        setData(dataArray);
      }, 2300);
    };

    fetchData();

    const dataInterval = setInterval(fetchData, 10000);

    return () => clearInterval(dataInterval);
  }, []);

  useEffect(() => {
    getCurrencyChart("ethereum", "usd", setEthereumChange, setError);
    getCurrencyChart("litecoin", "usd", setLiteCoinCHange, setError);
    getCurrencyChart("bitcoin-cash", "usd", setBitCoinCash, setError);
  }, []);
  return (
    <Card className="w-full max-w-[1400px] shadow-2xl relative">
      <CardHeader>
        <CardTitle>Crypto Prices</CardTitle>
        <CardDescription>
          Current prices and 24-hour changes for major cryptocurrencies.
        </CardDescription>
      </CardHeader>
      {data.length > 0 &&
      ethereumChange.length > 0 &&
      liteCoinChange.length > 0 ? (
        <CardContent
          className={`transition scale-0 ${
            liteCoinChange ? "scale-1" : "scale-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.length > 0
              ? data.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`p-4 rounded-lg border uppercase ${
                        item[0] === selectedCrypto
                          ? "border-primary bg-primary-foreground text-primary"
                          : "border-muted"
                      }`}
                      onClick={() => setSelectedCrypto(item[0])}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{item[0]}</h3>
                      </div>
                      <div className="text-3xl font-bold mt-2">
                        ${item[1].usd.toFixed(2)}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="mt-8">
            <LineChart
              className="aspect-[9/4]"
              ethereum={ethereumChange}
              litecoin={liteCoinChange}
              bitcoincash={bitCoinCash}
            />
          </div>
        </CardContent>
      ) : (
        <div>
          {!error ? (
            <div className="w-24 h-24 border-4 border-slate-800 mx-auto mt-24 mb-24 loader rounded-lg"></div>
          ) : null}
          <p className="text-center text-2xl text-slate-700 my-12">{error}</p>
        </div>
      )}
    </Card>
  );
};
export default Tracker;

interface LineChartProps {
  className: string;
  ethereum: CurrenciesChange[];
  litecoin: CurrenciesChange[];
  bitcoincash: CurrenciesChange[];
}
function LineChart({
  className,
  ethereum,
  litecoin,
  bitcoincash,
}: LineChartProps) {
  return (
    <div className={className}>
      <ResponsiveLine
        data={[
          {
            id: "ethereum",
            data: ethereum,
          },
          {
            id: "litecoin",
            data: litecoin,
          },
          {
            id: "bitcoincash",
            data: bitcoincash,
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48", "purple", "slate-900"]}
        pointSize={8}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
