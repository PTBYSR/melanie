import Link from "next/link";

import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.slug} >
          <Link href={`sandbox/categories/${category.slug}`}>
            <a className="hover:bg-[#d0d0d0]">
              <Category {...category} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}