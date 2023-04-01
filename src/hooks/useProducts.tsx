import { db } from "../firebase";
import { useState } from "react";
import {
  query,
  where,
  getDocs,
  collection,
  limit,
  orderBy,
  Query,
  CollectionReference,
} from "firebase/firestore";

export const useProducts = () => {
  const [productList, setProductList] = useState<any>([]);

  const productsCollectionRef: CollectionReference = collection(db, "products");

  const bestChoiceQuery: Query = query(
    productsCollectionRef,
    where("bestChoice", "==", true)
  );
  const amountQuery: Query = query(
    productsCollectionRef,
    orderBy("amount", "desc")
  );
  const priceFromLowestQuery: Query = query(
    productsCollectionRef,
    orderBy("price", "asc")
  );
  const priceFromHighestQuery: Query = query(
    productsCollectionRef,
    orderBy("price", "desc")
  );

  const getProductList = async (query: Query) => {
    try {
      const data = await getDocs(query);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      setProductList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    productList,
    getProductList,
    bestChoiceQuery,
    amountQuery,
    priceFromLowestQuery,
    priceFromHighestQuery,
  };
};
