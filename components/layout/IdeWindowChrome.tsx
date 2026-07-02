export function IdeWindowChrome() {
  return (
    <div className="flex items-center justify-between border-b border-ide-border bg-ide-titlebar px-4 py-2.5">
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <p className="font-mono text-xs text-gray-500">
        daniel-sousa ~ portfolio.dev
      </p>
      <div className="w-[52px]" aria-hidden="true" />
    </div>
  );
}
