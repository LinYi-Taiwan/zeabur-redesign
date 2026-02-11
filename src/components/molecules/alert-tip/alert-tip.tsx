export interface AlertTipProps {
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  text: string;
}

export function AlertTip({
  icon: Icon,
  iconColor,
  bgColor,
  borderColor,
  text,
}: AlertTipProps) {
  return (
    <div
      className="flex gap-sm rounded-sm px-md py-sm"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Icon
        className="w-3.5 h-3.5 shrink-0 mt-0.5"
        style={{ color: iconColor }}
      />
      <p className="text-label-sm leading-[1.4] text-on-surface-variant">
        {text}
      </p>
    </div>
  );
}
