function handleSubmit(event) {
    event.preventDefault(); 

    
    var messageElement = document.getElementById('subscribe-message');
    messageElement.textContent = 'Thanks for subscribing ! You are AMAZING';

    
    var form = document.getElementById('newsletter-form');
    form.reset();
}


function handleSubmit(event) {
    event.preventDefault(); 
    
    
    const blogCard = event.target.closest('.blog-card');
    
    
    const textInputs = blogCard.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach(input => {
      input.value = ''; 
    });
    
    
    const radioButtons = blogCard.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radioButton => {
      radioButton.checked = false; 
    });
  }
  
  
document.addEventListener("DOMContentLoaded", function() {
    
    function redirectToPage(page) {
        window.location.href = page;
    }

    
    const cards = document.querySelectorAll(".card");

    
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            switch (card.id) {
                case "entertainment":
                    redirectToPage("entertainment.html");
                    break;
                case "food":
                    redirectToPage("food.html");
                    break;
                case "travel":
                    redirectToPage("travel.html");
                    break;
                case "beauty":
                    redirectToPage("beauty.html");
                    break;
                case "health":
                    redirectToPage("health.html");
                    break;
                case "fashion":
                    redirectToPage("fashion.html");
                    break;
                default:
                    break;
            }
        });
    });
});


  
  
