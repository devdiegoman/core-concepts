import { Post } from './service';
import data from './data.json';

export abstract class PostProvider {
        abstract getPosts(): Promise<Post[]>;    
}

export class dataProvider1 implements PostProvider{

    async getPosts(): Promise<Post[]> {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }
        ];
    }
}

export class dataProvider2 implements PostProvider {

    async getPosts(): Promise<Post[]> {
        return data;
    }
}

export class dataProvider3 implements PostProvider {

    async getPosts(): Promise<Post[]> {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await posts.json()
    };
}
