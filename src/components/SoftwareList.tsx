import React from 'react';
import { Software } from '../types';
import { Download } from 'lucide-react';

interface SoftwareListProps {
  software: Software[];
}

const SoftwareList: React.FC<SoftwareListProps> = ({ software }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {software.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-500">
                {item.category} | {item.os}
              </span>
              <a
                href={item.downloadUrl}
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                <Download className="mr-2" size={16} />
                Download
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftwareList;