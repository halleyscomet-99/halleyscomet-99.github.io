import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chenwan Halley Zhong | Roboticist & Musician";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#0a0a0a",
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* subtle grid lines */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    display: "flex",
                }} />

                {/* left accent bar */}
                <div style={{
                    position: "absolute",
                    left: "72px",
                    top: "0",
                    width: "1px",
                    height: "100%",
                    background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)",
                    display: "flex",
                }} />

                {/* left column */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "60px 60px 60px 108px",
                    width: "560px",
                    flexShrink: 0,
                    gap: "0px",
                }}>
                    {/* url pill */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "8px",
                        padding: "8px 16px",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "14px",
                        letterSpacing: "0.02em",
                        marginBottom: "36px",
                        width: "fit-content",
                        fontFamily: "monospace",
                    }}>
                        halleyscomet-99.github.io
                    </div>

                    {/* name */}
                    <div style={{
                        fontSize: "64px",
                        fontWeight: "700",
                        color: "#ffffff",
                        lineHeight: "1.0",
                        letterSpacing: "-0.02em",
                        marginBottom: "16px",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <span>CHENWAN</span>
                        <span>HALLEY</span>
                        <span>ZHONG</span>
                    </div>

                    {/* role */}
                    <div style={{
                        fontSize: "18px",
                        color: "rgba(255,255,255,0.45)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "40px",
                        display: "flex",
                    }}>
                        Roboticist · Musician
                    </div>

                    {/* tags */}
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {["ROS 2", "MoveIt 2", "Computer Vision", "Northwestern"].map((tag) => (
                            <div key={tag} style={{
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "6px",
                                padding: "5px 12px",
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "12px",
                                letterSpacing: "0.04em",
                                display: "flex",
                            }}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* divider */}
                <div style={{
                    width: "1px",
                    height: "100%",
                    background: "rgba(255,255,255,0.08)",
                    flexShrink: 0,
                    display: "flex",
                }} />

                {/* right column — site mockup */}
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "48px 48px 48px 52px",
                    gap: "20px",
                    justifyContent: "center",
                }}>
                    {/* mock navbar */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                    }}>
                        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: "600", display: "flex" }}>halley.</div>
                        <div style={{ display: "flex", gap: "24px" }}>
                            {["experience", "projects", "logs"].map(item => (
                                <div key={item} style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "0.04em", display: "flex" }}>{item}</div>
                            ))}
                        </div>
                    </div>

                    {/* mock header block */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", display: "flex" }}>hi there 👋, I&apos;m</div>
                        <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.01em", display: "flex" }}>Chenwan Halley Zhong</div>
                        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "2px" }}>
                            <span>23, she/her</span>
                            <span>MS in Robotics @ Northwestern University | Musician</span>
                        </div>
                        <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                            <div style={{ background: "#ffffff", color: "#000000", fontSize: "11px", fontWeight: "600", padding: "5px 12px", borderRadius: "6px", display: "flex" }}>Resume</div>
                            {["✉", "⌥", "in"].map(icon => (
                                <div key={icon} style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", fontSize: "11px", padding: "5px 10px", borderRadius: "6px", display: "flex" }}>{icon}</div>
                            ))}
                        </div>
                    </div>

                    {/* mock about me section */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "500", display: "flex" }}>overview.</div>
                        <div style={{
                            color: "rgba(255,255,255,0.3)",
                            fontSize: "11px",
                            lineHeight: "1.6",
                            display: "flex",
                            maxWidth: "460px",
                        }}>
                            Building autonomous systems with ROS 2, MoveIt 2, and computer vision. Passionate about robots that survive the lab-to-real-world transition.
                        </div>
                    </div>

                    {/* mock project cards row */}
                    <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                        {[
                            { name: "Bug Catcher", tag: "ROS 2 · Vision" },
                            { name: "Vocal2Piano", tag: "ML · Embedded" },
                            { name: "NuTurtle", tag: "SLAM · C++" },
                        ].map(p => (
                            <div key={p.name} style={{
                                flex: 1,
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "8px",
                                padding: "10px 12px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                            }}>
                                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", fontWeight: "600", display: "flex" }}>{p.name}</div>
                                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", display: "flex" }}>{p.tag}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}