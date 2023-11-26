import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Overview from "./Overview";
import RecentSales from "./RecentSales";
import TransactionHeader from "./TransactionHeader";
import TransactionList from "./TransactionList";

export default function Revenue() {
  return (
    <div className="mt-32  w-full ">
      <div className="w-full lg:w-[80%] mx-auto flex-col md:flex ">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="text-gray-500 text-md">
                Available balance
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
        <TransactionHeader />
        <TransactionList />
      </div>
    </div>
  );
}
