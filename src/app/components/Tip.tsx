type TipType = {
  children: string;
};

export const Tip = ({ children }: TipType) => (
  <div className="text-white border-4 border-blue-400 dark:border-orange-700">
    <p className="text-center md:text-right bg-blue-400 dark:bg-orange-700 p-4 text-white font-extrabold">A TIP FOR YOU!</p>
    <p className="p-4 text-black dark:text-white">{children}</p>

  </div>


);