/* API
LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts

PostSearchByQuery
PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName

Example
PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding 

*/


const loadPost = async () => {
    const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
    const res = await fetch(url);
    const data = await res.json();
    const posts = data.posts;

    displayPosts(posts);

}

loadPost();

const displayPosts = (posts) => {
    const cardsContainer = document.getElementById('cards-container');
    // cardsContainer.innerHTML = "";

    posts.forEach(post => {
        console.log(post);
        let indicator;
        if(post.isActive === true) {
            indicator = 'badge-success'
        }
        else{
            indicator = 'badge-error'
        }
        const div = document.createElement('div');
        div.className = `flex flex-col lg:flex-row justify-start gap-6 lg:gap-10 rounded-2xl p-8 bg-[#797dfc1a] items-center lg:items-start`;
        div.innerHTML = `
        <!-- indicator -->
        <div class="avatar indicator">
            <span class="indicator-item badge ${indicator}"></span>
            <div class="h-20 w-20 rounded-lg">
                <img alt="Tailwind CSS examples"
                    src= ${post.image} />
            </div>
        </div>

        <!-- Description Box -->
        <div class="space-y-5">
            <div class="flex gap-4">
                <h4># ${post.category}</h4>
                <h4>Author : ${post.author.name}</h4>
            </div>
            <div class="space-y-3">
                <h4 class="font-bold text-xl text-[#12132D]">${post.title} 
                </h4>
                <p class="text-gray-600">${post.description}</p>
            </div>
            <hr class="border-t-2 border-gray-300 border-dashed">

            <div class="flex justify-between  lg:gap-48">
                <!-- Cards Icons -->
                <div class="flex justify-start gap-3 lg:gap-6 items-center">

                    <div class="flex justify-between items-center gap-1 lg:gap-2">
                        <img src="./images/comment.png" alt="">
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex justify-between items-center gap-1 lg:gap-2">
                        <img src="./images/eye.png" alt="">
                        <p>${post.view_count}</p>
                    </div>
                    <div class="flex justify-between items-center gap-1 lg:gap-2">
                        <img src="./images/watch.png" alt="">
                        <p><span>${post.posted_time}</span> min</p>
                    </div>

                </div>
                <!-- email icon -->
                <div>
                    <img src="./images/email.png" alt="">
                </div>
            </div>

        </div>
        `

        cardsContainer.appendChild(div);

    });
}