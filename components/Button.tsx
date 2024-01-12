import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faIcons, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type ButtonProps = {
  type: 'button' | 'submit',
  title: string,
  icons?: IconProp,
  variant: string
  style?: string
  full?: boolean
}


const Button = ({ type, title, icons, variant, style, full }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}
    ${full && 'w-full'}`}>
      {icons && <FontAwesomeIcon icon={icons} width={20} height={20} className={style} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
