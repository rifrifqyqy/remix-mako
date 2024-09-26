import { useParams } from "react-router-dom";
import { json } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }) => {
  const { category } = params;
  // Ambil data menu berdasarkan kategori jika perlu
  return json({ category });
};

const Menu = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Menu Kategori: {category}</h1>
      {/* Tambahkan logika untuk menampilkan item menu berdasarkan kategori */}
    </div>
  );
};

export default Menu;
