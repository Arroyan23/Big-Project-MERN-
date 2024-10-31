// halaman untuk detail pada user
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailCard } from "../components/detail/detail";
import { LoadingElementsss } from "../components/detail/loading";

export const DetailUser = () => {
  const { id } = useParams();

  return (
    <>
      <DetailCard id={id} />
    </>
  );
};
