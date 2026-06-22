import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from '@/lib/utils';

interface CompanionCardProps
{
    tittle: string;
    companions?: Companion[];
    classNames?: string; 
}

const CompanionList = ({tittle, companions, classNames}: CompanionCardProps) => {
  return (
    <article className="{cn(...inputs: 'companion-list', classNames)}">
      <h2 className="font-bold text-3xl">Recent Sessions</h2>

      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
     
    </article>
  )
}

export default CompanionList