import { prisma } from "../../utils/prisma";
import { CreateOrderType } from "./order.schema";

export async function getAllOrders() {
  try {
    const data = await prisma.order.findMany({
      include : {product : true},
      orderBy: { createdAt: "desc" },
    });
    return { data: data, statusCode: 200, error: null };
  } catch (error) {
    return { data: null, statusCode: 500, error: error.message };
  }
}

export async function getOrderById(orderId: string) {
  try {
    const data = await prisma.order.findFirst({ 
      where: { id: orderId } , 
      include : {product : true},
     });
    return { data: data, statusCode: 200, error: null };
  } catch (error) {
    return { data: null, statusCode: 500, error: error.message };
  }
}

export async function createOne(order:CreateOrderType) {
  try {
    const data = await prisma.order.create({
      data: {
        isDashboardHidden: false,
        orderPrice: order.orderPrice,
        status: "waiting",
        userContact: order.userContact,
        userName: order.userName,
        productId: order.productId,
        location : order.location,
        productQuantity : 0
      },
    });
    
    return data?{ data: data, statusCode:201 , error:null  } :  { data: null, statusCode:500 , error:"error while creating the order!"  };
  } catch (error) {
    return { data: null, statusCode: 500, error: error.message };
  }
}

export async function updateStatus(status : string , orderId : string) {
    const possibleStates = ["waiting" , "validated" ,"sent" , "canceled"]
    if (possibleStates.indexOf(status) === -1) return {data : null , error : "not valid status possible ones are [waiting, validated, sent, canceled]"}
    try {
        const updateResult = await prisma.order.update({data :{status : status} , where : {id : orderId} }) 
       return updateResult?{ data: "updated successfully !", statusCode:200 , error:null  } :  { data: null, statusCode:500 , error:"error while creating the order!"  };
    } catch (error) {
      return { data: null, statusCode: 500, error: error.message };
    }
  }