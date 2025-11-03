const SearchFlters = () => {
  return (
    <div className="h-12 lg:h-16 flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row justify-between items-center">
          <div className="px-8 w-[250px] h-12 lg:h-16 flex flex-col rounded-full justify-center hover:bg-gray-100 ">
            <p className="text-xs font-semibold">Where?</p>
            <p className="text-sm">Wanted Location</p>
          </div>
          <div className="px-8 h-12 lg:h-16 flex flex-col rounded-full justify-center hover:bg-gray-100 ">
            <p className="text-xs font-semibold">Check In</p>
            <p className="text-sm">Add Dates</p>
          </div>
          <div className="px-8 h-12 lg:h-16 flex flex-col rounded-full justify-center hover:bg-gray-100 ">
            <p className="text-xs font-semibold">Check Out</p>
            <p className="text-sm">Add Dates</p>
          </div>
          <div className="px-8 h-12 lg:h-16 flex flex-col rounded-full justify-center hover:bg-gray-100 ">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add Guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 lg:p-4 bg-airbnb rounded-full text-white hover:bg-airbnbdark transition hover:cursor-pointer">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentColor",
              strokeWidth: 4,
              overflow: "visible",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m20.666 20.666 10 10"></path>
            <path
              d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z"
              fill="none"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFlters;
