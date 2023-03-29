function reverse(string) {
    return Array.from(string).reverse().join("");
};


function Phrase(content) {
    this.content = content;
    this.processor = (string) => {
        return string.toLowerCase();
    }
    this.processedContent = function() {
        return this.processor(this.content);
    };


    this.palindrome = function() {
        return this.processedContent() === reverse(this.processedContent());
    };
    this.louder = function() {
        return this.content.toUpperCase();
    };
};

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    this.processedContent = function() {
        return this.processor(this.translation);
    };
};

TranslatedPhrase.prototype = new Phrase();

String.prototype.blank = function() {
    return !!this.match(/^\s*$/);
};


