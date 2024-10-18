import { Term } from '@/features/term';
import { Text } from 'mau-ds-ui';
import React from 'react';

/**
 * 用語部品プロパティ。
 */
export type TermPartsProps = {
  /** 表示する用語 */
  term: Term;
  /** 属性変更時のイベント */
  onChangeAttribute: (field: string, value: string) => void;
  /** 読み取り専用(default: false) */
  readonly?: boolean;
}

/**
 * 用語部品
 * @param param0 用語部品プロパティ
 * @returns 用語部品
 */
export const TermParts: React.FC<TermPartsProps> = ({ term, onChangeAttribute, readonly = false }) => {
  return (
    <div key={`term-${term.id}`}>
      <Text key={`nameJp-${term.id}`} label='用語（和名）' value={term.nameJp} readOnly={readonly}
        onChange={(event) => onChangeAttribute("nameJp", event.target.value)} /><br /><br />
      <Text key={`nameEn-${term.id}`} label='用語（英名）' value={term.nameEn} readOnly={readonly}
        onChange={(event) => onChangeAttribute("nameEn", event.target.value)} /><br /><br />
      <Text key={`shortName-${term.id}`} label='用語（略称）' value={term.shortName} readOnly={readonly}
        onChange={(event) => onChangeAttribute("shortName", event.target.value)} /><br /><br />
      <Text key={`description-${term.id}`} label='説明' value={term.description} readOnly={readonly}
        onChange={(event) => onChangeAttribute("description", event.target.value)} /><br /><br />
    </div>
  );
};
