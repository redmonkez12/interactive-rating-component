import clsx from "clsx";

type Props = {
    value: number;
    handleClick(value: number): void;
    selectedValue: number;
};

export function Rating({ value, selectedValue, handleClick }: Props) {
    const isSelected = value === selectedValue;

    return (
        <div
            className={clsx(`flex cursor-pointer
            items-center justify-center rounded-full text-mediumGrey font-bold lg:h-[51px] lg:w-[51px]
            bg-darkBlue hover:bg-orange hover:text-white
            h-[42px] w-[42px]`, { "text-white bg-mediumGrey": isSelected })}
            onClick={() => handleClick(value)}>{value}</div>
    );
}