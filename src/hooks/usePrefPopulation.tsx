import { useState } from "react";
import axios from "axios";

export function usePrefPopulation() {
  const [prefPopulation, setPrefPopulation] = useState<
    {
      prefName: string;
      data: { label: string; data: { year: number; value: number }[] }[];
    }[]
  >([]);
  const [labelId, setLabelId] = useState(0);
}
