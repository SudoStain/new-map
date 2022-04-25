import { Response, Request } from "express"
import { CallType } from "../../models/callType"
import { ICallType } from "../../types/type"

export const getCallTypes = async (req: Request, res: Response) => {
    try {
        const callTypes = await CallType.find()

        return res.status(200).json({ data: callTypes })
    } catch (error) {
        console.error(error)

        return res.status(500).json({ error: "Internal Server Error" })
    }
}

export const createCallType = async (req: Request, res: Response) => {
    try {
        const body = req.body as Pick<ICallType, "name">

        const callType = await new CallType({ name: body.name }).save()

        return res.status(201).json({ data: callType })
    } catch (error) {
        console.error(error)

        return res.status(500).json({ error: "Internal Server Error" })
    }
}
