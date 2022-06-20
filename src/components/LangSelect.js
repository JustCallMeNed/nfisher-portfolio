import { useEffect } from "react";
import gsap from "gsap";

const LangSelect = ({ setLang }) => {
  const handleOnChange = (e) => {
    setLang(e);
  };

  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from(".LangSelectList", { duration: 2, opacity: 0 })
    );
  }, []);
  return (
    <div className="LangSelectList">
      <label for="LangSelect">Language:</label>
      <select
        name="Language"
        id="LangSelect"
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      >
        <option value="eng">🇺🇸 English</option>
        <option value="fra">🇫🇷 Français</option>
        <option value="suo">🇫🇮 Suomi</option>
      </select>
    </div>
  );
};

export default LangSelect;
