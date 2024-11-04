// src/components/ui/use-toast.ts
import { useState } from 'react';
import { json } from 'react-router-dom';
import { toast } from '../../hooks/use-toast';

interface Toast {
  id: number;
  title: string;
  description?: string;
  variant?: string;
}


export const useToast = () => {

    const [toasts, setToasts] = useState<Toast[]>([]);
    let nextId =0;
  const addToast = ({ title, description, variant }: Omit<Toast, 'id'>) => {
    const id = nextId++;
    const newToast = { id, title, description, variant };

    setToasts((prev=> [...prev, newToast]));
    console.log(`Toast added: ${json.stringify(newToast)}`);

  };

  const removeToast = (id: number) => {
    setToast((prev) => prev.filter((toast) => toast.id !== id));
    console.log(`Toast removed: ${id}`);
 
  return { removeToast,toasts, addToast };
  };
}