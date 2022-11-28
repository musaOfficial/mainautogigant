import { useEffect, useState } from "react";

export default function FooterLinks({ title, links }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 767) {
        setActive(true);
    }
  }, []);

  return (
    <div className="w-full bg-white md:bg-transparent rounded-t-10 p-6 text-13 text-theme-gray-600 duration-100 hover:text-color-yellow-600 md:px-0 md:py-2">
      <div
        className={`md:flex justify-between items-center md:border-b border-theme-gray-2 ${
          active ? "" : "pb-3"
        }`}
      >
        <button
          onClick={() => setActive(!active)}
          className={`items-center hidden md:flex font-bold md:w-full ${active ? "mb-2" : "mb-0"}`}
        >
          {active ? (
          <img
            className="hidden md:block mr-4"
            src="/images/icons/footer-minus.png"
          />
        ) : (
          <img
            className="hidden md:block mr-4"
            src="/images/icons/footer-plus.png"
          />
        )}
          {title}
        </button>
        <p
          className={`md:hidden border-b text-base font-bold ${active ? "mb-2" : "mb-0"}`}
        >
          {title}
        </p>
      </div>

      {active ? (
        <ul className={`${active ? "pt-2" : ""}`}>
          {links &&
            links.map((link, i) => (
              <li key={i} className="text-13 hover:text-theme-yellow">
                <a href={link.url}>{link.linkTitle}</a>
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
}
