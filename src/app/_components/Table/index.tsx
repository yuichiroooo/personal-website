import { Researches } from "@/app/_constants/constants"
import { FaFilePdf } from "react-icons/fa"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Table() {
    return (
        <main>
            {Researches.map((value, index) => (
                <div key={index} className="flex justify-center mt-4">
                    <Card className="w-1/2">
                        <CardHeader>
                            <CardTitle>{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{value.authors}</p>
                            <p>{value.conference}, {value.year}</p>
                            <div className="flex">
                                <FaFilePdf className="mt-1" />
                                <a href={value.pageUrl} className="underline" target="_blank" rel="noopener noreferrer">Paper</a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </main>
    )
}