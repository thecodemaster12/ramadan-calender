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
    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let getdate = `${date.getDate()}-${monthName[date.getMonth()]}-${date.getFullYear()}`
    let today = new Date(Date.parse(getdate))


  return (
    <>

    <h1 className='text-center text-2xl text-[#4e5981]'>Ramadan Calender {today.getFullYear()}</h1>

    <Table className='border my-14'>
    <TableCaption>Ramadan Mubarak ❤️</TableCaption>
    <TableHeader className=''>
        <TableRow className='bg-[#0a1b53] hover:bg-[#263d89]'>
        <TableHead className="text-center font-bold text-white text-base">Ramadan</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Date</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Day</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Sehri</TableHead>
        <TableHead className="text-center font-bold text-white text-base">Fazar</TableHead>
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
                  <TableCell className="font-Satoshi text-center text-base text-gray-300">{el.sl}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-gray-300">{el.date}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-gray-300">{el.day}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-gray-300">{el.sehri}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-gray-300">{el.fazar}</TableCell>
                  <TableCell className="font-Satoshi text-center text-base text-gray-300">{el.ifter}</TableCell>
                  </TableRow>
              )
              }
              else{
                    if (elDate.getDate() == today.getDate()) {
                      return (
                        <TableRow key={key}>
                        <TableCell className="font-Satoshi font-bold text-center text-base text-black">{el.sl}</TableCell>
                        <TableCell className="font-Satoshi font-bold text-center text-base text-black">{el.date}</TableCell>
                        <TableCell className="font-Satoshi font-bold text-center text-base text-black">{el.day}</TableCell>
                        <TableCell className="font-Satoshi font-bold text-center text-base text-black">{el.sehri}</TableCell>
                        <TableCell className="font-Satoshi font-bold text-center text-base text-black">{el.fazar}</TableCell>
                        <TableCell className="font-Satoshi font-bold text-center text-base text-black">{el.ifter}</TableCell>
                        </TableRow>
                      )
                      
                    }
                    else{
                      return (
                      <TableRow key={key}>
                      <TableCell className="font-Satoshi text-center text-base text-black">{el.sl}</TableCell>
                      <TableCell className="font-Satoshi text-center text-base text-black">{el.date}</TableCell>
                      <TableCell className="font-Satoshi text-center text-base text-black">{el.day}</TableCell>
                      <TableCell className="font-Satoshi text-center text-base text-black">{el.sehri}</TableCell>
                      <TableCell className="font-Satoshi text-center text-base text-black">{el.fazar}</TableCell>
                      <TableCell className="font-Satoshi text-center text-base text-black">{el.ifter}</TableCell>
                      </TableRow>
                      )
                    }
                
              }
            })
        }
    </TableBody>
    </Table>
    </>
  );
};

export default RamadanCalender;
