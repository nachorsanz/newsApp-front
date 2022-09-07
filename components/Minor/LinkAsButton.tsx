import Link from "next/link";

interface LinkAsButtonProps {
  link: string;
  text: string;
}

const LinkAsButton = (props: LinkAsButtonProps) => {
  return (
    <Link href={`/${props.link}`}>
      <button>{props.text}</button>
    </Link>
  );
};
export default LinkAsButton;
