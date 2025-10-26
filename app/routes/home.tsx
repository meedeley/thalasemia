import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "Edukasi Thalasemia - Sehati Bersama" },
    {
      name: "description",
      content:
        "Pelajari tentang Thalasemia, penyebab, gejala, dan pencegahannya untuk hidup lebih sehat.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
