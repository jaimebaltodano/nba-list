interface buttonHook {
  id: string;
  label: string;
  className: string
  handler: () => void;
}
const useButton = () => {
  
  const renderButton = ({ id, label, handler, className }: buttonHook) => {
    return (
      <button className={className} onClick={handler} id={id}>
        {label}
      </button>
    );
  };

  return {
    renderButton,
  }
};

export default useButton;
