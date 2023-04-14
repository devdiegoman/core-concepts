import { PostService } from './service';
import { dataProvider1, dataProvider2, dataProvider3 } from './api';

(async () => {
    const provider = new dataProvider3();
    const service = new PostService( provider );

    const posts = await service.getPosts();

    console.log(posts);
})();