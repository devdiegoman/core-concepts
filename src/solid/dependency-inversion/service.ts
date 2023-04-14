import { PostProvider } from './api';

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
};

export class PostService {
    private posts: Post[] = []
    constructor (private provider: PostProvider ){}

    async getPosts(){
        this.posts = await this.provider.getPosts();
        return this.posts;
    }
}