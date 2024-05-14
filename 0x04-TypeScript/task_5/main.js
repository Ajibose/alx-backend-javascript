"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: "MajorCredits" };
}
exports.sumMajorCredits = sumMajorCredits;
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: "MinorCredits" };
}
exports.sumMinorCredits = sumMinorCredits;
