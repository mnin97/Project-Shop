import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import Create from "../../../../src/components/units/create/Create.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();
  // if (typeof router.query.useditemId !== "string") {
  //   console.log("잘못된 접근");
  //   return <></>;
  // }

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  console.log(data);

  return <Create isEdit={true} data={data} />;
}
