import { getGraphTotalRevenue } from "@/actions/get-graph-total-tevenue";
import { getTotalProducts } from "@/actions/get-total-producs";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { getOrderTotalRevenueByCategory } from "@/actions/get-total-revenue-by-category";
import { getOrderPaymentStatusTotalRevenue } from "@/actions/get-total-revenue-by-order-status";
import { getOrderStatusTotalRevenue } from "@/actions/get-total-revenue-order-status";
import { getTotalSales } from "@/actions/get-total-sales";
import { Heading } from "@/components/heading";
import Overview from "@/components/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/firebase";
import { formatter } from "@/lib/utils";
import { Store } from "@/type-db";
import { getDoc, doc } from "@firebase/firestore";
import { DollarSign } from "lucide-react";

interface DashboardOverviewProps{
    params : {storeId : string}
}

const DashboardOverview = async ({params} : DashboardOverviewProps) => {

    const totalRevenue = await getTotalRevenue(params.storeId);
    const totalSale = await getTotalSales(params.storeId);
    const totalProducts = await getTotalProducts(params.storeId);
    const motnlyGraphRevenue = await getGraphTotalRevenue(params.storeId);
    const revenueByCategory = await getOrderTotalRevenueByCategory(params.storeId);
    const orderStatusTotalRevenue = await getOrderPaymentStatusTotalRevenue(params.storeId);
    const orderStatusRevenue = await getOrderStatusTotalRevenue(params.storeId);
   
    return(
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Heading title="Dashboard" description="Overview of your store"/>
                <Separator/>

                <div className="grid gap-4 grid-cols-4">
                    <Card className="col-span-2">
                        <CardHeader className="flex items-center justify-between flex-row">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{formatter.format(totalRevenue)}</div>
                        </CardContent>
                    </Card>

                    <Card className="col-span-1">
                        <CardHeader className="flex items-center justify-between flex-row">
                            <CardTitle className="text-sm font-medium">
                                Sales
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+{totalSale}</div>
                        </CardContent>
                    </Card>

                    <Card className="col-span-1">
                        <CardHeader className="flex items-center justify-between flex-row">
                            <CardTitle className="text-sm font-medium">
                                Products
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+{totalProducts}</div>
                        </CardContent>
                    </Card>

                {/* rvenue */}
                <Card className="col-span-3">
                        <CardHeader className="flex items-center justify-between flex-row">
                            <CardTitle className="text-sm font-medium">
                                Revenue By Month
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <Overview data={motnlyGraphRevenue}/>
                        </CardContent>
                    </Card>
                {/*  */}
                <Card className="col-span-1">
                        <CardHeader className="flex items-center justify-between flex-row">
                            <CardTitle className="text-sm font-medium">
                                Revenue By Payment Status
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <Overview data={orderStatusTotalRevenue}/>
                        </CardContent>
                    </Card>
                {/*  */}
                <Card className="col-span-2">
                        <CardHeader className="flex items-center justify-between flex-row">
                            <CardTitle className="text-sm font-medium">
                                Revenue By Category
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <Overview data={revenueByCategory}/>
                        </CardContent>
                    </Card>

                {/*  */}
                <Card className="col-span-2">
                        <CardHeader className="flex items-center justify-between flex-row">
                            <CardTitle className="text-sm font-medium">
                                Revenue By Order Status
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <Overview data={orderStatusRevenue}/>
                        </CardContent>
                    </Card>


                </div>
            </div>
        </div>
    )
}
 
export default DashboardOverview;