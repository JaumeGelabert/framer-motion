import Link from "next/link";

interface NavbarSocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export default function NavbarSocialLink({
  href,
  icon
}: NavbarSocialLinkProps) {
  return (
    <Link
      href={href}
      className="text-neutral-500 hover:text-neutral-600 transition-all"
    >
      {icon}
    </Link>
  );
}
