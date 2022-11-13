import Image from "next/image";
import router from "next/router";

interface NavProps {
  color: string;
}

function Header({ color }: NavProps) {
  return (
    <div className="flex justify-between bg-transparent z-50 ">
      <div className="logo cursor-pointer" onClick={() => router.push("/")}>
        <Image
          src={`/web/logo/${
            color === "black" ? "web_logo_black.svg" : "web_logo_white.svg"
          }`}
          width={122}
          height={79}
          alt="logo"
        />
      </div>
      <div>
        <div
          className={`${
            color === "black" ? null : "text-white"
          } flex space-x-[25px] mt-4 `}
        >
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/works");
            }}
          >
            WORKS
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/designers");
            }}
          >
            DESIGNER
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;