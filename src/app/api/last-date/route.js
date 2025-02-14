import { NextResponse} from "next/server";
import data from "../get-data/pr.js"

const prisma = data;

export async function GET() {
    let firstDate;
    let lastDate;

    try {
        firstDate = await prisma.$queryRaw`SELECT Date FROM eit171 ORDER BY Date ASC LIMIT 1`;
        lastDate = await prisma.$queryRaw`SELECT Date FROM eit171 ORDER BY Date DESC LIMIT 1`;
    } catch (e) {
        return NextResponse.json({ error: e });
    }

    return NextResponse.json({
        firstDate: {
            rows: firstDate,
        },
        lastDate: {
            rows: lastDate,
        },
    });
}
