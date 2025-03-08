/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { motion } from "motion/react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./RoundedCheckbox.style";
import checkbox from "../../../assets/fileUpload/checkBox.svg";

interface RoundedCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const RoundedCheckbox: React.FC<RoundedCheckboxProps> = ({
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <motion.div
      css={CheckboxContainer}
      onClick={toggleCheckbox}
      animate={isChecked ? {} : { borderColor: "#05308C" }}
      whileHover={isChecked ? { borderColor: "#6D80C5" } : {}}
    >
      <input
        type="checkbox"
        css={HiddenCheckbox}
        checked={isChecked}
        readOnly
      />
      <img src={checkbox} alt="checkbox" css={StyledCheckbox(isChecked)} />
    </motion.div>
  );
};

export default RoundedCheckbox;
