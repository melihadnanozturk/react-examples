import { NavLink, Outlet } from "react-router";

export default function HelpPage() {
  return (
    <div id="help-layout">
      <h1>"Help Page"</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        commodi quidem quasi officia, explicabo assumenda enim id aperiam odio
        corporis rerum reprehenderit ipsa aliquid eaque exercitationem
        voluptate, pariatur adipisci deleniti?
      </p>

      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">FAQ</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
