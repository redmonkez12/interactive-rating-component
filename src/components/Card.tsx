import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function Card({ children }: Props) {
    return (
        <div className={"py-8 px-7 text-white rounded-[30px] gradient max-w-[412px]"}>
            {children}
        </div>
    );
}
