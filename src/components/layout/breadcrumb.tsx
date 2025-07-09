'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const pathname = usePathname();

  // Auto-generate breadcrumbs from pathname if items not provided
  const breadcrumbItems = items || generateBreadcrumbs(pathname);

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav className={cn('flex items-center space-x-1 text-sm text-muted-foreground', className)}>
      <Link
        href="/dashboard"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4" />
          {index === breadcrumbItems.length - 1 ? (
            <span className="font-medium text-foreground">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Skip the first segment if it's 'dashboard'
  const startIndex = segments[0] === 'dashboard' ? 1 : 0;

  for (let i = startIndex; i < segments.length; i++) {
    const segment = segments[i];
    const href = '/' + segments.slice(0, i + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);

    breadcrumbs.push({ label, href });
  }

  return breadcrumbs;
}
