"use client";

const TOAST_ID = "email-copied-toast";

function showToast(message: string) {
    document.getElementById(TOAST_ID)?.remove();

    const toast = document.createElement("div");
    toast.id = TOAST_ID;
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    const icon = document.createElement("span");
    icon.textContent = "✓";
    Object.assign(icon.style, {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
        borderRadius: "999px",
        background: "#22c55e",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "700",
        flexShrink: "0",
    } satisfies Partial<CSSStyleDeclaration>);

    const text = document.createElement("span");
    text.textContent = message;

    toast.append(icon, text);
    Object.assign(toast.style, {
        position: "fixed",
        left: "50%",
        top: "24px",
        transform: "translateX(-50%) translateY(-16px) scale(0.95)",
        zIndex: "10000",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        borderRadius: "12px",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "1.4",
        background: "hsl(var(--primary) / 0.75)",
        color: "hsl(var(--primary-foreground))",
        border: "1px solid hsl(var(--primary-foreground) / 0.12)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        opacity: "0",
        transition:
            "opacity 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        pointerEvents: "none",
        maxWidth: "calc(100vw - 32px)",
        wordBreak: "break-all",
    } satisfies Partial<CSSStyleDeclaration>);
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0) scale(1)";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform =
            "translateX(-50%) translateY(-16px) scale(0.95)";
        setTimeout(() => toast.remove(), 300);
    }, 250);
}

async function copyText(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // Fallback for non-secure contexts / older browsers
        try {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            const ok = document.execCommand("copy");
            textarea.remove();
            return ok;
        } catch {
            return false;
        }
    }
}

/**
 * Opens an external link. `mailto:` links copy the address to the
 * clipboard and show a toast instead (mail clients are often not set up).
 */
export function openLink(url: string) {
    if (url.startsWith("mailto:")) {
        void copyEmail(url);
        return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
}

/** Copies the address of a `mailto:` link (or any text) and shows a toast. */
export async function copyEmail(url: string) {
    const email = url.replace(/^mailto:/, "").split("?")[0];
    const copied = await copyText(email);
    showToast(copied ? `Email copied! ${email}` : `Copy this email: ${email}`);
}
