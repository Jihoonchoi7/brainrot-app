'use client';

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TranslationForm() {
  const [image, setImage] = React.useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
  }

  return (
    <Card className="w-full max-w-xl mx-auto mt-8">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="cursor-pointer"
            />
          </div>
          <Button type="submit" className="w-full">
            Generate Brain Rot
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 