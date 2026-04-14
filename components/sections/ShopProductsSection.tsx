import SectionReveal from "@/components/ui/SectionReveal";
import { Product } from "@/lib/types";
import Image from "next/image";

type ShopProductsSectionProps = {
  products: Product[];
};

export default function ShopProductsSection({
  products,
}: ShopProductsSectionProps) {
  return (
    <SectionReveal className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto mt-[-80] max-w-7xl">
        <h2 className="section-title">Shop</h2>
        <p className="section-subtitle mt-2 text-sm uppercase tracking-[0.14em]">
          Shop Out latest gear and support the team!
        </p>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[color:var(--title-color)] to-[color:var(--subtitle-color)] p-[2px] shadow-[var(--panel-shadow)]">
          <div className="rounded-2xl bg-[color:var(--surface)] p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-xl border border-[color:var(--outline-soft)]/45 bg-[color:var(--background)]"
                >
                  <div className="relative h-44 w-full border-b border-[color:var(--outline-soft)]/35 bg-[color:var(--surface-soft)]">
                    <Image
                      src={product.image}
                      alt={`${product.name} placeholder image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--title-color)]">
                      {product.name}
                    </p>
                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-[color:var(--subtitle-color)]">
                      {product.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
