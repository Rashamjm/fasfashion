"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");
  const [priceLkr, setPriceLkr] =
    useState("");
  const [imageUrl, setImageUrl] =
    useState("");
  const [category, setCategory] =
    useState("");
  const [gender, setGender] =
    useState("");
  const [loading, setLoading] =
    useState(false);

  const addProduct = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name,
          description,
          price_lkr: Number(priceLkr),
          price_usd: 0,
          image_url: imageUrl,
          category,
          gender,
          stock: 10,
          featured: false,
        },
      ])
      .select();

    console.log(data);
    console.log(error);

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    alert("✅ Product Added!");

    setName("");
    setDescription("");
    setPriceLkr("");
    setImageUrl("");
    setCategory("");
    setGender("");
    setLoading(false);
  };

  return (
    <main className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="space-y-4">
        <input
          placeholder="Product Name"
          className="w-full border p-4 rounded-xl"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <textarea
          placeholder="Description"
          className="w-full border p-4 rounded-xl"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          placeholder="Price (LKR)"
          className="w-full border p-4 rounded-xl"
          value={priceLkr}
          onChange={(e) =>
            setPriceLkr(e.target.value)
          }
        />

        <input
          placeholder="Image URL"
          className="w-full border p-4 rounded-xl"
          value={imageUrl}
          onChange={(e) =>
            setImageUrl(e.target.value)
          }
        />

        <input
          placeholder="Category"
          className="w-full border p-4 rounded-xl"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <input
          placeholder="Gender"
          className="w-full border p-4 rounded-xl"
          value={gender}
          onChange={(e) =>
            setGender(e.target.value)
          }
        />

        <button
          onClick={addProduct}
          disabled={loading}
          className="bg-black text-white px-8 py-4 rounded-xl w-full"
        >
          {loading
            ? "Adding..."
            : "Add Product"}
        </button>
      </div>
    </main>
  );
}