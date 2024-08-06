import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer footer-center text-base-content text-lg p-4">
      <aside>
        <p>
          movie.in © {new Date().getFullYear()} -
          <Link
            href="https://www.rizki-fadilah.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-info"
          >
            Rizki Fadilah
          </Link>
        </p>
      </aside>
    </footer>
  );
}
