// Main Content
let mContent = $("main.main-content");
// Headers
let hed1 = $(".header-1");
let hed2 = $(".header-2");
let hed3 = $(".header-3");
let hed4 = $(".header-4");
let mainHead = $("#main");
let allHeads = document.querySelectorAll("header");
let current = 1;

// Control The Sections
let sectionOne = $(".section-1");
let sectionTwo = $(".section-2");
let sectionThree = $(".section-3");
let sectionFour = $(".section-4");

sectionTwo.hide();
sectionThree.hide();
sectionFour.hide();

// The Beginning Animation
mContent.hide();

setTimeout(() => {
    mContent.fadeIn();
} , 2800);
setTimeout(() => {
    $(".stars").removeClass("stars-animation");
} , 2900);
// Make All The Headers Take The Same Height
function updateHeight() {
    let defaultHeight = mainHead[0].offsetHeight;
    allHeads.forEach((ele, index) => {
        if (index !== 0) {
            ele.style.height = `${defaultHeight}px`;
        }
    })

}

updateHeight();

const resizer = new ResizeObserver(updateHeight);

resizer.observe(mainHead[0]);

// The Menu
// Compass Animation
let compass = $(".circle");
compass.on("click", () => {
    setTimeout(() => {
        compass.toggleClass("rotate");
    }, 1000)
    controlNav();
})

// controlNav();

let opened = false;

$(".ex-ul").removeClass("d-flex");
$(".ex-ul").hide();

function controlNav() {
    if (opened === false) {
        $(".compass").removeClass("justify-content-center");
        $(".main-nav-links").removeClass("justify-content-between");
        $(".mas-title, .page-title").removeClass("d-flex");
        $(".mas-title, .page-title").hide();
        $(".mas-title, .page-title").addClass("opacity-0");
        $(".compass").addClass("center");
        $(".compass").removeClass("col-4");
        $(".compass").addClass("col-2");
        setTimeout(() => {
            $(".compass").addClass("trans");
            $(".compass").addClass("l-0");
        }, 50)
        setTimeout(() => {
            $(".ex-ul").show();
            $(".ex-ul").addClass("d-flex");
            $(".ex-ul").animate({opacity: "1"}, 300);
        }, 1000)
        opened = true;
    }
    else {
        setTimeout(() => {
            $(".ex-ul").animate({opacity: "0"}, 300);
            setTimeout(() => {
                $(".compass").addClass("trans");
                $(".compass").removeClass("l-0");
                setTimeout(() => {
                    $(".ex-ul").removeClass("d-flex");
                    $(".ex-ul").hide();
                    $(".compass").removeClass("trans");
                    $(".compass").removeClass("col-2");
                    $(".compass").addClass("col-4");
                    $(".mas-title, .page-title").addClass("d-flex");
                    $(".mas-title, .page-title").show();
                    $(".mas-title, .page-title").removeClass("opacity-0");
                    $(".compass").removeClass("center");
                    $(".main-nav-links").addClass("justify-content-between");
                    $(".compass").addClass("justify-content-center");
                    opened = false;
                }, 600);
            }, 250)
        }, 100);
    }
}

// Navigator Optione For Header 1 (Yosemite)
let yos1 = $(".header-1 ul.navigator:first-of-type  li:first-child");
let jos1 = $(".header-1 ul.navigator:first-of-type  li:nth-child(2)");
let yel1 = $(".header-1 ul.navigator:first-of-type  li:nth-child(3)");
let ante1 = $(".header-1 ul.navigator:first-of-type  li:last-child");

jos1.on("click", function (event) {
    hed1.addClass("transition");
    hed2.addClass("transition");
    hed1.addClass("away-l");
    hed2.removeClass("away-r");
    // Animation
    jos2.addClass("active-l");
    // Remove Animation From Yosemite
    yos1.removeClass("active-r");
    yos1.removeClass("active-l");
    current = 2;
    sectionOne.hide();
    sectionTwo.fadeIn();
})

yel1.on("click", function (event) {
    hed1.addClass("transition");
    hed3.addClass("transition");
    hed1.addClass("away-l");
    hed3.removeClass("away-r");
    // Animation
    yel3.addClass("active-l");
    // Remove Animation From Yosemite
    yos1.removeClass("active-r");
    yos1.removeClass("active-l");
    current = 3;
    sectionOne.hide();
    sectionThree.fadeIn();
})
ante1.on("click", function (event) {
    hed1.addClass("transition");
    hed4.addClass("transition");
    hed1.addClass("away-l");
    hed4.removeClass("away-r");
    // Animation
    ante4.addClass("active-l");
    // Remove Animation From Yosemite
    yos1.removeClass("active-r");
    yos1.removeClass("active-l");
    current = 4;
    sectionOne.hide();
    sectionFour.fadeIn();
})

