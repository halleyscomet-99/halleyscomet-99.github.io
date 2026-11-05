export function HalleyLogo({ compact = false }: { compact?: boolean }) {
    return (
        <span
            className={
                compact
                    ? "font-bold text-lg tracking-tighter text-foreground"
                    : "font-bold text-xl tracking-tighter text-foreground"
            }
        >
            h99.
        </span>
    );
}
