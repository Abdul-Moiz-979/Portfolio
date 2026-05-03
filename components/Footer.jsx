import Link from "next/link";
import socialLinks from "@/data/socialLinks";

/**
 * Footer Component
 * Minimal footer with social links and copyright.
 */
export default function Footer() {
  return (
    <footer
      id="main-footer"
      className="mt-auto border-t border-border-default bg-bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-text-secondary">Abdul Moiz</span>. All rights
            reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`footer-social-${social.name.toLowerCase()}`}
                className="text-text-muted hover:text-accent-primary transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.icon} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
