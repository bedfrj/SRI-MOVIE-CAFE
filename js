const movies = [
    { title: "Jurassic World (2022)", img: "https://your-github-username.github.io/your-repo-name/images/jurassic.jpg", link: "https://your-github-username.github.io/your-repo-name/jurassic-world.html" }
];

gallery.innerHTML = "";
movies.forEach(movie => {
    let movieDiv = document.createElement("div");
    movieDiv.className = "movie";
    movieDiv.innerHTML = `
        <a href="${movie.link}" target="_blank">
            <img src="${movie.img}" alt="${movie.title}">
        </a>
        <p>${movie.title}</p>
    `;
    gallery.appendChild(movieDiv);
});
