// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

// is this job a valid match for the candidate?
// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/

function match(candidate, job) {
   if (!candidate.minSalary || !job.maxSalary) throw new Error('error');
   return candidate.minSalary * 0.9 <= job.maxSalary;
}



