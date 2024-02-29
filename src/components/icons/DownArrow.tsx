interface DownArrowProps {
  className?: string;
}

export default function DownArrow({ className }: DownArrowProps) {
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
        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        fill="currenColor"
      />
    </svg>
  );
}
