import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import BrandPage from "../../src/components/units/brand/Brand.container";

export default function CreaditPage() {
  useAuth();
  return <BrandPage />;
}
