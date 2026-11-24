import { busModel } from "@/Models/bus.model";

export async function addBusDetails(payload:busModel):Promise<unknown> {
    try{

    }
    catch(error){
        console.error('[API Server Error]:',error)
        return {
            success: false,
            message: error
        }
    }
}