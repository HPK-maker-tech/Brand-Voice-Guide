export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* Van body */}
      <rect x="4" y="18" width="32" height="14" rx="2" fill="#B8860B" stroke="#A0620B" strokeWidth="1.5" />

      {/* Van top/cabin */}
      <path d="M 8 18 Q 8 10 16 10 L 32 10 Q 32 12 28 14 L 8 14 Z" fill="#D4A017" stroke="#A0620B" strokeWidth="1.5" />

      {/* Window */}
      <rect x="18" y="11" width="10" height="8" rx="1" fill="#E8F4F8" stroke="#A0620B" strokeWidth="1" />

      {/* Dog head in window */}
      <circle cx="23" cy="14" r="2.5" fill="#8B4513" />

      {/* Dog ears */}
      <ellipse cx="20.5" cy="12.5" rx="1.2" ry="1.8" fill="#8B4513" />
      <ellipse cx="25.5" cy="12.5" rx="1.2" ry="1.8" fill="#8B4513" />

      {/* Dog snout */}
      <ellipse cx="23" cy="15.5" rx="1.5" ry="1" fill="#A0522D" />

      {/* Dog eyes */}
      <circle cx="21.5" cy="13.5" r="0.4" fill="#000" />
      <circle cx="24.5" cy="13.5" r="0.4" fill="#000" />

      {/* Wheels */}
      <circle cx="10" cy="32" r="2" fill="#333" stroke="#000" strokeWidth="0.5" />
      <circle cx="30" cy="32" r="2" fill="#333" stroke="#000" strokeWidth="0.5" />
    </svg>
  );
}
