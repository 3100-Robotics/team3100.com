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
    const yearsOfExperience =
        startYear !== null ? currentYear - startYear : null;
    const experienceLabel =
        yearsOfExperience !== null
            ? `FIRST since ${startYear} (${yearsOfExperience} ${yearsOfExperience === 1 ? "year" : "years"})`
            : null;

    return {
        isArchived,
        experienceLabel,
        displayTags: isArchived ? [...tags, "Legacy"] : tags,
    };
}
