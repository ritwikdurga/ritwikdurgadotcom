"use client";

interface Props {
  username: string;
}

export default function InstagramCard({ username }: Props) {
  return (
    <a
      href={`https://www.instagram.com/${username}/`}
      className="instagram-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="ig-float-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad-u)" />
          <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          <defs>
            <linearGradient id="ig-grad-u" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      Instagram
      <svg className="ig-strike" viewBox="0 0 120 14" preserveAspectRatio="none">
        <path className="ig-strike-path" d="M 0 7 Q 30 3 60 7 Q 90 11 120 7" />
      </svg>
    </a>
  );
}
