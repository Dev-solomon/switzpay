import pic from "../assets/ig-logo.png";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="px-4 pt-4 pb-6 md:pt-6 md:pb-8">
      <ul className="flex justify-evenly mb-3 md:mb-6 lg:mx-16">
        <li>
          <a href="/" className="text-sm md:text-xl">
            About us
          </a>
        </li>
        <li>
          <a href="/" className="text-sm md:text-xl">
            Admin
          </a>
        </li>
        <li>
          <a href="/" className="text-sm md:text-xl">
            Contatct us
          </a>
        </li>
        <li>
          <a href="/" className="text-sm md:text-xl">
            Privacy policy
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <img src={pic} alt="IG" />
        <img src={logo} alt="logo" className="w-[20%] ml-7 md:ml-14" />
      </div>
    </div>
  );
}

export default Footer