interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="flex flex-col justify-start items-center w-full max-w-[1300px]">
        {children}
      </div>
    </div>
  );
}
