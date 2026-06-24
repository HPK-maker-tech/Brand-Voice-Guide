export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Dog Icon */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dog head */}
        <circle cx="14" cy="14" r="8" fill="#8B4513" />

        {/* Left ear */}
        <ellipse cx="8" cy="8" rx="3" ry="5" fill="#8B4513" />

        {/* Right ear */}
        <ellipse cx="20" cy="8" rx="3" ry="5" fill="#8B4513" />

        {/* Snout */}
        <ellipse cx="14" cy="16" rx="3.5" ry="3" fill="#A0522D" />

        {/* Left eye */}
        <circle cx="11" cy="12" r="1.2" fill="#000" />

        {/* Right eye */}
        <circle cx="17" cy="12" r="1.2" fill="#000" />

        {/* Nose */}
        <circle cx="14" cy="16" r="0.8" fill="#000" />
      </svg>

      {/* Van Icon */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Van body */}
        <rect x="3" y="12" width="22" height="10" rx="1" fill="#D4A017" stroke="#A0620B" strokeWidth="1" />

        {/* Van cabin/top */}
        <path d="M 6 12 L 8 6 L 20 6 L 22 12" fill="#B8860B" stroke="#A0620B" strokeWidth="1" />

        {/* Window */}
        <rect x="10" y="7" width="8" height="5" fill="#87CEEB" stroke="#A0620B" strokeWidth="0.5" />

        {/* Left wheel */}
        <circle cx="8" cy="22" r="2" fill="#333" stroke="#000" strokeWidth="0.5" />

        {/* Right wheel */}
        <circle cx="20" cy="22" r="2" fill="#333" stroke="#000" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
