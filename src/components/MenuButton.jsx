export default function MenuButton({ open, setOpen }) {
  return (
    <div className="md:hidden fixed bg-lime-300 rounded-2xl p-2 top-5 right-5 z-50">
      <input
        type="checkbox"
        id="checkbox"
        checked={open}
        onChange={() => setOpen(!open)}
      />
      <label htmlFor="checkbox" className="toggle">
        <span id="bar1" className="bars"></span>
        <span id="bar2" className="bars"></span>
        <span id="bar3" className="bars"></span>
      </label>
    </div>
  );
}
