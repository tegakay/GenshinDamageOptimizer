import { SearchInput } from "./SearchInput";

export const Hero1 = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              Easy to Use Genshin Optimizer
            </h1>
          </div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};
