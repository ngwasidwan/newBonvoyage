function Nav_2Items({ children, index, setActiveLink }) {
  function handleClick() {
    setActiveLink(index);
  }
  return (
    <li
      onClick={handleClick}
      className=" text-xl text-center cursor-pointer border-x border-stone-700  py-4 capitalize transition-colors"
    >
      {children}
    </li>
  );
}

export default Nav_2Items;
