"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    def __init__(self, path):
        self.words = []
        with open(path, "r") as file:
            lines = 0
            for line in file:
                lines += 1
                self.words.append(line.strip())
        self.file = file
        self.lines = lines

    def lineCount(self):
        print(self.lines)

    def random(self):
        return random.choice(self.words)

class SpecialWordFinder(WordFinder):
    def __init__(self, path):
        self.words = []
        with open(path, "r") as file:
            lines = 0
            for line in file:
                lines += 1
                if line.startswith("#"):
                    pass
                self.words.append(line.strip())
        self.file = file
        self.lines = lines


wf = WordFinder("words.txt")
print(wf.random())
print(wf.random())
print(wf.random())
print(wf.random())