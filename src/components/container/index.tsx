import React, { ReactNode } from "react";

interface ResponsiveContainerProps {
  children: ReactNode;
  /** one of: 'sm' | 'md' | 'lg' | 'xl' | '2xl' — controls max-width */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** disable the horizontal padding if you want full-bleed sections */
  noPadding?: boolean;
  /** if false, won't center horizontally */
  center?: boolean;
  className?: string;
}

/**
 * ResponsiveContainer
 * -------------------
 * Tailwind ile hazırlanmış, tüm ekranlarda sağ/sol boşlukları (padding)
 * ve maksimum genişliği ayarlayan basit ve tekrar kullanılabilir bir container bileşeni.
 *
 * Varsayılan olarak:
 * - responsive horizontal padding: px-4 sm:px-6 md:px-8 lg:px-10
 * - merkezi hizalama (mx-auto)
 * - size = 'lg' (max-w-4xl)
 *
 * Kullanım:
 * <ResponsiveContainer>
 *   <YourContent />
 * </ResponsiveContainer>
 */

const sizeClassMap: Record<
  NonNullable<ResponsiveContainerProps["size"]>,
  string
> = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

export default function ResponsiveContainer({
  children,
  size = "full",
  noPadding = false,
  center = true,
  className = "",
}: ResponsiveContainerProps) {
  const paddingClasses = noPadding
    ? ""
    : "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

  const centerClass = center ? "mx-auto" : "w-full";
  const maxWidthClass = sizeClassMap[size];

  return (
    <div
      className={`${paddingClasses} w-full ${centerClass} ${maxWidthClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/* Example usage:

// src/app/layout.tsx (Next.js app router)
import ResponsiveContainer from '@/components/ResponsiveContainer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ResponsiveContainer>
          <Header />
        </ResponsiveContainer>

        <main>
          <ResponsiveContainer size="2xl">
            {children}
          </ResponsiveContainer>
        </main>

        <ResponsiveContainer>
          <Footer />
        </ResponsiveContainer>
      </body>
    </html>
  )
}

*/