// Navigator Optione For Header 2 (Joshua Tree)
let yos2 = $(".header-2 ul.navigator:first-of-type  li:first-child");
let jos2 = $(".header-2 ul.navigator:first-of-type  li:nth-child(2)");
let yel2 = $(".header-2 ul.navigator:first-of-type  li:nth-child(3)");
let ante2 = $(".header-2 ul.navigator:first-of-type  li:last-child");

yos2.on("click", function (event) {
    hed1.addClass("transition");
    hed2.addClass("transition");
    hed1.removeClass("away-l");
    hed2.addClass("away-r");
    // Animation
    yos1.addClass("active-r");
    // Remove Animation From Joshua Tree
    jos2.removeClass("active-r");
    jos2.removeClass("active-l");
    current = 1;
    sectionTwo.hide();
    sectionOne.fadeIn();
})

yel2.on("click", function (event) {
    hed2.removeClass("reset-r");
    hed2.addClass("reset-l");
    setTimeout(() => {
        hed2.addClass("transition");
        hed3.addClass("transition");
        hed2.addClass("away-l");
        hed3.removeClass("away-r");
    }, 50);
    setTimeout(() => {
        hed2.removeClass("transition");
        hed2.removeClass("reset-l");
        hed2.addClass("reset-r");
        hed2.removeClass("away-l");
        hed2.addClass("away-r");
    }, 350)
    setTimeout(() => {
        hed2.addClass("transition");
    }, 370)
    // Animation
    yel3.addClass("active-l");
    // Remove Animation From Joshua Tree
    jos2.removeClass("active-r");
    jos2.removeClass("active-l");
    current = 3;
    sectionTwo.hide();
    sectionThree.fadeIn();
})

ante2.on("click", function (event) {
    hed4.addClass("transition");
    hed4.removeClass("away-r");
    hed2.removeClass("transition");
    hed2.removeClass("reset-r");
    hed2.addClass("reset-l");
    setTimeout(() => {
        hed2.addClass("transition");
        hed2.addClass("away-l");
    }, 5)
    setTimeout(() => {
        hed2.removeClass("transition");
        hed2.removeClass("away-l");
        hed2.removeClass("reset-l");
        hed2.addClass("reset-r");
        hed2.addClass("away-r");
    }, 350)
    // Animation
    ante4.addClass("active-l");
    // Remove Animation From Joshua Tree
    jos2.removeClass("active-r");
    jos2.removeClass("active-l");
    current = 4;
    sectionTwo.hide();
    sectionFour.fadeIn();
})





// Navigator Optione For Header 3 (Yellow Stone)
let yos3 = $(".header-3 ul.navigator:first-of-type  li:first-child");
let jos3 = $(".header-3 ul.navigator:first-of-type  li:nth-child(2)");
let yel3 = $(".header-3 ul.navigator:first-of-type  li:nth-child(3)");
let ante3 = $(".header-3 ul.navigator:first-of-type  li:last-child");

yos3.on("click", function (event) {
    hed1.addClass("transition");
    hed3.addClass("transition");
    hed1.removeClass("away-l");
    hed3.addClass("away-r");
    // Animation
    yos1.addClass("active-r");
    // Remove Animation From Yellow Stone
    yel3.removeClass("active-r");
    yel3.removeClass("active-l");
    current = 1;
    sectionThree.hide();
    sectionOne.fadeIn();
})

jos3.on("click", () => {
    hed2.removeClass("transition");
    hed2.removeClass("reset-r");
    hed2.addClass("reset-l");
    hed2.removeClass("away-r");
    hed2.addClass("away-l");
    setTimeout(() => {
        hed2.addClass("transition");
        hed2.removeClass("away-l");
        hed3.addClass("away-r");
    }, 50);
    setTimeout( () => {
            hed2.removeClass("reset-l");
            hed2.addClass("reset-r");
        }
    , 350)
    // Animation
    jos2.addClass("active-r");
    // Remove Animation From Yellow Stone
    yel3.removeClass("active-r");
    yel3.removeClass("active-l");
    current = 2;
    sectionThree.hide();
    sectionTwo.fadeIn();
});

