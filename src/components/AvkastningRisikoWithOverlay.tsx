import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calculator } from "lucide-react";
import AvkastningRisikoModul from "./AvkastningRisikoModul";

const AvkastningRisikoWithOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Calculator className="w-4 h-4 mr-2" />
          Åpne Avkastning & Risiko Modul
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Avkastning og Risiko - Interaktiv Modul</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <AvkastningRisikoModul />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvkastningRisikoWithOverlay;