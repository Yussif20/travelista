import Image from "next/image";

// we specify the type of the props as it reduce errors alot {typescribt}

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, icon, title, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full cursor-pointer ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
