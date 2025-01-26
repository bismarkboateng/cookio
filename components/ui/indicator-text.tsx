import Text from "./text";

export default function IndicatorText({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="w-3 h-3 rounded-full border-2 border-green" />
      <Text variant="div" className="text-green font-medium">
        {title}
      </Text>
    </div>
  );
}
