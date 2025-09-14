// src/components/toast/index.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Toast = {
  id: number;
  msg: string;
  icon?: ReactNode;
};

type ToastContextType = {
  addToast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, ...toast }]);

    // 3sn sonra kaldır
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50 font-kode text-sm">
        <AnimatePresence>
          {toasts.map(({ id, msg, icon }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 px-6 py-3 rounded-lg bg-black border text-white shadow-lg"
            >
              {icon && <span>{icon}</span>}
              <span>{msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
