import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export function ButtonLoading({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <Button
      disabled
      className={className && className.length > 0 ? className : ""}
    >
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {title ? title : "Please wait.."}
    </Button>
  );
}
