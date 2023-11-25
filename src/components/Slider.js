import React from 'react'
import Card from './Card'
import image from './team/dummy.jpg'

const Slider=()=>{
	return(
		<>
		<div className="container">
      <div className="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded">
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2214 1.96759L2 11.189L11.2214 20.4104" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <ul className="image-list">
       		<Card name="SomeRandomGuy" role="Some Role" image={image}/>
            <Card name="SomeRandomGuy" role="Some Role" image={image}/>
            <Card name="SomeRandomGuy" role="Some Role" image={image}/>
            <Card name="SomeRandomGuy" role="Some Role" image={image}/>
            <Card name="SomeRandomGuy" role="Some Role" image={image}/>
            <Card name="SomeRandomGuy" role="Some Role" image={image}/>
       	
        </ul>
        <button id="next-slide" className="slide-button material-symbols-rounded">
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.7786 20.4103L11 11.1889L1.7786 1.96753" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>

	</>
	)
}

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


export default Slider;