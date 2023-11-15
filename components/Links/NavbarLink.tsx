import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  text: string;
  className: string;
}

export default function NavbarLink({ href, text, className }: NavbarLinkProps) {
  return (
    <Link href={href} className={cn("font-medium", className)}>
      {text}
    </Link>
  );
}
