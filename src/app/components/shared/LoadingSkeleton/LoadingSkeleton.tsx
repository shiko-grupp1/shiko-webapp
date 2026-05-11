import styles from "./LoadingSkeleton.module.css";

type LoadingSkeletonProps = {
  loading?: boolean;
  className?: string;
  preLoadingClassName?: string;
  children?: React.ReactNode;
  label?: string;
};

export default function LoadingSkeleton({
  loading = true,
  className = "",
  preLoadingClassName = "",
  children,
  label,
}: LoadingSkeletonProps) {
  return (
    <section
      className={`
        ${styles.loadingSkeleton} 
        ${loading ? `${styles.active} ${preLoadingClassName}` : styles.smoothTransition} 
        ${className}
      `}
      aria-busy={loading}
      aria-live="polite"
    >
      {loading ? <span className="sr-only">{label}</span> : children}
    </section>
  );
}
