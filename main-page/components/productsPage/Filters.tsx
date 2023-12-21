import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";

export default function Filters() {
    return (
        <aside className=" w-[25%] shadow-sm  shadow-black/10 backdrop-brightness-150 p-4 h-fit rounded-sm">
            <p className="font-bold text-stone-700 text-3xl mb-5 ">
                Filter Products
            </p>
            <Accordion type="multiple" className="text-lg">
                <AccordionItem value="item-1">
                    <AccordionTrigger>By Categories</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="Category number 1" />
                            Category number 1
                        </label>
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="Category number 1" />
                            Category number 1
                        </label>
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="Category number 1" />
                            Category number 1
                        </label>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>By Price</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="20$-50$" id="20$-50$" />
                            20$ - 50$
                        </label>
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="50$-100$" />
                            50$ - 100$
                        </label>
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="Category number 1" />
                            100$ - 500$
                        </label>
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="500$-5000$" id="500$-5000$" />
                            500$ - 5000$
                        </label>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>By Availability</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="Available" id="Available" />
                            Available
                        </label>
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="On Sale" id="onSale" />
                            On Sale
                        </label>
                        <label className="flex text-md items-center gap-2 font-medium">
                            <Checkbox value="comingSoon" id="comingSoon" />
                            Coming Soon
                        </label>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>
    );
}
