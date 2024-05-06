// https://leetcode.com/problems/minimum-genetic-mutation/description/

function minMutation(startGene, endGene, bank) {
    if (!bank.includes(endGene)) {
        return -1;
    }

    const queue = [[startGene, 0]];
    const bankSet = new Set(bank);

    while (queue.length > 0) {
        const [gene, mutations] = queue.shift();
        if (gene === endGene) {
            return mutations;
        }

        for (let i = 0; i < gene.length; i++) {
            for (const nucleotide of ['A', 'C', 'G', 'T']) {
                if (gene[i] !== nucleotide) {
                    const mutatedGene = gene.slice(0, i) + nucleotide + gene.slice(i + 1);
                    if (bankSet.has(mutatedGene)) {
                        bankSet.delete(mutatedGene);
                        queue.push([mutatedGene, mutations + 1]);
                    }
                }
            }
        }
    }

    return -1;
}

// Example usage:
const startGene = "AACCGGTT";
const endGene = "AACCGGTA";
const bank = ["AACCGGTA"];
console.log(minMutation(startGene, endGene, bank));  // Output: 1

const startGene2 = "AACCGGTT";
const endGene2 = "AAACGGTA";
const bank2 = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];
console.log(minMutation(startGene2, endGene2, bank2));  // Output: 2
