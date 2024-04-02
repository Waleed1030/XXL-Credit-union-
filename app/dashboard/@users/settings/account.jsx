"use client";
import "./setting.scss";
import { GeneralInfo, ChangePassword, ChangePin } from "./forms";

import { SingleImageDropzone } from "@/app/ui/upload/imagedropzone";
import { EdgeStoreApiClientError } from "@edgestore/react/shared";
import { useEdgeStore } from "@/app/lib/edgestore.ts";
import { uploadPhoto } from "@/app/lib/actions.js";
import React, { useState } from "react";

const Account = ({ children, user }) => {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState();
  const [progress, setProgress] = useState("0%");

  //console.log('fetching from settings account.jsx', user)

  return (
    <div className="py-10 flex flex-col gap-10">
      {children && (
        <div className="flex flex-col gap-10">
          {/*{user.img === "" || undefined && (*/}
            <div className="flex flex-col items-center">
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
              <div className="h-2 w-44 border border-[--accent] rounded overflow-hidden">
                <div
                  className="h-full bg-[--accent] transition-all duration-300 ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <button
                className="primary_btn mt-3 w-32"
                onClick={async () => {
                  const id = user._id;

                  try {
                    if (file) {
                      const res = await edgestore.profileImages.upload({
                        file,
                        onProgressChange: (progress) => {
                          setProgress(progress);
                        },
                      });

                      const img = res.url;
                      await uploadPhoto({ id, img });
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

                  console.log("checking url for img:", img);
                }}
              >
                Save
              </button>
            </div>
          
          <GeneralInfo user={user} />
          <div className="flex flex-col gap-10 md:gap-0 md:flex-row w-full justify-between items-center">
            <ChangePassword user={user} />
            <ChangePin user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
