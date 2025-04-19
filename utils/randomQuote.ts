type Quote = {
  credit: string;
  text: string;
};
const quotesUrl = new URL('~/assets/quotes.csv', import.meta.url).href;

export const randomQuote = async (): Promise<Quote> => {
  const quotesString = await (await fetch(quotesUrl)).text();

  // hacky csv parser FTW
  const quotes: Quote[] = quotesString
    .split("\n")
    .slice(1)
    .map((line) => {
      const [credit, text] = line.split(/","/);
      return {
        credit: credit.replace('"', ""),
        text: text.replace('"', ""),
      };
    });

  return quotes[Math.floor(Math.random() * quotes.length)];
};