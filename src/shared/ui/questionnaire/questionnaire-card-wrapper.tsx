import React from 'react';

interface QuestionnaireCardWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component for questionnaire cards with max width constraint
 * Centers the card and limits its width to 800px
 */
export function QuestionnaireCardWrapper({
  children,
}: QuestionnaireCardWrapperProps) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {children}
    </div>
  );
}
