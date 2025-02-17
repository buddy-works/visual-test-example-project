import { Button } from './Button';

export interface LongProps {
  onButtonClick?: (index: number) => void;
}

export const Long = ({
  onButtonClick
}: LongProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {Array.from({length: 20}, (_, i) => (
        <Button
          key={i}
          label={`Button ${i + 1}`}
          size="medium"
          onClick={() => onButtonClick?.(i)}
        />
      ))}
    </div>
  );
};
