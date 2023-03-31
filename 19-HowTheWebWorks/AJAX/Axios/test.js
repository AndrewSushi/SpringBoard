async function getHentai(){
    // const response = await axios.get("https://danbooru.donmai.us/posts?tags=breasts&limit=10")
    const response = await axios.post("https://gelbooru.com/index.php?page=dapi&s=post&q=index&api_key=291f0f385d285ac7c82130d719d7fe817cac2c556bcd02a9a6f8c4131c458787&user_id=1171698")
    // const response = await axios.get("https://yande.re/post.json?api_version=2&tags=breasts&limit=1&filter=1")
    // const img = document.querySelector("#waifu")
    // img.src = response.data.posts[0].preview_url
    // console.log(response.data.posts[0])
    console.log(response)

}   

async function getWaifu(){
    // const response = await axios.get("https://api.waifu.im/search/?included_tags=hentai")
    const response = await axios.get("https://api.waifu.im/search/?included_tags=milf")
    // const response = await axios.get("https://api.waifu.im/search/?is_nsfw=true")
    console.log(response.data.images[0].url)
    const img = document.querySelector("#waifu")
    img.src = response.data.images[0].url
    // img.addEventListener("click", function(e){
    //     getWaifu()
    // })
    // for(let i = 0; i < 10; i++){
        
    //     const response = await axios.get("https://api.waifu.im/search/?included_tags=waifu")
    //     // console.log(response.data.images[0].preview_url)
    //     waifus.push(`${response.data.images[0].preview_url}`)
    // }
}