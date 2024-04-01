import React from "react";
import ramadan from "/ramadan";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RamadanCalender = () => {

    const date = new Date()
    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',]
    let getdate = `${date.getDate()}-${monthName[date.getMonth()+1]}-${date.getFullYear()}`
    let today = new Date(Date.parse(getdate))


  return (
    <>

    <h1 className='text-center text-2xl'>Ramadan Calender {today}</h1>

    <Table className='border my-14'>
    <TableHeader>
        <TableRow className='bg-green-600 hover:bg-green-700'>
        <TableHead className="text-center font-bold text-white text-base">Ramadan</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Date</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Day</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Sheri</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Ifter</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {
            ramadan.map((el, key) => {
              let elDate = new Date(Date.parse(el.date));
              if (elDate < today) {
                return(
                  <TableRow key={key}>
                  <TableCell className="font-Satoshi text-center text-base text-green-500">{el.sl}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-green-500">{el.date}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-green-500">{el.day}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-green-500">{el.sheri}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-green-500">{el.ifter}</TableCell>
                  </TableRow>
              )
              }
              else{
                  return(
                    <TableRow key={key}>
                    <TableCell className="font-Satoshi text-center text-base text-red-500">{el.sl}</TableCell>
                    <TableCell className="font-Satoshi text-center text-base text-red-500">{el.date}</TableCell>
                    <TableCell className="font-Satoshi text-center text-base text-red-500">{el.day}</TableCell>
                    <TableCell className="font-Satoshi text-center text-base text-red-500">{el.sheri}</TableCell>
                    <TableCell className="font-Satoshi text-center text-base text-red-500">{el.ifter}</TableCell>
                    </TableRow>
                )
              }
            })
        }
    </TableBody>
    </Table>
    </>
  );
};

export default RamadanCalender;
