document.getElementById("fetch-button").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("data-container");
            container.innerHTML = "";

            for (let i = 0; i < 5; i++) {
                let post = document.createElement("div");
                post.className = "post";
                post.innerHTML = "<h3>" + data[i].title + "</h3><p>" + data[i].body + "</p>";
                container.appendChild(post);
            }
        })
        .catch(error => console.log("Error fetching data"));
});