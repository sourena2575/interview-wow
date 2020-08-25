import React, { FC } from "react";

const DotIcon: FC<{ w: string; h: string; className?: string }> = ({
  w,
  h,
  className,
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 16 16"
      className={`bi bi-person-circle ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
    </svg>
  );
};

export default DotIcon;
