import type { PhoneScreen } from "@/app/types";

/** An iPhone drawn in the page, sized to its width (cqw): a titanium edge, a black bezel, the screen and the Dynamic
 *  Island, drawn a little larger than a simulator's so it covers one a screenshot already has. A web page captured
 *  without a status bar gets one. */
export function IPhone({ screen, className = "", eager = false }: { screen: PhoneScreen; className?: string; eager?: boolean }) {
  return (
    <div className={`@container ${className}`}>
      <div className="relative aspect-[71.5/149.6] rounded-[15.5cqw] bg-gradient-to-br from-[#a1a1a6] via-[#4d4d52] to-[#8e8e93] p-[1.1cqw] shadow-[0_3cqw_8cqw_rgba(0,0,0,0.6)]">
        <div className="size-full rounded-[14.4cqw] bg-black p-[3.4cqw]">
          <div className="relative flex size-full flex-col overflow-hidden rounded-[11.2cqw] bg-black">
            {screen.statusBar && (
              <div aria-hidden="true" className="flex h-[12.5cqw] shrink-0 items-center justify-between px-[8.5cqw] pt-[1cqw] text-[3.9cqw] font-semibold tracking-normal text-white">
                <span>9:41</span>
                <span className="flex items-center gap-[1.2cqw]">
                  <span className="flex items-end gap-[0.4cqw]">
                    {[1.4, 2, 2.6, 3.2].map((h) => (
                      <span key={h} className="w-[0.8cqw] rounded-[0.2cqw] bg-white" style={{ height: `${h}cqw` }} />
                    ))}
                  </span>
                  <span className="relative h-[3.2cqw] w-[6.4cqw] rounded-[1cqw] border-[0.35cqw] border-white/50 p-[0.35cqw]">
                    <span className="block size-full rounded-[0.5cqw] bg-white" />
                  </span>
                </span>
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screen.src}
              alt={screen.alt}
              loading={eager ? "eager" : "lazy"}
              className="block min-h-0 w-full flex-1 object-cover object-top"
            />
            <span aria-hidden="true" className="absolute left-1/2 top-[2.4cqw] h-[7.8cqw] w-[27.5cqw] -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
