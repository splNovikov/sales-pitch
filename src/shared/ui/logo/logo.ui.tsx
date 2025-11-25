import clsx from 'clsx';
import logoImage from './logo.png';
import styles from './logo.module.css';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <img src={logoImage} alt="Logo" className={clsx(styles.logo, className)} />
  );
}
