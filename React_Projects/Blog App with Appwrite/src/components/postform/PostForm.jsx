import React from "react";
import useForm from "react-hook-form";
import { Button, Input, RTE, Select } from "../index.js";

function PostForm() {
 
    return(
        <form>
            <div>
                <Input
                label = "Title :"
                placeholder = "Enter Blog Title"
                {...register("title", {required : true})}
                />

                <Input
                label = "Slug :"
                placeholder ="slug"

                {...register("slug", {required: true})}
                onInput = {(e)=>{
                    setValue('slug', slugTransform(e.currentTarget.value),{
                        shouldValidate: true,
                    });
                }}                
                />
                <RTE
                label ="Blog content: "
                name = 'content'
                control={control}
                defaultValue={getValues("content")}
                />
            </div>
            <div>
                <Input
                label = "Featured Image :"
                type ="file"
                
                accept = "image/png, image/jpg, image/jpeg/, image.gif"
                {...register("image", {required: !post})}
                />
                {post && (
                 <div>
                  <img 
                  src={} 
                  alt={post.title} />  
                </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}
                    className="w-full">
                  {post ? "Update" : "Submit"}
                </Button>

            </div>


        </form>
    )
}
