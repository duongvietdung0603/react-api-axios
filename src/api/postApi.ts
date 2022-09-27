import { Post, ListResponse, ListParams } from "@/models/index";
import axiosClient from "./axios-client";

const postApi = {
    getAll(params?: ListParams): Promise<ListResponse<Post>> {
        const url = 'posts'
        return axiosClient.get(url, { params })
    },
    getById(id: number): Promise<Post> {
        const url = `posts/${id}`
        return axiosClient.get(url)
    },
    add(data: Post): Promise<Post> {
        const url = `posts`
        return axiosClient.post(url, data)
    },
    update(data: Partial<Post>): Promise<Post> {
        const url = `posts/${data.id}`
        return axiosClient.put(url, data)
    },
    remove(id: number): Promise<any> {
        const url = `posts/${id}`
        return axiosClient.delete(url)
    },
}

export default postApi;