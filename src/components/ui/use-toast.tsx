// src/components/ui/use-toast.tsx
import React from 'react';

interface Toast {
  id: number;
  message: string;
}

const toasts: Toast[] = [];
let nextId = 0;

export const useToast = () => {
  const addToast = (message: string) => {
    const id = nextId++;
    toasts.push({ id, message });
    // Optionally, you could implement logic to remove the toast after a timeout
    console.log(`Toast added: ${message}`);
  };

  const removeToast = (id: number) => {
    const index = toasts.findIndex((toast) => toast.id === id);
    if (index !== -1) {
      toasts.splice(index, 1);
      console.log(`Toast removed: ${id}`);
    }
  };

  return { addToast, removeToast };
};