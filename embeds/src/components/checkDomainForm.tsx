"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircleIcon, TerminalIcon } from "lucide-react"
import { useState } from "react"
import ky from "ky"
import { Icons } from "./icons"

interface Response {
  success?: boolean
  message: string
}

const domainRegex = /^[a-zA-Z0-9-]{1,63}(\.[a-zA-Z]{2,})+$/
const formSchema = z.object({
  domain: z.string().regex(domainRegex, "Nieprawidłowa domena."),
})

export function CheckDomainForm({
  service,
}: {
  service: "minecraft" | "fivem"
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<Response | undefined>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      domain: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const response = await ky
        .post(
          (import.meta.env.DEV
            ? `http://localhost:3000/`
            : `https://wiki-helper-api.hostyard.eu/`) + `${service}/domain`,
          {
            json: values,
            throwHttpErrors: false,
          }
        )
        .json<Response>()

      setResponse({
        ...response,
        message: response.success
          ? `Punkt końcowy domeny: ${response.message}`
          : response.message,
      })
    } catch {
      setResponse({
        message: "Nie udało się pobrać danych, spróbuj ponownie.",
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="space-y-4">
      {response && (
        <Alert variant={!response.success ? "destructive" : undefined}>
          <AlertDescription className="flex items-center gap-2">
            {response.success ? (
              <TerminalIcon className="size-4" />
            ) : (
              <AlertCircleIcon className="size-4" />
            )}
            {response.message}
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm">
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domena</FormLabel>
                <div className="flex gap-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading && <Icons.spinner className="animate-spin" />}
                    Sprawdź
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
