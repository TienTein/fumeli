import Link from "next/link";

export default function NavbarLink() {
  return (
    <div className="flex md:order-2 w-full justify-between nav-link py-4">
      <div className="flex justify-between nav-link-l">
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Giới thiệu
        </Link>

        <button
          id="mega-menu-dropdown-button"
          data-dropdown-toggle="mega-menu-dropdown"
          className="flex items-center justify-between text-white"
        >
          Nhiệm vụ
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-1 md:w-4 md:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Vòng quay may mắn
        </Link>
      </div>

      <div className="flex justify-between nav-link-l">
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Giải đấu
        </Link>
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Đổi quà
        </Link>
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Liên hệ
        </Link>
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Đội viên
        </Link>
      </div>
    </div>
  );
}
