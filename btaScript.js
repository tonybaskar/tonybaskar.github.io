
 //download the blog as pdf
    document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll(".bookmark-btn").forEach(button => {
    button.textContent = "Download";
    button.addEventListener("click", function() {
        generatePDF(this.closest(".blog-post"));
    });
});
});

function generatePDF(blogPost) {
const { jsPDF } = window.jspdf;
const doc = new jsPDF();

const marginLeft = 10;
let yPosition = 20;
const pageHeight = doc.internal.pageSize.height - 20;

const blogTitle = blogPost.querySelector(".blog-title").textContent;
const blogContent = blogPost.querySelector(".blog-content").textContent;
const codeSections = blogPost.querySelectorAll("pre code");
let codeContent = "";

codeSections.forEach(section => {
    codeContent += section.innerText + "\n\n";
});

// Add watermark
doc.setTextColor(200, 200, 200);
doc.setFontSize(30);
doc.text("baskartech Academy", 40, pageHeight / 2, { angle: 45, opacity: 0.3 });

// Reset text color for actual content
doc.setTextColor(0, 0, 0);

doc.setFont("helvetica", "bold");
doc.setFontSize(16);
doc.text(blogTitle, marginLeft, yPosition);
yPosition += 10;

doc.setFont("helvetica", "normal");
doc.setFontSize(12);
let splitContent = doc.splitTextToSize(blogContent, 180);
yPosition = addTextToPDF(doc, splitContent, yPosition, marginLeft, pageHeight);

if (codeContent) {
    doc.setFont("courier", "bold");
    doc.setFontSize(14);
    doc.text("Code Snippets:", marginLeft, yPosition);
    yPosition += 8;

    doc.setFont("courier", "normal");
    doc.setFontSize(10);
    let splitCode = doc.splitTextToSize(codeContent, 180);
    yPosition = addTextToPDF(doc, splitCode, yPosition, marginLeft, pageHeight);
}

// Add creator's name and designation
doc.setFont("helvetica", "italic");
doc.setFontSize(10);
doc.text("Created by: Tony Baskar Y, Tech Enthusiast", marginLeft, doc.internal.pageSize.height - 10);

doc.save(blogTitle.replace(/[^a-zA-Z0-9]/g, '_') + ".pdf");
}

function addTextToPDF(doc, textArray, yPosition, marginLeft, pageHeight) {
textArray.forEach(line => {
    if (yPosition + 10 > pageHeight) {
        doc.addPage();
        yPosition = 20;
    }
    doc.text(line, marginLeft, yPosition);
    yPosition += 6;
});
return yPosition;
}


    
    // Search functionality
    document.getElementById('searchBar').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const blogPosts = document.querySelectorAll('.blog-post');
        blogPosts.forEach(post => {
            const title = post.querySelector('.blog-title').textContent.toLowerCase();
            const content = post.querySelector('.blog-content').textContent.toLowerCase();
            if (title.includes(query) || content.includes(query)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    // Category filter functionality
    // button state change

    const buttons = document.querySelectorAll(".category-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
    
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.dataset.category;
            const blogPosts = document.querySelectorAll('.blog-post');
            
            blogPosts.forEach(post => {
                if (selectedCategory === 'all') {
                    post.style.display = 'block';
                } else if (post.dataset.category === selectedCategory) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });

    // Bookmark button
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Blog post downloaded!');
            button.textContent = 'Downloaded';
            button.disabled = true;
            button.style.backgroundColor = '#666';
        });
    });

    // Share buttons
    const shareButtons = document.querySelectorAll('.share-btn');

shareButtons.forEach(button => {
button.addEventListener('click', () => {
    const platform = button.dataset.platform;
    const blogPost = button.closest('.blog-post');
    const blogTitle = blogPost.querySelector('.blog-title').textContent;
    const blogLink = "https://tonybaskar.github.io/blogs.html";
    const authorTag = "Posted by Tony Baskar Y";  

    let shareUrl = '';

    if (platform === 'twitter') {
        const tweetText = `${blogTitle}\n\n${authorTag}\n\nRead more: ${blogLink}`;
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    } else if (platform === 'linkedin') {
        const linkedInText = `${blogTitle}\n\n${authorTag}\n\nRead more: ${blogLink}`;
        shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(blogLink)}&title=${encodeURIComponent(blogTitle)}&summary=${encodeURIComponent(linkedInText)}`;
    }

    window.open(shareUrl, '_blank');
});
});


    // add comment
    function openCommentPopup() {
document.getElementById("commentPopup").style.display = "block";
}

// Close Comment Popup
function closeCommentPopup() {
document.getElementById("commentPopup").style.display = "none";
}

    // Quotes for footer
    const quotes = [
        "Learning never exhausts the mind. – Leonardo da Vinci",
        "Technology is best when it brings people together.",
        "Push yourself, because no one else is going to do it for you.",
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
        "Code your dreams into reality 💻✨"
      ];
    let quoteIndex = 0;

    function displayQuote() {
        const quoteDisplay = document.getElementById('quoteDisplay');
        quoteDisplay.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    setInterval(displayQuote, 5000);
    displayQuote();
    document.addEventListener("DOMContentLoaded", function () {
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
});


    // Pagination script
    let currentPage = 1;
    const postsPerPage = 2;
    const blogPosts = document.querySelectorAll('.blog-post');
    const pagination = document.getElementById('pagination');

    function displayBlogs(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        blogPosts.forEach((post, index) => {
            if (index >= start && index < end) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });

        const totalPages = Math.ceil(blogPosts.length / postsPerPage);
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                displayBlogs(currentPage);
            });
            if (i === currentPage) {
                btn.style.backgroundColor = '#0056b3';
                btn.style.color = 'white';
            }
            pagination.appendChild(btn);
        }
    }

    // Dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    displayBlogs(currentPage);
