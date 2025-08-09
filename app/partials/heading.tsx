import Text from "./text";

const Heading = ({ text }: { text: string }) => {
  return (
    <div className="relative z-10 text-center my-8">
      <Text role="Hero">{text}</Text>
    </div>
  );
};

export default Heading;
