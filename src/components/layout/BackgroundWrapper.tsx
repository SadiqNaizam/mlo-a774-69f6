import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the BackgroundWrapper component.
 */
interface BackgroundWrapperProps {
  /**
   * The content to be rendered and centered within the wrapper.
   */
  children: React.ReactNode;
  /**
   * Optional additional CSS classes to apply to the wrapper element.
   */
  className?: string;
}

/**
 * A full-page wrapper component that provides a background color and
 * centers its content both vertically and horizontally.
 * It is used as the base layout for pages that need a centered element,
 * like a login or sign-up form.
 */
const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex min-h-screen flex-col items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
