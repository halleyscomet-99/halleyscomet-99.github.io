import { DATA } from "@/app/data";
import {
    Contact,
    Projects,
    Footer,
    GitHubContributions,
    Header,
    Navbar,
    Skills,
} from "@/components/sections";
import { CursorManager } from "@/components/ui/cursor-manager";

export default function Page() {
    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center gap-12 p-8 w-full">
                <Header data={DATA.HEADER} />
                <Projects data={DATA.PROJECTS} />
                <Skills data={DATA.SKILLS} />
                <GitHubContributions />
                <Contact data={DATA.HEADER} />
                <Footer />
            </main>

            <CursorManager />
        </>
    );
}
