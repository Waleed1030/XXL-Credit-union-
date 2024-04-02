"use client"
import { SingleImageDropzone } from "@/app/ui/upload/imagedropzone";
import { EdgeStoreApiClientError } from "@edgestore/react/shared";
import { useEdgeStore } from "@/app/lib/edgestore.ts";
import React, { useState } from "react";


const AddImage = () => {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState();
  const [progress, setProgress] = useState("0");
  const [img, setImg] = useState("");

  return (
    <div className="flex flex-col items-center justify-center mb-10 max-w-80">
              <SingleImageDropzone
                width={200}
                height={200}
                value={file}
                dropzoneOptions={{
                  maxSize: 1024 * 1024 * 2, //1MB
                }}
                onChange={(file) => {
                  setFile(file);
                }}
              />
              <div className="h-1 w-full border-[1px] border-[--accent] rounded overflow-hidden">
                <div
                  className="h-full bg-[--accent] transition-all duration-500 ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <button
                className="primary_btn mt-3 w-32"
                onClick={async () => {
                  try {
                    if (file) {
                      const res = await edgestore.profileImages.upload({
                        file,
                        onProgressChange: (progress) => {
                          //console.log("Logging progress from component:" ,progress)
                          setProgress(progress);
                        },
                      });

                      setImg(res.url);
                    }
                  } catch (error) {
                    if (error instanceof EdgeStoreApiClientError) {
                      // if it fails due to the `maxSize` set in the router config
                      if (error.data.code === "FILE_TOO_LARGE") {
                        alert(
                          `File too large. Max size is ${formatFileSize(
                            error.data.details.maxFileSize
                          )}`
                        );
                      }
                      // if it fails due to the `accept` set in the router config
                      if (error.data.code === "MIME_TYPE_NOT_ALLOWED") {
                        alert(
                          `File type not allowed. Allowed types are ${error.data.details.allowedMimeTypes.join(
                            ", "
                          )}`
                        );
                      }
                      // if it fails during the `beforeUpload` check
                      if (error.data.code === "UPLOAD_NOT_ALLOWED") {
                        alert(
                          "You don't have permission to upload files here."
                        );
                      }
                    }
                  }

                  //console.log("checking url for img:", img);
                }}
              >
                Save
              </button>
              <input type="text" value={img} name="img" hidden/>
            </div>
  )
}

export default AddImage