ante3.on("click", () => {
    hed3.removeClass("transition");
    hed3.removeClass("reset-r");
    hed3.addClass("reset-l");
    setTimeout(() => {
        hed3.addClass("transition");
        hed4.addClass("transition");
        hed4.removeClass("away-r");
        hed3.addClass("away-l");
    }, 5);
    setTimeout(() => {
        hed3.removeClass("transition");
        hed3.removeClass("reset-l");
        hed3.addClass("reset-r");
        hed3.removeClass("away-l");
        hed3.addClass("away-r");
    }, 350)
    setTimeout(() => {
        hed3.addClass("transition");
    }, 352);
    // Animation
    ante4.addClass("active-l");
    // Remove Animation From Yellow Stone
    yel3.removeClass("active-r");
    yel3.removeClass("active-l");
    current = 4;
    sectionThree.hide();
    sectionFour.fadeIn();
})


// Navigator Optione For Header 4 (Antelope Canyon)
let yos4 = $(".header-4 ul.navigator:first-of-type  li:first-child");
let jos4 = $(".header-4 ul.navigator:first-of-type  li:nth-child(2)");
let yel4 = $(".header-4 ul.navigator:first-of-type  li:nth-child(3)");
let ante4 = $(".header-4 ul.navigator:first-of-type  li:last-child");

yos4.on("click", function (event) {
    hed1.addClass("transition");
    hed4.addClass("transition");
    hed1.removeClass("away-l");
    hed4.addClass("away-r");
    // Animation
    yos1.addClass("active-r");
    // Remove Animation From Yellow Stone
    ante4.removeClass("active-r");
    ante4.removeClass("active-l");
    current = 1;
    sectionFour.hide();
    sectionOne.fadeIn();
})

jos4.on("click", () => {
    hed2.remove("transition");
    hed2.removeClass("reset-r");
    hed2.addClass("reset-l");
    hed2.removeClass("away-r");
    hed2.addClass("away-l");
    setTimeout(() => {
        hed2.addClass("transition");
        hed4.addClass("transition");
        hed2.removeClass("away-l");
        hed4.addClass("away-r");
    } ,5)
    setTimeout(() => {
        hed2.remove("transition");
        hed2.removeClass("reset-l");
        hed2.addClass("reset-r");
    } ,350);
    setTimeout(() => {
        hed2.addClass("transition");
    } ,352)
    // Animation
    jos2.addClass("active-r");
    // Remove Animation From Yellow Stone
    ante4.removeClass("active-r");
    ante4.removeClass("active-l");
    current = 2;
    sectionFour.hide();
    sectionTwo.fadeIn();
})

yel4.on("click", () => {
    hed3.remove("transition");
    hed3.removeClass("reset-r");
    hed3.addClass("reset-l");
    hed3.removeClass("away-r");
    hed3.addClass("away-l");
    setTimeout(() => {
        hed3.addClass("transition");
        hed4.addClass("transition");
        hed3.removeClass("away-l");
        hed4.addClass("away-r");
    },5)
    setTimeout(() => {
        hed3.remove("transition");
        hed3.removeClass("reset-l");
        hed3.addClass("reset-r");
    },350);
    setTimeout(() => {
        hed3.addClass("transition");
    } ,352)
    // Animation
    yel3.addClass("active-r");
    // Remove Animation From Yellow Stone
    ante4.removeClass("active-r");
    ante4.removeClass("active-l");
    current = 3;
    sectionFour.hide();
    sectionThree.fadeIn();
})

// Carousel Controllers
let carCon = $(".car-con");

// carCon.on("click", () => {
//     $(".carousel-item").animate({opacity: 0});
//     $(".carousel-item.active").animate({opacity: 1});
// })

// Control Using Arrows
let leftArrow = $(".arrow-left");
let rightArrow = $(".arrow-right");
let currentHeader;
let commingHeader;
let currentBtn;
let commingBtn;
let currentBoadCastRight = 0;
let commingBoadCastLeft = 0;


let isClickableRight = true;

rightArrow.on("click", function() {
    if (isClickableRight) {
        isClickableRight = false;
        goRight();

        setTimeout(() => {
            isClickableRight = true;
        }, 1300); // Allow click again after 0.5 seconds
    }
});



let isClickableLeft = true;

leftArrow.on("click", function() {
    if (isClickableLeft) {
        isClickableLeft = false;
        goLeft();

        setTimeout(() => {
            isClickableLeft = true;
        }, 1300); // Allow click again after 0.5 seconds
    }
});

