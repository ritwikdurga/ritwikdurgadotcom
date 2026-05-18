"use client";

const COLORS = [
  "#ebedf0", // 0 contributions
  "#9be9a8", // light
  "#40c463", // medium
  "#30a14e", // dark
  "#216e39", // darkest
];

function generateGrid(): number[] {
  // 5 rows × 22 cols = 110 cells — looks like a real contrib graph slice
  const seed = [
    0,0,1,0,2,1,0,0,1,2,3,2,1,0,0,1,2,3,4,3,2,1,
    0,1,2,1,0,1,2,3,2,1,2,3,4,3,2,1,0,1,2,1,0,0,
    1,2,3,2,1,2,3,4,3,2,3,4,3,2,1,2,3,4,3,2,1,0,
    0,1,2,3,2,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,0,
    0,0,1,2,1,0,0,1,2,3,2,1,0,0,1,2,3,2,1,0,0,0,
  ];
  return seed;
}

const grid = generateGrid();

interface Props {
  username: string;
  displayName: string;
  bio: string;
}

export default function GitHubCard({ username, displayName, bio }: Props) {
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <span className="github-link">
      GitHub
      <span className="github-card">
        <span className="contrib-grid">
          {grid.map((level, i) => (
            <span
              key={i}
              className="contrib-cell"
              style={{ backgroundColor: COLORS[level] }}
            />
          ))}
        </span>
        <span className="profile-row">
          <span className="avatar">{initials}</span>
          <span className="profile-info">
            <span className="profile-handle">@{username}</span>
            <span className="profile-bio">{bio}</span>
          </span>
        </span>
      </span>
    </span>
  );
}
