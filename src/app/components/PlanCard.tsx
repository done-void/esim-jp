type Plan = {
  name: string;
  gb: number;
  days: number;
  price: number;
  link: string;
};

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="rounded-xl border p-4 shadow hover:shadow-lg transition">
      <h3 className="font-bold">{plan.name}</h3>
      <p className="mt-1">{plan.gb} GB / {plan.days} 日</p>
      <p className="mt-2 text-xl font-semibold">¥{plan.price.toLocaleString()}</p>
      <a
        href={plan.link}
        target="_blank"
        className="mt-3 inline-block rounded bg-indigo-600 px-4 py-2 text-white"
      >
        今すぐ購入
      </a>
    </div>
  );
}
