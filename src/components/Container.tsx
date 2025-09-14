type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ className = '', children }: ContainerProps) => {
  return <div className={`max-w-[80rem] mx-auto ${className}`}>{children}</div>;
};
