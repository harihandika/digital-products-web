export type IconName =
  | "arrow"
  | "chat"
  | "learn"
  | "chart"
  | "check"
  | "plus"
  | "spark";

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      <path d="M8 10h8M8 14h5" />
    </>
  ),
  learn: (
    <>
      <path d="m3 9 9-5 9 5-9 5-9-5ZM6 11v6c4 3 8 3 12 0v-6M21 9v7" />
    </>
  ),
  chart: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M7 15v-3M12 15V7M17 15v-5" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7L12 3Z" />
    </>
  ),
};

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
