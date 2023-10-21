import React, { type DragEvent, useState } from "react";
import { motion } from "framer-motion";
import Compressor from "compressorjs";

import { Text } from "../ui/text";
import { useContactStore } from "@/context/Contact.context";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import File from "./File";

export default function DesignPage() {
  const { design, setDesign } = useContactStore();
  const [isUpload, setIsUpload] = useState(false);
  const [isDroppingFile, setIsDroppingFile] = useState(false);

  // Dropping images
  const onDropHandler = async (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    const uploadedFiles = event.dataTransfer.files;

    const compressedFiles: Blob[] = [];

    const compressing = Array.from(uploadedFiles).map(async (file) => {
      if (file.type.startsWith("image/")) {
        return await new Promise((resolve: any) => {
          new Compressor(file, {
            quality: 0.6,
            success: (compressedResult) => {
              compressedFiles.push(compressedResult);
              resolve(); // Resolve this promise when all files are compressed.
            },
            error: (error) => {
              console.error("Compression error:", error);
            },
          });
        });
      }
    });

    await Promise.all(compressing);

    setDesign({ ...design, files: compressedFiles });
    setIsDroppingFile(false);
  };

  return (
    <div className="space-y-8">
      <Text size={48} className="text-foreground">
        Your UI design
      </Text>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Url"
          value={design.url}
          onChange={(e) => {
            setDesign({ ...design, url: e.target.value });
          }}
          className="w-full max-w-xl border-b bg-transparent px-6 py-4 text-xl font-normal outline-none"
        />
        {isUpload && design.files?.length === 0 && (
          <Label
            className={`flex h-48 w-full max-w-xl cursor-pointer items-center justify-center rounded-xl border ${
              isDroppingFile ? "animate-pulse bg-success/50" : ""
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDroppingFile(true);
            }}
            onDragLeave={() => {
              setIsDroppingFile(false);
            }}
            onDrop={onDropHandler}
          >
            Drag and drop
            <input type="file" className="hidden" multiple />
          </Label>
        )}
        {design.files ? (
          <>
            {design.files.length > 0 && (
              <motion.div className="columns-2 md:columns-3 lg:columns-4">
                {design.files.map((file: any) => (
                  <File key={file.size} file={file} />
                ))}
              </motion.div>
            )}
            <Label className="flex max-w-xl cursor-pointer select-none items-center justify-end gap-4">
              <Text size={16} variant={"muted-sm"}>
                Upload video or images
              </Text>
              <Switch
                onCheckedChange={(checked) => {
                  setIsUpload(checked);
                }}
                disabled={design.files.length > 0}
              />
            </Label>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
