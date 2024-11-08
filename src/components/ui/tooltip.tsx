// components/ui/tooltip.tsx
import React, { createContext, useContext, useState } from 'react';

interface TooltipContextType {
  showTooltip: (message: string) => void;
  hideTooltip: () => void;
  tooltipMessage: string;
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tooltipMessage, setTooltipMessage] = useState<string>('');

  const showTooltip = (message: string) => {
    setTooltipMessage(message);
  };

  const hideTooltip = () => {
    setTooltipMessage('');
  };

  return (
    <TooltipContext.Provider value={{ showTooltip, hideTooltip, tooltipMessage }}>
      {children}
      {tooltipMessage && <div className="tooltip">{tooltipMessage}</div>}
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
};