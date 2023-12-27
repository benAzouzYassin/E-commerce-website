"use client"

export function scrollToElement(elementId : string) {
    const targetElement = document.getElementById(elementId);
    targetElement?.scrollIntoView({ behavior: 'smooth' });
}
