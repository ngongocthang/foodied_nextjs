"use client"

import { Heading } from "@/components/heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { DataTable } from "@/components/ui/data-table"
import { columns, OrdersColumns } from "./columns"
import ApiList from "@/components/api-list"

interface OrdersClientProps{
  data: OrdersColumns[]
}

export const OrdersClient = ({ data } : OrdersClientProps) => {
    const params = useParams()
    const router = useRouter()
  return (
    <>
    <div className="flex items-center justify-between">
        <Heading title={`Orders (${data.length})`}
        description="Manage orders for your store"/>
    </div>
    <Separator/>
    <DataTable searchKey="name" columns={columns} data={data}/>

    
    </>
  )
}
