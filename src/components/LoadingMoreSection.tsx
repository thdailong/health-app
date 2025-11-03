import Button from "./Button";

interface Props {
  text: string;
  className?: string;
}
const LoadingMoreSection = (props: Props) => {
  const { text, className = "" } = props;
  return (
    <div className={`flex items-center ${className}`}>
      <Button
        variant="gradient"
        className="w-full max-w-[296px] h-14 mx-auto px-2 font-light"
      >
        {text}
      </Button>
    </div>
  );
};

export default LoadingMoreSection;
