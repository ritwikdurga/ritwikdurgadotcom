"use client";

interface Props {
  username: string;
}

export default function InstagramCard({ username }: Props) {
  return (
    <a
      href={`https://www.instagram.com/${username}/`}
      className="hover-card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
      <span className="hover-card">
        <span className="instagram-card-inner">
          <span className="instagram-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
            </svg>
          </span>
          <span className="profile-info">
            <span className="profile-handle">@{username}</span>
            <span className="profile-bio">instagram.com/{username}</span>
          </span>
        </span>
      </span>
    </a>
  );
}
