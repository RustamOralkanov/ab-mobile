export const usePhoneFormat = (value: string) => {
    let cleaned = value.replace(/\D/g, "").slice(1);
    if (cleaned.length > 10) cleaned = cleaned.slice(0, 10);

    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (!match) return "+7";

    return `+7${match[1] ? ` (${match[1]}` : ""}${match[2] ? `) ${match[2]}` : ""}${match[3] ? `-${match[3]}` : ""}${match[4] ? `-${match[4]}` : ""}`;
};
