"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { Rating } from "@/components/Rating";
import { Card } from "@/components/Card";

const ratings = new Array(5).fill(0).map((_, index) => index + 1);

export default function Home() {
    const router = useRouter();

    const [selectedOption, chooseOption] = useState(-1);

    function chooseRating() {
        router.push("/thank-you");
    }

    return (
        <Card>
            <div className={"rounded-full bg-darkBlue h-12 w-12 flex items-center justify-center"}>
                <Image src={"/images/icon-star.svg"} width={16} height={16} alt={"Star"}/>
            </div>

            <h1 className={"text-3xl mt-[30px]"}>How did we do?</h1>

            <p className={"text-lightGrey text-sm mt-1.5"}>Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!</p>

            <div className={"flex justify-between mb-9 mt-6"}>
                {ratings.map((value) => (
                    <Rating key={value} value={value} handleClick={chooseOption} selectedValue={selectedOption}/>
                ))}
            </div>

            <Button handleClick={chooseRating} label={"Submit"} disabled={selectedOption < 0}/>
        </Card>
    )
}
