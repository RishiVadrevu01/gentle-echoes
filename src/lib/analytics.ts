
const visitedSections = new Set<string>();

export const trackSectionEntry = async (sectionName: string) => {
    if (visitedSections.has(sectionName)) {
        return;
    }

    visitedSections.add(sectionName);
    const timestamp = new Date().toLocaleString();

    console.log(`[Analytics] User entered ${sectionName} at ${timestamp}`);

    try {
        // Using the same Formspree ID as in ClosingSection
        await fetch("https://formspree.io/f/mbdaragj", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                subject: `User Reached: ${sectionName}`,
                message: `The user has reached the ${sectionName} section.`,
                section: sectionName,
                timestamp: timestamp
            })
        });
    } catch (error) {
        console.error(`[Analytics] Failed to log ${sectionName}:`, error);
    }
};
