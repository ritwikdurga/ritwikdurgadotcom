"use client";

import { useState } from "react";

const COLORS = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];

const GRID = [
  0,0,1,0,2,1,0,0,1,2,3,2,1,0,0,1,2,3,4,3,2,1,
  0,1,2,1,0,1,2,3,2,1,2,3,4,3,2,1,0,1,2,1,0,0,
  1,2,3,2,1,2,3,4,3,2,3,4,3,2,1,2,3,4,3,2,1,0,
  0,1,2,3,2,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,0,
  0,0,1,2,1,0,0,1,2,3,2,1,0,0,1,2,3,2,1,0,0,0,
];

interface Props {
  username: string;
  bio: string;
}

export default function GitHubCard({ username, bio }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={`https://github.com/${username}`}
      className="hover-card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
      <span className="hover-card" aria-hidden="true">
        <span className="github-card-inner">
          <span className="contrib-grid">
            {GRID.map((level, i) => (
              <span
                key={i}
                className="contrib-cell"
                style={{ backgroundColor: COLORS[level] }}
              />
            ))}
          </span>
          <span className="profile-row">
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://avatars.githubusercontent.com/${username}`}
                alt={username}
                className="avatar"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="avatar-fallback">
                {username.slice(0, 2).toUpperCase()}
              </span>
            )}
            <span className="profile-info">
              <span className="profile-handle">@{username}</span>
              <span className="profile-bio">{bio}</span>
            </span>
          </span>
        </span>
      </span>
    </a>
  );
}
