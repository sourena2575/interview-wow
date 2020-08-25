import React, { FC } from "react";

const LeftIcon: FC<{ w: string; h: string; className?: string }> = ({
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
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
};

export default LeftIcon;