function goRight() {
    currentBoadCastRight = 0;
    commingBoadCastLeft = 0;
    currentHeader = $(`.header-${current.toString()}`);
    commingHeader = $(`.header-${(current + 1 > 4 ? 1 : current + 1).toString()}`);
    currentBtn = $(`.header-${current.toString()} ul.navigator  li:nth-child(${current.toString()})`);
    commingBtn = $(`.header-${((current + 1 > 4) ? 1 : current + 1).toString()} ul.navigator  li:nth-child(${((current + 1 > 4) ? 1 : current + 1).toString()})`);
    // Logic of Transformers
    if (currentHeader.hasClass("reset-r")) {
        currentHeader.removeClass("reset-r");
        currentHeader.addClass("reset-l")
        currentBoadCastRight = 1;
    }
    if (commingHeader.hasClass("away-l")) {
        commingHeader.removeClass("transition");
        commingHeader.removeClass("reset-l");
        commingHeader.removeClass("away-l")
        commingHeader.addClass("away-r");
        commingHeader.addClass("reset-r")
        commingBoadCastLeft = 1;
    }
    setTimeout(() => {
        currentHeader.addClass("transition");
        commingHeader.addClass("transition");
        currentHeader.addClass("away-l");
        commingHeader.removeClass("away-r");
        $(`.section-${current.toString()}`).hide();
        $(`.section-${((current + 1 > 4) ? 1 : current + 1).toString()}`).fadeIn();
        currentBtn.removeClass("active-r");
        currentBtn.removeClass("active-l");
        commingBtn.addClass("active-l");
        // Update Current
        current = current + 1 > 4 ? 1 : current + 1;
    }, .5);
    setTimeout(() => {
        currentHeader.removeClass("transition");
        commingHeader.removeClass("transition");
        if (currentBoadCastRight) {
            currentHeader.removeClass("reset-l");
            currentHeader.addClass("reset-r");
            currentHeader.removeClass("away-l");
            currentHeader.addClass("away-r");
        }
        if (commingBoadCastLeft) {
            commingHeader.removeClass("reset-r");
            commingHeader.addClass("reset-l");
        }
    }, 350)
    setTimeout(() => {
        currentHeader.addClass("transition");
        commingHeader.addClass("transition");
    }, 450)
}

let currentBoadCastLeft = 0;
let commingBoadCastRight = 0;

function goLeft() {
    currentBoadCastLeft = 0;
    commingBoadCastRight = 0;
    currentHeader = $(`.header-${current.toString()}`);
    commingHeader = $(`.header-${(current - 1 < 1 ? 4 : current - 1).toString()}`);
    currentBtn = $(`.header-${current.toString()} ul.navigator  li:nth-child(${current.toString()})`);
    commingBtn = $(`.header-${(current - 1 < 1 ? 4 : current - 1).toString()} ul.navigator  li:nth-child(${((current - 1 < 1) ? 4 : current - 1).toString()})`);
    if (currentHeader.hasClass("reset-l")) {
        currentHeader.removeClass("reset-l");
        currentHeader.addClass("reset-r")
        currentBoadCastLeft = 1;
    }
    if (commingHeader.hasClass("away-r")) {
        commingHeader.removeClass("transition");
        commingHeader.removeClass("reset-r");
        commingHeader.removeClass("away-r")
        commingHeader.addClass("away-l");
        commingHeader.addClass("reset-l")
        commingBoadCastRight = 1;
    }
    setTimeout(() => {
        currentHeader.addClass("transition");
        commingHeader.addClass("transition");
        currentHeader.addClass("away-r");
        commingHeader.removeClass("away-l");
        $(`.section-${current.toString()}`).hide();
        $(`.section-${(current - 1 < 1 ? 4 : current - 1).toString()}`).fadeIn();
        currentBtn.removeClass("active-r");
        currentBtn.removeClass("active-l");
        commingBtn.addClass("active-r");
        // Update Current
        current = current - 1 < 1 ? 4 : current - 1;
    }, .5);
    setTimeout(() => {
        currentHeader.removeClass("transition");
        commingHeader.removeClass("transition");
        if (currentBoadCastLeft) {
            currentHeader.removeClass("reset-r");
            currentHeader.addClass("reset-l");
            currentHeader.removeClass("away-r");
            currentHeader.addClass("away-l");
        }
        if (commingBoadCastRight) {
            commingHeader.removeClass("reset-l");
            commingHeader.addClass("reset-r");
        }
    }, 350)
    setTimeout(() => {
        currentHeader.addClass("transition");
        commingHeader.addClass("transition");
    }, 450)
}


