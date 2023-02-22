import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import Create from "../../../src/components/units/create/Create.container";

export default function CreatePage() {
  useAuth();
  return <Create isEdit={false} />;
}
