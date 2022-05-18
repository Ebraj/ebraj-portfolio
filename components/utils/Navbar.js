import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="text-gray-100 bg-black p-5 py-6">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto space-x-10">
          <h2>
            <Link href="/">
              <a>EbrajG.</a>
            </Link>
          </h2>
          <ul className="flex items-center justify-center space-x-5">
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Say Hello.</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
