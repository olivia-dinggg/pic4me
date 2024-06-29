// suffix attribute to get a random item from a list (e.g inline [1,2,3].random() or predifined array.random())
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const PROMPTS = [
    { prompt: "Complete 10 push ups", category: 'physical' },
    { prompt: "Eat a healthy fruit", category: 'food' },
    { prompt: "Run for 15 minutes", category: 'physical' },
    { prompt: "Stretch for 5 minutes", category: 'meditation' }
]
export const getPrompt = () => {
    return PROMPTS.random();
}