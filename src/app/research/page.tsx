import { Researches } from "../_constants/constants"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Research() {
    return (
        <main>
            {Researches.map((value, index) => (
                <div key={index} className="flex justify-center">
                    <Card className="w-2/3">
                        <CardHeader>
                            <CardTitle>{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{value.authors}</p>
                            <p>{value.conference}, {value.year}</p>
                            <a href={value.pageUrl} className="underline" target="_blank" rel="noopener noreferrer">[Paper]</a>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </main>
    )
}