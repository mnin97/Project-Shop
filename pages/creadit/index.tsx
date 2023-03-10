import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import CreaditModal from "../../src/components/units/creadit/Creadit.index";

export default function CreaditPage() {
  useAuth();
  return <CreaditModal />;
}
