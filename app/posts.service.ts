/**
 * Created by adoni on 02/08/2016.
 */
export class PostService {
    getPost() {
        return [{
            imageUrl: "http://lorempixel.com/100/100/people?1",
            handle: "@Dio",
            author: "Adonis Souz",
            body: "still useless",
            likeCount: 0,
            iLike: false
        },{
            imageUrl: "http://lorempixel.com/100/100/people?2",
            handle: "@Mari",
            author: "Marina Goto",
            body: "tu est la plus belle fille",
            likeCount: 1000,
            iLike: true
        },{
            imageUrl: "http://lorempixel.com/100/100/people?3",
            handle: "@Gus_tavo",
            author: "Gustavo Coq",
            body: "you could make me happy, but i just cannot let me",
            likeCount: 100,
            iLike: true
        }]
    }
}
