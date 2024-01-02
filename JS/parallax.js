const order_text = "Order Today =>";


var tl = gsap.timeline();

tl.fromTo(".text-1", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 0.7 });
tl.fromTo(".text-2", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 0.7 });
tl.fromTo(".text-3", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 0.7});
tl.fromTo(".text-3, .text-2, .text-1", { opacity: 1}, { opacity: 0, duration: 0.7});
tl.fromTo(".text-2", { opacity: 0, width: "0" }, { opacity: 1, width: "26vw", duration: 1.5, text: order_text, fontSize: "7vw", textAlign: "center"  });
tl.fromTo(".arrow", { opacity: 0}, { opacity: 1, duration: 0.7, repeat: 1});
tl.fromTo(".merch_shirt", { scale: 0.8}, { scale: 1, duration: 1, repeat: 1, ease: "power2.outIn"});




