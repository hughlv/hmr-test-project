'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';

// This is a simple component to test HMR behavior
export function HmrTest() {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(false);
  
  // This effect simulates complex data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('HmrTest component mounted');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function that returns an array to test HMR with array returns
  const getItems = () => {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
  };
  
  const items = getItems();
  
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">HMR Test Component</h2>
      
      <div className="flex items-center space-x-2 mb-4">
        <Switch checked={enabled} onCheckedChange={setEnabled} />
        <span>Toggle is {enabled ? 'ON' : 'OFF'}</span>
      </div>
      
      <div className="mb-4">
        <p>Count: {count}</p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Items:</h3>
        <ul className="list-disc pl-5">
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
