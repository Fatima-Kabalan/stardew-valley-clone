interface UpArrowProps {
  className?: string;
}

export default function UpArrow({ className }: UpArrowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
        fill="currenColor"
      />
    </svg>
  );
}
