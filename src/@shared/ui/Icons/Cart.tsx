import { IconProps } from "@shared/model/types/icons";
import React, { FC } from "react";

export const Cart: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0_4177_593" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3818 14H8.76379L7.12679 8H19.3818L16.3818 14ZM21.0828 6.948C20.7158 6.354 20.0798 6 19.3818 6H6.58179L5.96479 3.737C5.84579 3.302 5.45079 3 4.99979 3H2.99979C2.44679 3 1.99979 3.448 1.99979 4C1.99979 4.552 2.44679 5 2.99979 5H4.23579L7.03479 15.263C7.15379 15.698 7.54879 16 7.99979 16H16.9998C17.3788 16 17.7248 15.786 17.8948 15.447L21.1708 8.894C21.4838 8.269 21.4498 7.542 21.0828 6.948ZM7.49999 18C6.67199 18 5.99999 18.671 5.99999 19.5C5.99999 20.329 6.67199 21 7.49999 21C8.32799 21 8.99999 20.329 8.99999 19.5C8.99999 18.671 8.32799 18 7.49999 18ZM16 19.5C16 18.671 16.672 18 17.5 18C18.328 18 19 18.671 19 19.5C19 20.329 18.328 21 17.5 21C16.672 21 16 20.329 16 19.5Z"
          fill="#071435"
        />
      </mask>
      <g mask="url(#mask0_4177_593)">
        <rect width="24" height="24" fill="#1551E5" />
      </g>
    </svg>
  );
};
