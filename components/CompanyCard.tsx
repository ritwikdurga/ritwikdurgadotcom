"use client";

interface Props {
  href: string;
  name: string;
  role: string;
  sub: string;
  initial: string;
}

export default function CompanyCard({ href, name, role, sub, initial }: Props) {
  return (
    <a
      href={href}
      className="hover-card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
      <span className="hover-card">
        <span className="company-card-inner">
          <span className="company-dot">{initial}</span>
          <span className="profile-info">
            <span className="profile-handle">{role}</span>
            <span className="profile-bio">{sub}</span>
          </span>
        </span>
      </span>
    </a>
  );
}
