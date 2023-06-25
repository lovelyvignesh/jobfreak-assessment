 function showContent(component) {
            var homeContent = "Welcome to the Home Screen";
            var contactContent = "Contact Information: <br> Phone: 123-456-7890 <br> Email:vignesh@vignesh.com";
            var infoContent = "Information Page: <br> This is Information screen";
            var guideContent = "Guide Page: <br> This is guide screen";
            var contentDiv = document.getElementById("content");
            switch (component) {
                case "home":
                    contentDiv.innerHTML = homeContent;
                    break;
                case "contact":
                    contentDiv.innerHTML = contactContent;
                    break;
                case "information":
                    contentDiv.innerHTML = infoContent;
                    break;
                case "guide":
                    contentDiv.innerHTML = guideContent;
                    break;
                default:
                    contentDiv.innerHTML = "";
            }
        }