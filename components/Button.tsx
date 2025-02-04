import Image from "next/image"
type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant?: string;
    full?: boolean;
}

const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button type={type} className={`${full} ${variant} flexCenter gap-3 rounded-full border`}>
     {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <label>{title}</label>
    </button>
  )
}

export default Button