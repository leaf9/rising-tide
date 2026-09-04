import { FACEBOOK_URL } from '@/config'

export default function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <a
      className={`fb-link ${className}`}
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rising Tide Counseling on Facebook"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.85c0-.84.23-1.41 1.44-1.41h1.54V4.85c-.27-.04-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.83v2.14H8v2.9h2.45V21h3.05z" />
      </svg>
    </a>
  )
}
