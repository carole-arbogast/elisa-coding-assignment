import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  children: React.ReactNode;
}

export function StyledLink(props: Props) {
  return (
    <Link
      href={props.href}
      className="text-link hover:text-link-hover hover:underline"
    >
      {props.children}
    </Link>
  );
}

export default StyledLink;
