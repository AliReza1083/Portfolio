"use client";

import React, { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { UseUserContext } from "@/context/User.context";
import { Label } from "@/components/ui/label";
import CustomIcon from "@/assets/CustomIcon";
import { supabase } from "@/utils/supabase";

import { useChatStore } from "@/context/Chat.context";
import { Text } from "../ui/text";

import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { RotatingLines } from "react-loader-spinner";
import AddingImages from "./adding-images";

type Props = {};

export default function SendingMessage({}: Props) {
  const [message, setMassage] = useState("");
  const {
    messages,
    setMessages,
    replyId,
    setReplyId,
    uploadedImage,
    setUploadedImage,
  } = useChatStore();

  const [isAddingImage, setIsAddingImage] = useState(false);

  const [loading, setLoading] = useState(false);

  const { currentUser } = UseUserContext();

  useEffect(() => {
    const textarea = document.querySelector("#message") as HTMLTextAreaElement;

    if (textarea) {
      textarea.style.height = "1rem";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  const submittingMessage = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (message.length == 0) return;

    const imagesURl: string[] = [];

    if (uploadedImage.length > 0) {
      const uploadingFiles = Array.from(uploadedImage).map(
        async (file: any) => {
          const uploading = await supabase.storage
            .from("chat")
            .upload(`${file.name}`, file);
          console.log(`uploaded - ${file.name}`);
          const { data } = await supabase.storage
            .from("chat")
            .getPublicUrl(`${file.name}`);
          imagesURl.push(data.publicUrl);
        }
      );

      await Promise.all(uploadingFiles);

      const data = await supabase.from("chat-history").insert([
        {
          user_uid: currentUser.user.user_metadata.provider_id,
          message,
          reply: replyId,
          files: imagesURl,
        },
      ]);
      setLoading(false);
      setUploadedImage([]);
    } else {
      const data = await supabase.from("chat-history").insert([
        {
          user_uid: currentUser.user.user_metadata.provider_id,
          message,
          reply: replyId,
        },
      ]);
      setLoading(false);
    }
  };

  useEffect(() => {
    const channel = supabase
      .channel("realtime-message")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "chat-history",
        },
        (payload: any) => {
          console.log(payload);
          if (payload.eventType == "INSERT") {
            setMessages([
              ...messages,
              {
                message: payload.new.message,
                user_uid: payload.new.user_uid,
                id: payload.new.id,
                reply: payload.new.reply,
                files: payload.new.files,
              },
            ]);
            setMassage("");
            setReplyId(null);
          } else if (payload.eventType == "DELETE") {
            const findMessage = messages.filter(
              (message) => message.id !== payload.old.id
            );

            setMessages(findMessage);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, messages]);

  return (
    <form
      onSubmit={submittingMessage}
      className="flex items-center justify-between w-full gap-2 p-2 bg-background"
    >
      {/* Inputs */}
      <div
        className={`flex flex-col items-center bg-accents-1 grow rounded-xl pl-2 pr-3 py-2 focus-within:ring-2 ring-foreground duration-200`}
      >
        {uploadedImage!.length > 0 && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="flex w-full gap-2 mb-2 overflow-hidden"
          >
            {uploadedImage?.map((file, index) => (
              <DisplayingImageUploading key={index} file={file} index={index} />
            ))}
          </motion.div>
        )}
        <AnimatePresence>
          {replyId && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full overflow-hidden"
              key={replyId}
            >
              <div className="bg-background px-2 py-0.5 rounded relative overflow-hidden mb-2 w-full">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-white" />
                <Text
                  as="h3"
                  size={10}
                  className="tracking-widest !text-white text-xxs"
                >
                  Ali
                </Text>
                <Text size={10} className="leading-4 line-clamp-3">
                  {messages.find((message) => message.id == replyId)?.message}
                </Text>
                <span
                  className="absolute cursor-pointer text-xxs top-2 right-2"
                  onClick={() => setReplyId(null)}
                >
                  <AiOutlineClose />
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center w-full">
          <textarea
            className="py-1 leading-5 bg-transparent outline-none resize-none grow placeholder:text-accents-6/50 max-h-20"
            rows={1}
            placeholder="your message"
            id="message"
            value={message}
            onChange={(e) => setMassage(e.target.value)}
          />

          {/* Opening */}
          <div
            onClick={() => setIsAddingImage(true)}
            className="cursor-pointer"
          >
            <CustomIcon icon="photo" className="w-4 h-4 text-foreground" />
          </div>
        </div>
      </div>

      {/* Send */}
      <button className="p-2 rounded-full bg-foreground text-background">
        {loading ? (
          <RotatingLines
            strokeColor="black"
            strokeWidth="3"
            animationDuration="1"
            width="14"
            visible={true}
          />
        ) : (
          <CustomIcon icon="send" />
        )}
      </button>

      {/* Adding images */}
      <AnimatePresence>
        {isAddingImage && <AddingImages setIsVisible={setIsAddingImage} />}
      </AnimatePresence>
    </form>
  );
}

import { IoMdClose } from "react-icons/io";

const DisplayingImageUploading = memo(
  ({ index, file }: { index: number; file: Blob }) => {
    const { uploadedImage, setUploadedImage } = useChatStore();

    const deletingFile = (file: Blob | File) => {
      const filterImages = uploadedImage.filter(
        (image) => image.name !== file.name
      );

      setUploadedImage(filterImages);
    };

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <div
          className="absolute top-0 right-0 p-px text-white rounded-full cursor-pointer bg-background"
          onClick={() => deletingFile(file)}
        >
          <IoMdClose className="text-xxs" />
        </div>
        <Image
          // @ts-ignore
          src={URL.createObjectURL(file)}
          width={40}
          height={40}
          alt=""
          className="object-cover w-10 h-10 rounded"
        />
      </motion.div>
    );
  }
);

DisplayingImageUploading.displayName = "DisplayingImageUploading";