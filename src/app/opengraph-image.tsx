import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const revalidate = false;
export const alt = "Chenwan Halley Zhong | Roboticist & Musician";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    const skillTags = ["ROS 2", "MoveIt 2", "Computer Vision", "Embodied AI", "HRI", "Music Tech"];
    const supportTags = ["Robotics", "ROS 2", "Computer Vision", "Embedded Systems", "HRI", "Music Tech"];

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    background: "linear-gradient(135deg, #0b0a09 0%, #171512 38%, #0e1015 100%)",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                    color: "#f5f5f4",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "42px 42px",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at 75% 20%, rgba(255,255,255,0.10), transparent 30%), radial-gradient(circle at 32% 80%, rgba(255,255,255,0.07), transparent 26%)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        height: "100%",
                        padding: "54px 60px 46px 60px",
                        gap: "44px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "58%",
                            zIndex: 1,
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                <div
                                    style={{
                                        width: "26px",
                                        height: "26px",
                                        borderRadius: "50%",
                                        background: "#f5f5f4",
                                        color: "#0b0a09",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "10px",
                                        fontWeight: 900,
                                    }}
                                >
                                    h99
                                </div>
                                <span>halleyscomet99.</span>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <div
                                    style={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: "15px",
                                        letterSpacing: "0.13em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    hi there 👋, I&apos;m
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        fontSize: "62px",
                                        lineHeight: 1,
                                        letterSpacing: "-0.06em",
                                        fontWeight: 800,
                                        color: "#f5f5f4",
                                    }}
                                >
                                    <div>Chenwan</div>
                                    <div>Halley</div>
                                    <div>Zhong</div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                    color: "rgba(255,255,255,0.72)",
                                    fontSize: "20px",
                                }}
                            >
                                <div>23, she/her</div>
                                <div>MS in Robotics @ Northwestern University</div>
                                <div>Roboticist · Musician · Builder</div>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "10px",
                                }}
                            >
                                {skillTags.map((tag) => (
                                    <div
                                        key={tag}
                                        style={{
                                            background: "rgba(255,255,255,0.06)",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            borderRadius: "999px",
                                            padding: "7px 12px",
                                            color: "rgba(255,255,255,0.78)",
                                            fontSize: "12px",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    borderRadius: "999px",
                                    padding: "10px 16px",
                                    width: "auto",
                                    color: "#f5f5f4",
                                    fontSize: "13px",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Open to collaboration
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "42%",
                            zIndex: 1,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "18px",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.09)",
                                borderRadius: "20px",
                                padding: "26px 24px",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
                            }}
                        >
                            <div style={{ color: "rgba(255,255,255,0.78)", fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                About me
                            </div>
                            <div
                                style={{
                                    color: "rgba(255,255,255,0.72)",
                                    fontSize: "16px",
                                    lineHeight: 1.6,
                                }}
                            >
                                I build robots designed to survive the transition from lab to the real world — blending robotics, human-centered interaction, and creative engineering.
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <div style={{ color: "rgba(255,255,255,0.78)", fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                    Skills
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {supportTags.map((item) => (
                                        <div
                                            key={item}
                                            style={{
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                padding: "6px 10px",
                                                fontSize: "12px",
                                                color: "rgba(255,255,255,0.74)",
                                            }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <div style={{ color: "rgba(255,255,255,0.78)", fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                    Contributions
                                </div>
                                <div
                                    style={{
                                        color: "rgba(255,255,255,0.72)",
                                        fontSize: "15px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Robotics systems, musical interfaces, interactive prototypes, and research-driven engineering.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
