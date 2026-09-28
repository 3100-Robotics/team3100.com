import type { MentorProfileData } from "../data/mentors";

type MentorDisplayInput = Pick<MentorProfileData, "yearsInFirst" | "tags">;

export function isMentorArchived(yearsInFirst: MentorProfileData["yearsInFirst"]) {
    const [, endYear] = yearsInFirst ?? [];
    return endYear !== undefined && endYear < new Date().getFullYear();
}

export function getMentorDisplayData({
    yearsInFirst,
    tags,
}: MentorDisplayInput) {
    const [startYear = null] = yearsInFirst ?? [];
    const currentYear = new Date().getFullYear();
    const isArchived = isMentorArchived(yearsInFirst);
    const experienceLabel =
        startYear !== null
            ? `FIRST since ${startYear} (${currentYear - startYear} years)`
            : null;

    return {
        isArchived,
        experienceLabel,
        displayTags: isArchived ? [...tags, "Legacy"] : tags,
    };
}
