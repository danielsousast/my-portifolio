import { cn } from "@/lib/utils";

interface TerminalPromptProps {
  command: string;
  className?: string;
}

export function TerminalPrompt({ command, className }: TerminalPromptProps) {
  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-1 font-mono text-sm text-gray-600",
        className,
      )}
    >
      <span className="text-ide-code-green">$</span>
      <span>{command}</span>
      <span
        className="ml-0.5 inline-block h-4 w-2 bg-ide-code-green animate-blink-cursor"
        aria-hidden="true"
      />
    </div>
  );
}
