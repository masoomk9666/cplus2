"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Ellipsis, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import MegaMenuContent from "./MegaMenuContent";
import MobileMegaMenu from "./MobileMegaMenu";

const HeaderB = () => {
  const pathname = usePathname();
  const [active, setActive] = useState("HOME");
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isServicesMegaOpen, setIsServicesMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLogoHidden, setIsLogoHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState("EN");

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });

  const navRef = useRef(null);
  const megaRef = useRef(null);
  const servicesMegaRef = useRef(null);
  const productBtnRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const itemRefs = useRef({});
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "PRODUCTS", link: "/products" },
    { name: "SERVICES", link: "/services" },
    { name: "INDUSTRIES", link: "/industries" },
    { name: "CAREERS", link: "/careers" },
    { name: "CONTACT US", link: "/contact" },
  ];

  useEffect(() => {
    if (!pathname) return;
    
    const currentItem = menuItems.find(item => {
      if (item.link === "/" && pathname === "/") return true;
      if (item.link !== "/" && pathname.startsWith(item.link)) return true;
      return false;
    });
    
    if (currentItem) {
      setActive(currentItem.name);
    }
  }, [pathname]);

  useEffect(() => {
    if (isMobile || !hasMounted || !active) return;

    const el = itemRefs.current[active];
    if (!el || !navRef.current) {
      setTimeout(() => {
        const el = itemRefs.current[active];
        if (el && navRef.current) {
          const rect = el.getBoundingClientRect();
          const parentRect = navRef.current.getBoundingClientRect();
          
          setIndicator({
            left: rect.left - parentRect.left,
            width: rect.width,
            opacity: 1,
          });
        }
      }, 100);
      return;
    }

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, [active, isCollapsed, isScrolled, isMobile, hasMounted]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkInitialScroll = () => {
      const scrolled = scrollY > 80;
      setIsScrolled(scrolled);
      setIsCollapsed(scrolled && !isMegaOpen && !isServicesMegaOpen && !isMobile);
      setHasMounted(true);
    };

    checkInitialScroll();
  }, [scrollY, isMegaOpen, isServicesMegaOpen, isMobile]);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth < 1024;
      setIsMobile(isMobileDevice);
      
      if (isMobileDevice) {
        setIsLogoHidden(scrollY > 80 && !isMobileMenuOpen);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [scrollY, isMobileMenuOpen]);

  useEffect(() => {
    const scrolled = scrollY > 80;
    
    setIsScrolled(scrolled);
    
    if (!isMobile) {
      if (scrollY > 80 && !isMegaOpen && !isServicesMegaOpen && !isMobile) setIsCollapsed(true);
      if (scrollY <= 80 && !isMegaOpen && !isServicesMegaOpen && !isMobile) setIsCollapsed(false);
    } else {
      if (scrollY > 80 && !isMobileMenuOpen) {
        setIsLogoHidden(true);
      } else {
        setIsLogoHidden(false);
      }
    }
  }, [scrollY, isMegaOpen, isServicesMegaOpen, isMobile, isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest("button")?.classList.contains("mobile-menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
        if (scrollY > 80 && isMobile) {
          setIsLogoHidden(true);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, scrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsLogoHidden(false);
    } else {
      if (scrollY > 80 && isMobile) {
        setIsLogoHidden(true);
      }
    }
  }, [isMobileMenuOpen, isMobile, scrollY]);

  const handleMobileLinkClick = (itemName) => {
    setActive(itemName);
    setIsMobileMenuOpen(false);
    if (itemName !== "PRODUCTS" && itemName !== "SERVICES") {
      setIsMegaOpen(false);
      setIsServicesMegaOpen(false);
    }
    
    if (scrollY > 80 && isMobile) {
      setIsLogoHidden(true);
    }
  };

  const isIndicatorOverItem = (itemName) => {
    if (isMobile) return false;

    const itemEl = itemRefs.current[itemName];
    if (!itemEl || !navRef.current) return false;

    const itemRect = itemEl.getBoundingClientRect();
    const indicatorLeft = indicator.left;
    const indicatorRight = indicator.left + indicator.width;
    const itemLeft =
      itemRect.left - navRef.current.getBoundingClientRect().left;
    const itemRight = itemLeft + itemRect.width;

    return indicatorLeft < itemRight && indicatorRight > itemLeft;
  };

  const getTextColor = (itemName) => {
    if (isMobile) {
      return itemName === active ? "text-black font-bold" : "text-gray-600";
    }

    const isActive = itemName === active;
    const indicatorOverThis = isIndicatorOverItem(itemName);

    if (!isScrolled) {
      if (indicatorOverThis) {
        return "text-black font-bold";
      } else if (isActive) {
        return "text-black font-bold"; // Changed from white to black
      } else {
        return "text-black"; // Changed from white to black
      }
    } else {
      if (indicatorOverThis) {
        return "text-black font-bold";
      } else if (isActive) {
        return "text-black font-bold";
      } else {
        return "text-black";
      }
    }
  };

  useEffect(() => {
    if (isMobile || !hasMounted) return;

    if (isMegaOpen && productBtnRef.current && navRef.current) {
      const rect = productBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    } else if (isServicesMegaOpen && servicesBtnRef.current && navRef.current) {
      const rect = servicesBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  }, [isMegaOpen, isServicesMegaOpen, isMobile, hasMounted]);

  const handleHover = (e, itemName) => {
    if (isMobile || !hasMounted) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });

    if (itemName !== "PRODUCTS" && itemName !== "SERVICES") {
      setTimeout(() => {
        if (!isCollapsed) {
          setIsMegaOpen(false);
          setIsServicesMegaOpen(false);
        }
      }, 50);
    }
  };

  const handleProductsHover = (e) => {
    if (isMobile || !hasMounted) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });

    setIsMegaOpen(true);
    setIsServicesMegaOpen(false);
  };

  const handleServicesHover = (e) => {
    if (isMobile || !hasMounted) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });

    setIsServicesMegaOpen(true);
    setIsMegaOpen(false);
  };

  const handleMouseLeave = () => {
    if (isMobile || !hasMounted) return;

    if (isMegaOpen && productBtnRef.current && navRef.current) {
      const rect = productBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    } else if (isServicesMegaOpen && servicesBtnRef.current && navRef.current) {
      const rect = servicesBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    } else {
      const el = itemRefs.current[active];
      if (!el || !navRef.current || isCollapsed) return;

      const rect = el.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }

    if (isScrolled && !isMegaOpen && !isServicesMegaOpen) {
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    const handleOutside = (e) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target) &&
        productBtnRef.current &&
        !productBtnRef.current.contains(e.target) &&
        servicesMegaRef.current &&
        !servicesMegaRef.current.contains(e.target) &&
        servicesBtnRef.current &&
        !servicesBtnRef.current.contains(e.target)
      ) {
        setIsMegaOpen(false);
        setIsServicesMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleMegaMenuEnter = () => {
    if (isMobile || !hasMounted) return;

    if (productBtnRef.current && navRef.current) {
      const rect = productBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  };

  const handleServicesMegaMenuEnter = () => {
    if (isMobile || !hasMounted) return;

    if (servicesBtnRef.current && navRef.current) {
      const rect = servicesBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  };

  const handleMegaMenuLeave = () => {
    setIsMegaOpen(false);

    if (isMobile || !hasMounted) return;

    const el = itemRefs.current[active];
    if (!el || !navRef.current || isCollapsed) return;

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  const handleServicesMegaMenuLeave = () => {
    setIsServicesMegaOpen(false);

    if (isMobile || !hasMounted) return;

    const el = itemRefs.current[active];
    if (!el || !navRef.current || isCollapsed) return;

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  const handleEllipsisHover = () => {
    if (isMobile) return;
    setIsCollapsed(false);
  };

  const handleEllipsisLeave = () => {
    if (isMobile || !hasMounted) return;
    
    if (isScrolled && !isMegaOpen && !isServicesMegaOpen) {
      setTimeout(() => {
        setIsCollapsed(true);
      }, 100);
    }
  };

  const handleMobileProductsClick = () => {
    setIsMegaOpen(!isMegaOpen);
    setIsServicesMegaOpen(false);
  };

  const handleMobileServicesClick = () => {
    setIsServicesMegaOpen(!isServicesMegaOpen);
    setIsMegaOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getMobileMenuButtonBg = () => {
    if (typeof window === 'undefined') {
      return "bg-transparent";
    }
    
    return isMobileMenuOpen || scrollY > 80
      ? "bg-[#D0F94A]"
      : "bg-transparent";
  };

  const getMobileMenuIconColor = () => {
    if (typeof window === 'undefined') {
      return "text-black"; // Changed from white to black
    }
    
    return scrollY > 80 ? "text-black" : "text-black"; // Changed from white to black
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "عربي" : "EN");
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500`}>
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-30 py-3 bg-transparent">
          <img
            src="/images/logos/betaBlackLogo.png"
            alt="Logo"
            className={`w-40 md:w-50 transition-all duration-500 z-100 ${
              isMobile
                ? isLogoHidden
                  ? "-translate-y-20 opacity-0"
                  : "translate-y-0 opacity-100"
                : isScrolled && !isMobile
                  ? "-translate-y-20 opacity-0"
                  : "translate-y-0 opacity-100"
            }`}
          />

          <button
            className={`lg:hidden mobile-menu-toggle z-60 transition-all duration-300 rounded-full ${
              isMobileMenuOpen ? "p-2" : "p-2 rounded-full"
            } ${getMobileMenuButtonBg()}`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-black " />
            ) : (
              <Menu size={28} className={getMobileMenuIconColor()} />
            )}
          </button>

          <nav
            className={`hidden lg:flex items-center space-x-6 transition-all duration-[1000ms] ease-in-out ${isScrolled ? "translate-x-28" : ""}`}
          >
            <div
              ref={navRef}
              onMouseLeave={handleMouseLeave}
              className={`relative flex items-center p-2 rounded-full transition-all ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isCollapsed
                  ? "bg-[#D0F94A]"
                  : isScrolled
                    ? "bg-white"
                    : "bg-white/10" // Background same as original
              }`}
            >
              <span
                className={
                  isCollapsed
                    ? "hidden"
                    : `absolute top-1 bottom-1 rounded-full bg-[#D0F94A] text-black transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden`
                }
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
              >
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-15 h-3 rounded-full bg-white opacity-100 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out  group-hover:scale-100"></span>
              </span>

              {!isCollapsed ? (
                menuItems.map((item) => {
                  if (item.name === "PRODUCTS") {
                    return (
                      <Link
                        key={item.name}
                        ref={(el) => {
                          productBtnRef.current = el;
                          itemRefs.current[item.name] = el;
                        }}
                        href="/products"
                        onMouseEnter={handleProductsHover}
                        onClick={() => setActive("PRODUCTS")}
                        className={`relative z-10 flex items-center gap-1 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${getTextColor(item.name)}`}
                      >
                        PRODUCTS
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isMegaOpen ? "rotate-180" : ""}`}
                        />
                      </Link>
                    );
                  } else if (item.name === "SERVICES") {
                    return (
                      <Link
                        key={item.name}
                        ref={(el) => {
                          servicesBtnRef.current = el;
                          itemRefs.current[item.name] = el;
                        }}
                        href="/services"
                        onMouseEnter={handleServicesHover}
                        onClick={() => setActive("SERVICES")}
                        className={`relative z-10 flex items-center gap-1 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${getTextColor(item.name)}`}
                      >
                        SERVICES
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isServicesMegaOpen ? "rotate-180" : ""}`}
                        />
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        key={item.name}
                        ref={(el) => (itemRefs.current[item.name] = el)}
                        href={item.link}
                        onMouseEnter={(e) => handleHover(e, item.name)}
                        onClick={() => setActive(item.name)}
                        className={`relative z-10 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${getTextColor(item.name)}`}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })
              ) : (
                <Ellipsis
                  size={25}
                  className="w-[fit-content] text-black cursor-pointer bg-transparent p-0 rounded-full transition-transform duration-300 transform "
                  onMouseEnter={handleEllipsisHover}
                  onMouseLeave={handleEllipsisLeave}
                />
              )}
            </div>

            <div
              className={`ml-4 flex items-center space-x-0 transition-transform duration-500 rounded-full p-2 ${
                isScrolled
                  ? "-translate-y-20 opacity-0"
                  : "translate-y-0 opacity-100"
              } ${
                isCollapsed
                  ? "bg-[#D0F94A]"
                  : isScrolled
                    ? "bg-white"
                    : "bg-white/10" // Background same as original
              }`}
            >
              <button
                onClick={toggleLanguage}
                className={`relative flex items-center justify-center text-[12px] font-medium tracking-wider transition-colors duration-300 rounded-full py-2 px-2 cursor-pointer ${
                  language === "EN" ? "text-white font-bold" : "text-white" // Text color same as original
                }`}
              >
                {language}
              </button>
            </div>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg pt-20"
          >
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto px-6 pb-20">
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-800 pb-4">
                      {item.name === "PRODUCTS" ? (
                        <div>
                          <Link
                            href="/products"
                            onClick={() => handleMobileLinkClick(item.name)}
                            className={`flex items-center justify-between w-full text-left py-2 text-[14px] font-medium ${
                              active === item.name ? "text-[#D0F94A]" : "text-white"
                            }`}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={20}
                              className={`transition-transform ${isMegaOpen ? "rotate-180" : ""}`}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleMobileProductsClick();
                              }}
                            />
                          </Link>

                          <MobileMegaMenu isOpen={isMegaOpen} />
                        </div>
                      ) : item.name === "SERVICES" ? (
                        <div>
                          <Link
                            href="/services"
                            onClick={() => handleMobileLinkClick(item.name)}
                            className={`flex items-center justify-between w-full text-left py-2 text-[14px] font-medium ${
                              active === item.name ? "text-[#D0F94A]" : "text-white"
                            }`}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={20}
                              className={`transition-transform ${isServicesMegaOpen ? "rotate-180" : ""}`}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleMobileServicesClick();
                              }}
                            />
                          </Link>

                          <MobileMegaMenu isOpen={isServicesMegaOpen} />
                        </div>
                      ) : (
                        <Link
                          href={item.link}
                          onClick={() => handleMobileLinkClick(item.name)}
                          className={`block py-2 text-[14px] font-medium ${
                            active === item.name ? "text-[#D0F94A]" : "text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  <div className="flex items-center space-x-0 pt-6 rounded-full p-2 bg-white/10 w-fit">
                    <button
                      onClick={toggleLanguage}
                      className={`relative flex items-center justify-center min-w-[80px] text-[14px] font-medium tracking-wider transition-colors duration-300 rounded-full py-2 px-4 ${
                        language === "EN" ? "text-[#D0F94A] font-bold" : "text-white"
                      }`}
                    >
                      {language}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {isMegaOpen && !isMobile && (
        <MegaMenu
          isScrolled={isScrolled}
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
          menuRef={megaRef}
          isBlackText={true}
        >
          <MegaMenuContent />
        </MegaMenu>
      )}

      {isServicesMegaOpen && !isMobile && (
        <MegaMenu
          isScrolled={isScrolled}
          onMouseEnter={handleServicesMegaMenuEnter}
          onMouseLeave={handleServicesMegaMenuLeave}
          menuRef={servicesMegaRef}
          isBlackText={true}
        >
          <MegaMenuContent />
        </MegaMenu>
      )}
    </>
  );
};

export default HeaderB;