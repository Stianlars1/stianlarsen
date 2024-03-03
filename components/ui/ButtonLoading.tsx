import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export function ButtonLoading({ title }: { title?: string }) {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {title ? title : "Please wait.."}
    </Button>
  );
}
