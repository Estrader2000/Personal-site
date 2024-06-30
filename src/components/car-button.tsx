import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa6";
import { type Options } from "@/components/car-component";

export type CarButtonProps = {
  label: String;
  partColor: Options;
  onClick: (color: string) => void;
};

export function CarButton({ label, partColor, onClick }: CarButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[max-content] bg-gradient-to-b from-secondary-foreground to-secondary dark:bg-gradient-to-b dark:from-secondary dark:to-secondary-foreground"
        align="end"
      >
        {partColor.colors.map((colr) => {
          const isActive = partColor.color === colr;
          const bg = `bg-car-${colr}`;
          const brder = isActive ? `border-car-${colr}` : "border-transparent";
          return (
            <DropdownMenuItem key={colr}>
              <Button
                size="icon"
                variant="outline"
                onClick={() => onClick(colr)}
                className={cn("bg-default size-9 rounded-full border-2", brder)}
              >
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full border-2",
                    bg,
                    brder,
                  )}
                >
                  {isActive && <FaCheck className="h-4 w-4 text-white" />}
                </span>
              </Button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
// DO NOT DELETE ---> Colors so that Tailwind can compute dynamic color changes: bg-car-blue bg-car-red bg-car-light-silver bg-car-silver bg-car-black bg-car white bg-car-green bg-car-white border-car-white border-car-silver border-car-blue border-car-red border-car-light-silver border-car-green border-car-black
