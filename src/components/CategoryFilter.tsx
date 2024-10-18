import React from 'react';
import { Category, OS } from '../types';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  selectedOS: OS | null;
  onCategoryChange: (category: Category | null) => void;
  onOSChange: (os: OS | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  selectedOS,
  onCategoryChange,
  onOSChange,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.values(Category).map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded ${
            selectedCategory === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          All Categories
        </button>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Operating Systems</h2>
      <div className="flex flex-wrap gap-2">
        {Object.values(OS).map((os) => (
          <button
            key={os}
            onClick={() => onOSChange(os)}
            className={`px-4 py-2 rounded ${
              selectedOS === os
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            {os}
          </button>
        ))}
        <button
          onClick={() => onOSChange(null)}
          className={`px-4 py-2 rounded ${
            selectedOS === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          All OS
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;