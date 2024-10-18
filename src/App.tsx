import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download } from 'lucide-react';
import SoftwareList from './components/SoftwareList';
import Pagination from './components/Pagination';
import CategoryFilter from './components/CategoryFilter';
import { Software, Category, OS } from './types';
import { extendedMockSoftwareData } from './mockData';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedOS, setSelectedOS] = useState<OS | null>(null);
  const [softwareList, setSoftwareList] = useState<Software[]>([]);

  const itemsPerPage = 20;

  useEffect(() => {
    // In a real application, you would fetch data from an API here
    setSoftwareList(extendedMockSoftwareData);
  }, []);

  useEffect(() => {
    // Apply dark mode class to the document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredSoftware = softwareList.filter((software) => {
    if (selectedCategory && software.category !== selectedCategory) {
      return false;
    }
    if (selectedOS && software.os !== selectedOS) {
      return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredSoftware.length / itemsPerPage);
  const currentSoftware = filteredSoftware.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center">
            <Download className="mr-2" />
            Freeware Hub
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          selectedOS={selectedOS}
          onCategoryChange={setSelectedCategory}
          onOSChange={setSelectedOS}
        />

        <SoftwareList software={currentSoftware} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 Freeware Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;