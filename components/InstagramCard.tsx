"use client";

interface Props {
  username: string;
}

export default function InstagramCard({ username }: Props) {
  return (
    <a
      href={`https://www.instagram.com/${username}/`}
      className="social-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="brand-icon brand-icon-instagram" aria-hidden="true" />
      <span>Instagram</span>
    </a>
  );
}
