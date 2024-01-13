import { motion } from 'framer-motion';

interface HamburguerMenuButtonProps {
  className?: string;
  color?: string;
  height?: number;
  width?: number;
  isOpen: boolean;
  onClick: () => void;
}

const Path = (props: any) => <motion.path strokeWidth={2} {...props} />;

const HamburguerMenuButton = ({
  className = '',
  color = '#FFFFFF',
  height = 36,
  width = 36,
  isOpen,
  onClick,
}: HamburguerMenuButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M3 5L21 5', stroke: color },
            open: { d: 'M3 5L18 19', fill: color },
          }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M3 12L21 12', stroke: color },
            open: { d: 'M3 12L3 12', fill: color },
          }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M3 19L21 19', stroke: color },
            open: { d: 'M3 19L18 5', fill: color },
          }}
        />
      </svg>
    </button>
  );
};

export default HamburguerMenuButton;
