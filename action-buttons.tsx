import { Button } from "@/components/ui/button"

export function ActionButtons() {
  return (
    <div className="px-4 py-4 flex gap-3">
      <Button
        variant="outline"
        className="flex-1 h-auto py-4 px-4 rounded-xl border-2 border-indigo-500/30 bg-card hover:bg-indigo-500/10 hover:border-indigo-500 transition-all"
        asChild
      >
        <a href="#" className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 w-full">
            <svg className="h-8 w-8" viewBox="0 0 24 24">
              <path
                fill="#34A853"
                d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
              />
              <path fill="#FBBC04" d="M3.609 1.814L13.792 12l3.06-3.06-9.068-5.218-4.175 2.092z" />
              <path fill="#EA4335" d="M16.852 8.94L20.955 11.1a1 1 0 0 1 0 1.8l-4.103 2.16L13.792 12l3.06-3.06z" />
              <path fill="#4285F4" d="M13.792 12l3.06 3.06-9.068 5.218L3.609 22.186 13.792 12z" />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium text-muted-foreground">Download Our Mobile App</span>
              <span className="text-sm font-bold text-foreground">Click Here →</span>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">Google Play</span>
        </a>
      </Button>

      <Button
        variant="outline"
        className="flex-1 h-auto py-4 px-4 rounded-xl border-2 border-indigo-500/30 bg-card hover:bg-indigo-500/10 hover:border-indigo-500 transition-all"
        asChild
      >
        <a
          href="https://t.me/marufitz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 w-full">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#0088cc" />
              <path
                d="M17.7 6.3l-2.1 10.5c-.2.8-.6 1-1.2.6l-3.4-2.5-1.6 1.6c-.2.2-.4.4-.8.4l.3-3.7 7.5-6.8c.3-.3-.1-.4-.5-.2L7.4 12.4l-3.3-1c-.7-.2-.7-.7.2-1.1l12.9-5c.6-.2 1.1.2.9 1z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium text-muted-foreground">Giveaway & Offer Update</span>
              <span className="text-sm font-bold text-blue-500">Join Telegram</span>
            </div>
          </div>
        </a>
      </Button>
    </div>
  )
}
