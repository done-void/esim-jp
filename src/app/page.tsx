import plans from '@/app/data/plans.json';
import PlanCard from '@/app/components/PlanCard';

type Plan = {
  name: string;
  gb: number;
  days: number;
  price: number;
  link: string;
};

export default function Home() {
  const typedPlans = plans as Plan[];

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-6">日本旅行 eSIM ストア</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {typedPlans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>
      <footer className="mt-10 text-xs text-gray-500">
        ★本サイトは Airalo アフィリエイトを利用しています。<br />
        通信提供者は Airalo Pte. Ltd. です。
      </footer>
    </main>
  );
}
