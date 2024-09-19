import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[16rem_1fr] h-full ">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </main>
  );
}
