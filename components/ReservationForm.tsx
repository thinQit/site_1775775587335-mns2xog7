"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ReservationFormProps {
  className?: string;
}

export default function ReservationForm({ className = "" }: Partial<ReservationFormProps>) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time || !form.guests) {
      setError("Please complete all required fields.");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    setForm({ name: "", email: "", date: "", time: "", guests: "", notes: "" });
  };

  return (
    <section className={cn("rounded-xl border border-[#e6d8b4] bg-[#fffdf4] p-6 md:p-8", className)}>
      <h3 className="font-serif text-3xl text-[#722F37]">Reservation Request</h3>
      <p className="mt-2 font-[Lato] text-sm text-[#6a5b4f]">
        Submit your preferred date and time. We’ll confirm shortly by email.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <Input placeholder="Full Name*" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input type="email" placeholder="Email*" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
        <Input type="number" min={1} max={20} placeholder="Guests*" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} />
        <Input placeholder="Special Occasion (optional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />

        <div className="md:col-span-2">
          <Button type="submit" className="w-full bg-[#722F37] text-[#FEFAE0] hover:bg-[#5e252d] md:w-auto">
            Send Request
          </Button>
        </div>
      </form>

      {error && <p className="mt-4 font-[Lato] text-sm text-red-600">{error}</p>}
      {success && (
        <p className="mt-4 inline-flex items-center gap-2 font-[Lato] text-sm text-emerald-700">
          <CheckCircle2 size={16} /> Your request has been received. We’ll contact you soon.
        </p>
      )}
    </section>
  );
}
