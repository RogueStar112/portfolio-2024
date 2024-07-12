type QuoteType = {
  children: string;
  author: string;
};

export const Quote = ({ children, author }: QuoteType) => (
  <blockquote className="w-full relative my-4 text-justify">
    
    <div className="flex justify-between text-2xl md:text-3xl">
      <p className="text-7xl text-blue-500 dark:text-orange-500 opacity-60" id="quote-decor-left select-none">
        “
      </p>
      <p className="text-center">{children}</p>
      <p id="quote-decor-right" className="text-7xl place-self-end text-blue-500 dark:text-orange-500 opacity-60 rotate-180 select-none">
        “     
      </p>
    </div>

    <p className="text-right w-full font-extrabold text-xl md:text-2xl opacity-60">~{author}</p>
  </blockquote>
);
