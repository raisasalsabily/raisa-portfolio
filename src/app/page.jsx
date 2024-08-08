import ShortProfile from "@/components/landing_page/ShortProfile";

export default function Home() {
  return (
    <main className="font-sourceCodePro text-b-sm flex flex-col">
      <nav className="sticky top-0 bg-white h-16 w-full"></nav>

      {/* ----------------- short profile start -----------------*/}
      <ShortProfile />
      {/* ----------------- short profile end -----------------*/}

      {/* ----------------- skills start -----------------*/}
      <div>
        SKILSSS SKILSSS SKILSSS SKILSSS SKILSSS SKILSSS SKILSSS SKILSSS
        SKILSSSSKILSSSSKILSSSSKILSSSSKILSSS
      </div>
      {/* ----------------- skills end -----------------*/}
    </main>
  );
}
