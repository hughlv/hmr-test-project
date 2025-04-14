'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';

// This component specifically tests array handling and JSX rendering
// to isolate HMR issues similar to those in the speech page
export function ArrayTest() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Function that returns an array, similar to filterVoicesByTags
  const getFilteredItems = (tags: string[]) => {
    const allItems = [
      { id: '1', name: 'Item 1', tags: ['tag1', 'tag2'] },
      { id: '2', name: 'Item 2', tags: ['tag2', 'tag3'] },
      { id: '3', name: 'Item 3', tags: ['tag1', 'tag3'] },
      { id: '4', name: 'Item 4', tags: ['tag4'] },
      { id: '5', name: 'Item 5', tags: ['tag1', 'tag4'] },
    ];
    
    if (tags.length === 0) return allItems;
    
    return allItems.filter(item => 
      tags.some(tag => item.tags.includes(tag))
    );
  };
  
  // All available tags
  const allTags = ['tag1', 'tag2', 'tag3', 'tag4'];
  
  // Get filtered items based on selected tags
  const filteredItems = getFilteredItems(selectedTags);
  
  // Toggle a tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Array Handling Test</h2>
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Filter by tags:</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Filtered Items ({filteredItems.length}):</h3>
        <ul className="space-y-2">
          {filteredItems.map(item => (
            <li 
              key={item.id}
              className="p-2 bg-gray-100 rounded flex justify-between"
            >
              <span>{item.name}</span>
              <div className="flex gap-1">
                {item.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 py-0.5 bg-gray-200 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
