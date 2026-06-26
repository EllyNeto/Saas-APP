"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { ImageIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Companion is required."),
  subject: z
    .string()
    .min(1, "Subject is required."),
  topic: z
    .string()
    .min(1, "Topic is required."),
   voice: z
    .string()
    .min(1, "Voice is required."),
   style: z
    .string()
    .min(1, "Style is required."),
   duration: z
    .coerce.number()
    .min(1, "Duration is required."),
})

const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:"",
        subject: "",
        topic:"",
        voice: "",
        style: "",
        duration: 15,
    },
  })
 
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
    return (
    <div className="mx-auto w-full max-w-2xl px-6 py-10">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Upload Image */}
        <div>
          <label className="mb-3 block text-lg font-medium">
            Companion icon
          </label>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border">
              <ImageIcon className="h-7 w-7 text-gray-500" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="h-14 rounded-xl px-6"
            >
              Upload image
            </Button>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label className="text-lg font-medium">
            Companion name
          </label>

          <Input
            placeholder="Enter the companion name - ex: Calculus King"
            {...form.register("name")}
            className="h-14 rounded-xl"
          />

          {form.formState.errors.name && (
            <p className="text-sm text-red-500">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-lg font-medium">
            Subject
          </label>

          <Input
            placeholder="Enter the subject - ex: Math"
            {...form.register("subject")}
            className="h-14 rounded-xl"
          />

          {form.formState.errors.subject && (
            <p className="text-sm text-red-500">
              {form.formState.errors.subject.message}
            </p>
          )}
        </div>

        {/* Topic */}
        <div className="space-y-2">
          <label className="text-lg font-medium">
            What should this companion teach?
          </label>

          <Input
            placeholder="Enter the topic you want to learn - ex: Derivatives"
            {...form.register("topic")}
            className="h-14 rounded-xl"
          />

          {form.formState.errors.topic && (
            <p className="text-sm text-red-500">
              {form.formState.errors.topic.message}
            </p>
          )}
        </div>

        {/* Voice */}
        <div className="space-y-2">
          <label className="text-lg font-medium">
            Voice Type
          </label>

          <Controller
            control={form.control}
            name="voice"
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="h-146 rounded-xl">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="female">
                    Female
                  </SelectItem>
                  <SelectItem value="male">
                    Male
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Style */}
        <div className="space-y-2">
          <label className="text-lg font-medium">
            Speaking Style
          </label>

          <Controller
            control={form.control}
            name="style"
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="h-14 rounded-xl">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="formal">
                    Formal
                  </SelectItem>
                  <SelectItem value="friendly">
                    Friendly
                  </SelectItem>
                  <SelectItem value="casual">
                    Casual
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Language */}
        <div className="space-y-2">
          <label className="text-lg font-medium">
            Language
          </label>

          <Controller
            control={form.control}
            name="language"
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="h-14 rounded-xl">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="english">
                    English
                  </SelectItem>
                  <SelectItem value="portuguese">
                    Portuguese
                  </SelectItem>
                  <SelectItem value="spanish">
                    Spanish
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <Button
          type="submit"
          className="h-14 w-full rounded-2xl bg-orange-500 text-base font-semibold hover:bg-orange-600"
        >
          Build Companion
        </Button>
      </form>
    </div>
  )
}

export default CompanionForm