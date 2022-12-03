import React from "react";

const YoutubeIcon = ({ size, color, className }) => {
  return (
    <svg
      width={25 * size}
      height={29 * size}
      // viewBox={`0 0 ${25 * size} ${29 * size}`}
      viewBox={`0 0 25 29`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_200)">
        <path
          d="M15.81 20.1317V23.5463C15.81 24.2692 15.5996 24.6306 15.1789 24.6306C14.9307 24.6306 14.688 24.5119 14.4506 24.2746V19.4035C14.688 19.1661 14.9307 19.0474 15.1789 19.0474C15.5996 19.0474 15.81 19.4089 15.81 20.1317ZM21.2799 20.1479V20.8923H19.8234V20.1479C19.8234 19.4142 20.0661 19.0474 20.5516 19.0474C21.0371 19.0474 21.2799 19.4142 21.2799 20.1479ZM5.64704 16.62H7.37863V15.0988H2.32952V16.62H4.02874V25.8281H5.64704V16.62ZM10.3078 25.8281H11.748V17.8337H10.3078V23.9509C9.9841 24.404 9.67662 24.6306 9.38532 24.6306C9.19113 24.6306 9.07785 24.5173 9.04548 24.2907C9.03469 24.2584 9.0293 24.0696 9.0293 23.7243V17.8337H7.58901V24.1613C7.58901 24.6899 7.63216 25.0837 7.71847 25.3426C7.84794 25.7418 8.16081 25.9414 8.65709 25.9414C9.17494 25.9414 9.72517 25.6124 10.3078 24.9542V25.8281ZM17.2503 23.433V20.245C17.2503 19.4574 17.2017 18.9234 17.1046 18.6429C16.9212 18.0387 16.5382 17.7366 15.9556 17.7366C15.4162 17.7366 14.9145 18.0279 14.4506 18.6105V15.0988H13.0103V25.8281H14.4506V25.0513C14.9361 25.6447 15.4378 25.9414 15.9556 25.9414C16.5382 25.9414 16.9212 25.6447 17.1046 25.0513C17.2017 24.76 17.2503 24.2206 17.2503 23.433ZM22.7201 23.2712V23.0608H21.2475C21.2475 23.611 21.2367 23.9401 21.2151 24.048C21.1396 24.4364 20.9238 24.6306 20.5678 24.6306C20.0715 24.6306 19.8234 24.2584 19.8234 23.514V22.106H22.7201V20.4392C22.7201 19.5869 22.5745 18.9611 22.2832 18.5619C21.8624 18.0117 21.2906 17.7366 20.5678 17.7366C19.8342 17.7366 19.257 18.0117 18.8362 18.5619C18.5341 18.9611 18.3831 19.5869 18.3831 20.4392V23.2388C18.3831 24.0911 18.5395 24.7169 18.8524 25.1161C19.2732 25.6663 19.8557 25.9414 20.6002 25.9414C21.377 25.9414 21.9595 25.6555 22.3479 25.0837C22.5421 24.7924 22.6554 24.5011 22.6878 24.2098C22.7094 24.1127 22.7201 23.7999 22.7201 23.2712ZM12.8809 8.49609V5.09766C12.8809 4.35324 12.6489 3.98103 12.185 3.98103C11.7211 3.98103 11.4891 4.35324 11.4891 5.09766V8.49609C11.4891 9.2513 11.7211 9.62891 12.185 9.62891C12.6489 9.62891 12.8809 9.2513 12.8809 8.49609ZM24.5165 20.6496C24.5165 23.1741 24.3762 25.0621 24.0957 26.3136C23.9447 26.9501 23.6318 27.4842 23.1571 27.9157C22.6824 28.3473 22.1322 28.5954 21.5064 28.6602C19.5213 28.8867 16.5274 29 12.5248 29C8.52223 29 5.52837 28.8867 3.54325 28.6602C2.9175 28.5954 2.36458 28.3473 1.88449 27.9157C1.40439 27.4842 1.09422 26.9501 0.953962 26.3136C0.673456 25.1053 0.533203 23.2173 0.533203 20.6496C0.533203 18.125 0.673456 16.237 0.953962 14.9855C1.105 14.349 1.41788 13.8149 1.89258 13.3834C2.36728 12.9518 2.9229 12.6983 3.55943 12.6228C5.53376 12.407 8.52223 12.2991 12.5248 12.2991C16.5274 12.2991 19.5213 12.407 21.5064 12.6228C22.1322 12.6983 22.6851 12.9518 23.1652 13.3834C23.6453 13.8149 23.9555 14.349 24.0957 14.9855C24.3762 16.1938 24.5165 18.0818 24.5165 20.6496ZM8.36579 0H10.0165L8.05831 6.45703V10.8426H6.44001V6.45703C6.28897 5.65867 5.95991 4.51507 5.45285 3.02623C5.05366 1.91499 4.70303 0.90625 4.40095 0H6.11635L7.26535 4.25614L8.36579 0ZM14.3535 5.38895V8.22098C14.3535 9.09487 14.2025 9.7314 13.9004 10.1306C13.4904 10.6808 12.9186 10.9559 12.185 10.9559C11.4621 10.9559 10.8957 10.6808 10.4858 10.1306C10.1837 9.72061 10.0326 9.08408 10.0326 8.22098V5.38895C10.0326 4.52586 10.1837 3.89472 10.4858 3.49554C10.8957 2.94531 11.4621 2.6702 12.185 2.6702C12.9186 2.6702 13.4904 2.94531 13.9004 3.49554C14.2025 3.89472 14.3535 4.52586 14.3535 5.38895ZM19.7748 2.7673V10.8426H18.3022V9.95257C17.7304 10.6215 17.1748 10.9559 16.6353 10.9559C16.139 10.9559 15.8208 10.7563 15.6805 10.3571C15.5942 10.0982 15.5511 9.69364 15.5511 9.14342V2.7673H17.0237V8.70647C17.0237 9.0625 17.0291 9.2513 17.0399 9.27288C17.0723 9.51023 17.1855 9.62891 17.3797 9.62891C17.671 9.62891 17.9785 9.39695 18.3022 8.93304V2.7673H19.7748Z"
          fill="#F8F8F8"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_200">
          <rect
            width={"25" * size}
            height={"29" * size}
            fill="white"
            transform="translate(0.0957031)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeIcon;
