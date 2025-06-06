function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav .logo", {
    duration: 0.5,
    opacity: 0,
    y: -30,
  });
  tl.from("ul li", {
    duration: 0.5,
    opacity: 0,
    y: -30,
    stagger: 0.15,
  });
  tl.from(".links-buttons button", {
    duration: 0.5,
    opacity: 0,
    y: -30,
    stagger: 0.15,
  });

  tl.from(".hero-content .hero-title", {
    duration: 0.6,
    x: -300,
    opacity: 0,
  });

  tl.from(".hero-content .hero-description", {
    duration: 0.5,
    x: -200,
    opacity: 0,
  });
  tl.from(".hero-content .button button", {
    duration: 0.4,
    opacity: 0,
  });

  tl.from(
    ".hero-image img",
    {
      duration: 1,
      opacity: 0,
    },
    "-=1"
  );

  tl.from(".brands-section .marquee img", {
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.15,
  });
}

function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section",
      scroller: "body",
      start: "top 70%",
      end: "top -20%",
      scrub: 2,
    },
  });

  tl2.from(".services-section .section-heading h2", {
    y: 30,
    opacity: 0,
    duration: 1,
  });
  tl2.from(".services-section .section-heading p", {
    x: 30,
    opacity: 0,
    duration: 1,
  });

  tl2.from(
    ".services-cards #left1",
    {
      x: -40,
      opacity: 0,
      duration: 1.5,
    },
    "card12"
  );
  tl2.from(
    ".services-cards #right1",
    {
      x: 40,
      opacity: 0,
      duration: 1.5,
    },
    "card12"
  );
  tl2.from(
    ".services-cards #left2",
    {
      x: -40,
      opacity: 0,
      duration: 1.5,
    },
    "card34"
  );
  tl2.from(
    ".services-cards #right2",
    {
      x: 40,
      opacity: 0,
      duration: 1.5,
    },
    "card34"
  );
}

function page3Animation(){
    let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".contactUs-section",
      scroller: "body",
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
    },
  });

  tl3.from(".contactUs-content h2",{
    duration: 1,
    x : -30,
    opacity: 0,
  })
  tl3.from(".contactUs-content p",{
    duration: 1,
    x : -30,
    opacity: 0,
  })
  tl3.from(".contactUs-content button",{
    duration: 1,
    opacity: 0,
  })
  tl3.from(".image img",{
    duration: 2,
    opacity: 0,
    ease: "expoScale(0.5,7,none)",
  }, "-=2")

 
}

 function page4Animation(){
     let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".case-study-section",
      scroller: "body",
      start: "top 70%",
      end: "top 30%",
      scrub: 2,
    },
  });

 tl4.from(".case-study-section .section-heading h2", {
    y: 30,
    opacity: 0,
    duration: 1,
  });

  tl4.from(".case-study-section .section-heading p", {
    x: 30,
    opacity: 0,
    duration: 1,
  });
  
  tl4.from(".article-section #article1 .article",{
    x : -30,
    duration: 1,
    opacity: 0
  },"article")

  tl4.from(".article-section #article1 .learn-more",{
    x : -20,
    duration: 1,
    opacity: 0
  },"articleLearnMore")

  tl4.from(".article-section #article2 .article",{
    y : 30,
    duration: 1,
    opacity: 0
  },"article")
  tl4.from(".article-section #article2 .learn-more",{
    y : 20,
    duration: 1,
    opacity: 0
  },"articleLearnMore")

  tl4.from(".article-section #article3 .article",{
    x : 30,
    duration: 1,
    opacity: 0
  },"article")
  tl4.from(".article-section #article3 .learn-more",{
    x : 20,
    duration: 1,
    opacity: 0
  },"articleLearnMore")
 }

page1Animation();
page2Animation();
page3Animation();
page4Animation();

 

  