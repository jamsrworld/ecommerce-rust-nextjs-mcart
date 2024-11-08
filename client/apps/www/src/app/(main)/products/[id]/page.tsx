import { getProduct } from "@/client";
import { FetchError } from "@repo/components/fetch-error";
import { ProductCompanyInfo } from "./_lib/components/company-info";
import { ProductExtraDetails } from "./_lib/components/extra-details";
import { ProductBreadcrumb } from "./_lib/components/product-breadcrumb";
import { ProductDetails } from "./_lib/components/product-details";
import { ProductFeatures } from "./_lib/components/product-features";
import { ProductImages } from "./_lib/components/product-images";
import { ProductInfo } from "./_lib/components/product-info";

type Params = Promise<{ id: string }>;

type Props = {
  params: Params;
};

const page = async (props: Props) => {
  const { id } = await props.params;
  const { data, error } = await getProduct({
    path: {
      id,
    },
  });
  if (error) return <FetchError error={error} />;
  return (
    <div className="flex flex-col gap-8 p-2 pr-3 md:gap-24">
      <section className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <ProductImages images={data.images} />
        </div>
        <div className="flex flex-col gap-2 md:col-span-5">
          <ProductBreadcrumb />
          <ProductDetails />
          <ProductFeatures />
          <ProductInfo />
        </div>
      </section>
      <section className="container mx-auto max-w-screen-lg">
        <ProductExtraDetails />
      </section>
      <section className="container mx-auto max-w-screen-lg py-6 md:py-24">
        <ProductCompanyInfo />
      </section>
    </div>
  );
};

export default page;
