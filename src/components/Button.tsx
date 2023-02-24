type Props = {
    label: string;
    disabled: boolean;
    handleClick(): void;
};

export function Button({ label, handleClick, disabled }: Props) {
    return (
        <button className={`tracking-[0.125rem] py-3 bg-orange w-full h-[45px] cursor-pointer disabled:cursor-default
        rounded-3xl font-bold text-[15px] uppercase disabled:opacity-75 leading-[18px]`} type={"button"} onClick={handleClick} disabled={disabled}>{label}</button>
    );
}