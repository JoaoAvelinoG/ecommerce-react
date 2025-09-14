type ContainerFullProps = {
  className?: string;
  children: React.ReactNode;
};

export const ContainerFull = ({
  className = '',
  children,
}: ContainerFullProps) => {
  return (
    <div className={`w-full max-w-full mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};
