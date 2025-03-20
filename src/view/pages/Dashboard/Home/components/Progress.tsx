import { Progress as RadixProgress } from "@radix-ui/react-progress";

export function Progress({ value, className }: { value: number; className?: string }) {
  return <RadixProgress value={value} className={className} />
}

