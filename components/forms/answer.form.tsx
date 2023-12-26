"use client";

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { AnswerFormSchema } from "@/lib/validations";
import { useTheme } from "@/context";
import Image from "next/image";
import { createAnswer } from "@/lib/actions";
import { usePathname } from "next/navigation";

interface TAnswerFormProps {
  question: string;
  questionId: string;
  authorId: string;
}

export const AnswerForm = ({
  question,
  questionId,
  authorId,
}: TAnswerFormProps) => {
  const editorRef = useRef(null);
  const { mode } = useTheme();
  // const router = useRouter();
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof AnswerFormSchema>>({
    resolver: zodResolver(AnswerFormSchema),
    defaultValues: {
      answer: "",
    },
  });

  async function handleCreateAnswer(values: z.infer<typeof AnswerFormSchema>) {
    setIsSubmitting(true);

    try {
      // TODO make an async call to API
      await createAnswer({
        content: values.answer,
        author: JSON.parse(authorId),
        question: JSON.parse(questionId),
        path: pathname,
      });
      form.reset();
      if (editorRef.current) {
        const editor = editorRef.current as any;
        editor.setContent("");
      }
    } catch (error: any) {
      console.log("[ERROR]", error.message);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
        <h4 className="paragraph-semibold text-dark400_light800">
          Write your answer here
        </h4>
        <Button
          className="btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-500"
          onClick={() => {}}
        >
          <Image
            src="/assets/icons/stars.svg"
            alt="star"
            width={12}
            height={12}
            className="object-contain"
          />
          Generate an AI answer
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateAnswer)}
          className="mt-6 flex w-full flex-col gap-10"
        >
          {/* Answer Details */}
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormControl className="mt-3.5">
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                      ],
                      toolbar:
                        "undo redo | blocks | codesample | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                      skin: mode === "dark" ? "oxide-dark" : "oxide",
                      content_css: mode === "dark" ? "dark" : "light",
                    }}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              className="primary-gradient w-fit !text-light-900"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Answer"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
