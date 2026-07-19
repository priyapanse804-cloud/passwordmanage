import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-green-50 px-6 py-4 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-slate-800">Password Manager</p>
          <p className="mt-1">
            Securely store and manage your passwords in one place.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                href="/vault"
                className="hover:text-slate-900 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Vault
              </a>
            </li>
            <li>
              <a
                href="/security"
                className="hover:text-slate-900 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-slate-900 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/help"
                className="hover:text-slate-900 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Help
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-4 flex max-w-6xl flex-col gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {year} Password Manager. All rights reserved.</p>
        <p>Never share your master password.</p>
      </div>
    </footer>
  );
};

export default Footer;

