const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
  {/* Short horizontal line on top */}
        <line x1="4" y1="6" x2="18" y2="6" />
        {/* Arrowhead (diagonal up-left) */}
        <polyline points="14 18 8 12" />
            {/* Vertical tail of the arrow */}
          <line x1="8" y1="12" x2="8" y2="18" />
          <line x1="8" y1="12" x2="18" y2="12.2" />

      </svg>
      <span className="font-semibold text-[17px] tracking-tight text-black dark:text-white">
        Refokus
      </span>
    </div>
  );
};

export default Logo;