// Start The Sections Area
let con = $("main:nth-of-type(2) section.section-style .controller");
con.html('Hide The Content &nbsp;&nbsp;<i class="fa-solid fa-angle-down"></i>');
let sectionStyle = $("main:nth-child(2) section.section-style .transition-container");
con.on("click", function () {
    sectionStyle.slideToggle();
    if ($(this).html() == 'Hide The Content &nbsp;&nbsp;<i class="fa-solid fa-angle-down"></i>') {
        con.html('Show The Content &nbsp;&nbsp;<i class="fa-solid fa-angle-down"></i>')
    }
    else {
        con.html('Hide The Content &nbsp;&nbsp;<i class="fa-solid fa-angle-down"></i>');
    }
})

// Add An Animation To The Title
function addAnimation() {
    con.addClass("left-animation");
    setTimeout(() => {
        con.removeClass("left-animation");
    },500)
}

addAnimation();

const ani = new MutationObserver(addAnimation);

ani.observe(con[0], {
    childList: true,
    subtree: true
});

// Change the width of the Mountain div and the sm-cards



function mountainWidth1() {
    let vwWidth = window.innerWidth;
    let blueWidth = $(`section.section-1 .parent .cards-one div.box-blue`)[0].offsetWidth;
    let mountain = $(`section.section-1 .parent .cards-two div.mountain`);
    let smCards = $(`section.section-1 .parent .sm-cards`);
    console.log(vwWidth);
    if (vwWidth < 883) {
        mountain.css("width",`${blueWidth}px`);
        smCards.css("width",`${blueWidth}px`);
    }
    else {
        mountain.css("width",`${(blueWidth * 2) + 30}px`);
        smCards.css("width",`${(blueWidth * 2) + 30}px`);
    }
}

mountainWidth1();

const mountainResizer1 = new ResizeObserver(mountainWidth1);

mountainResizer1.observe($(`section.section-1 .parent .cards-one div.box-blue`)[0]);


function displayViewportWidth() {
    let vwWidth = window.innerWidth;
    console.log(`Viewport width: ${vwWidth}px`);
}

// Call the function to log the viewport width
displayViewportWidth();

// Optional: Update on resize
window.addEventListener('resize', displayViewportWidth);


function mountainWidth2() {
    let vwWidth = window.innerWidth;
    let blueWidth = $(`section.section-2 .parent .cards-one div.box-blue`)[0].offsetWidth;
    let mountain = $(`section.section-2 .parent .cards-two div.mountain`);
    let smCards = $(`section.section-2 .parent .sm-cards`);
    if (vwWidth < 881) {
        mountain.css("width",`${blueWidth}px`);
        smCards.css("width",`${blueWidth}px`);
    }
    else {
        mountain.css("width",`${(blueWidth * 2) + 30}px`);
        smCards.css("width",`${(blueWidth * 2) + 30}px`);
    }
}

mountainWidth2();

const mountainResizer2 = new ResizeObserver(mountainWidth2);

mountainResizer2.observe($(`section.section-2 .parent .cards-one div.box-blue`)[0]);


function mountainWidth3() {
    let vwWidth = window.innerWidth;
    let blueWidth = $(`section.section-3 .parent .cards-one div.box-blue`)[0].offsetWidth;
    let mountain = $(`section.section-3 .parent .cards-two div.mountain`);
    let smCards = $(`section.section-3 .parent .sm-cards`);
    if (vwWidth < 881) {
        mountain.css("width",`${blueWidth}px`);
        smCards.css("width",`${blueWidth}px`);
    }
    else {
        mountain.css("width",`${(blueWidth * 2) + 30}px`);
        smCards.css("width",`${(blueWidth * 2) + 30}px`);
    }
}

mountainWidth3();

const mountainResizer3 = new ResizeObserver(mountainWidth3);

mountainResizer3.observe($(`section.section-3 .parent .cards-one div.box-blue`)[0]);


function mountainWidth4() {
    let vwWidth = window.innerWidth;
    let blueWidth = $(`section.section-4 .parent .cards-one div.box-blue`)[0].offsetWidth;
    let mountain = $(`section.section-4 .parent .cards-two div.mountain`);
    let smCards = $(`section.section-4 .parent .sm-cards`);
    if (vwWidth < 881) {
        mountain.css("width",`${blueWidth}px`);
        smCards.css("width",`${blueWidth}px`);
    }
    else {
        mountain.css("width",`${(blueWidth * 2) + 30}px`);
        smCards.css("width",`${(blueWidth * 2) + 30}px`);
    }
}

mountainWidth4();

const mountainResizer4 = new ResizeObserver(mountainWidth4);

mountainResizer4.observe($(`section.section-4 .parent .cards-one div.box-blue`)[0]);

