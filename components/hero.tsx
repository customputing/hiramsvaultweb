
export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <h3 className="text-3xl font-bold lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
          Hiram's Vault
        </h3>

        
        {/* a way to make a forward slash separator
        <span className="border-l rotate-45 h-6" />
        */}

      </div>
      {/* 
      sr-only is for screen readers only, visually hidden
      <h1 className="sr-only">Screen Reader info only</h1>
      */}

      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Let's meet on the {" "}
        <a className="font-bold hover:underline">
        Square
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
