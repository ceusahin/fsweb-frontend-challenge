const NavLink = ({ href, children }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="ml-20 max-500:ml-6 text-[#6B7280]"
  >
    {children}
  </a>
);

export default NavLink;
