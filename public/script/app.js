document.getElementById('urlForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const longUrl = document.getElementById('longUrl').value;
    if (!longUrl) {
        alert("Please provide a valid URL");
        return;  // Prevent the form from being submitted if URL is missing
    }
    const response = await fetch('http://localhost:5000/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ originalUrl: longUrl })
    });
  
    let data;
    try {
        // Check if the response contains JSON data
        data = await response.json();
    } catch (error) {
        console.error("Server did not return JSON:", error);
        alert("Error: Server did not return a valid JSON response.");
        return;
    }
  
    if (response.ok) {
        const shortenedUrlContainer = document.getElementById('shortenedUrlContainer');
        const shortenedUrlElement = document.getElementById('shortenedUrl');
  
        shortenedUrlElement.href = data.shortUrl;
        shortenedUrlElement.textContent = data.shortUrl;
        shortenedUrlContainer.classList.remove('hidden');
    } else {
        alert('Error: ' + (data && data.message ? data.message : 'Something went wrong'));
    }
  });
  
  document.getElementById('copyButton').addEventListener('click', () => {
    const shortenedUrl = document.getElementById('shortenedUrl').textContent;
    navigator.clipboard.writeText(shortenedUrl).then(() => {
        alert('Shortened URL copied to clipboard!');
    }).catch((err) => {
        console.error('Failed to copy: ', err);
    });
  });
  