import UserTabs from "@/components/UserTabs";

export default function MenuItemsPage() {
  return (
    <section className="mt-8 max-w-lg mx-auto">
      <UserTabs isAdmin={true} />
      Menu 
    </section>
  );
}