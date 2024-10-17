import { Term } from '@/features/term';
import { Text } from 'mau-ds-ui';
import React from 'react';

export const TermParts: React.FC<{ term: Term, readonly: boolean }> = ({ term, readonly }) => {

  return (
    <div>
      <Text id="name_jp" key="name_jp" label='用語（和名）' value={term.nameJp} readOnly={readonly} /><br /><br />
      <Text id="name_en" key="name_en" label='用語（英名）' value={term.nameEn} readOnly={readonly} /><br /><br />
      <Text id="short-name" key="short-name" label='用語（略称）' value={term.shortName} readOnly={readonly} /><br /><br />
      <Text id="description" key="description" label='説明' value={term.description} readOnly={readonly} /><br /><br />
    </div>
  );
};
