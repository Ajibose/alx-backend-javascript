interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
        return { credits: subject1.credits + subject2.credits, brand: "MajorCredits" };
}

export function sumMinorCredits(subject1: MajorCredits, subject2: MajorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, brand: "MinorCredits" };
}
