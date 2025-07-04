import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const MarketEfficiencyTable = () => {
  return (
    <div className="my-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Form</TableHead>
            <TableHead className="font-bold">Informasjonssett som er «priset inn»</TableHead>
            <TableHead className="font-bold">Praktisk implikasjon</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold">Svak form</TableCell>
            <TableCell>Historiske priser og volumdata</TableCell>
            <TableCell>Teknisk analyse og trend-strategier skal ikke gi systematisk meravkastning.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Semisterk form</TableCell>
            <TableCell>All offentlig informasjon (regnskaper, nyheter, analytikerrapporter …)</TableCell>
            <TableCell>Fundamental analyse basert på publiserte data skal ikke gi meravkastning over tid.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Sterk form</TableCell>
            <TableCell>All informasjon – også innsideinformasjon</TableCell>
            <TableCell>Selv investorer med privat informasjon kan ikke tjene ekstra (i praksis motbevist av insider-dommer).</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};