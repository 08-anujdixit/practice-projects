import React from "react";
import {PostForm, Container} from '../components/index'

function AddBlog(){
    return(
        <div className="py-8 ">
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}
export default AddBlog;
