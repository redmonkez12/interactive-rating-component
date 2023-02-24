import Image from "next/image";

import { Card } from "@/components/Card";

export default function ThankYouPage() {
    return (
        <Card>
            <div className={"flex flex-col items-center p-3"}>
                <Image src={"/images/illustration-thank-you.svg"} width={162} height={108} alt={"image"}/>

                <div className={"text-orange bg-darkBlue rounded-[23px] px-8 py-1 font-[15px] mt-9"}>You selected 4 out of 5</div>

                <h1 className={"text-3xl mt-[32px] mb-2"}>Thank you!</h1>

                <p className={"text-lightGrey text-sm text-center"}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </Card>
    );
}