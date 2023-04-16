"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        self.start = start
        self.val = start
    
    def generate(self):
        self.val += 1
        return self.val - 1
    
    def reset(self):
        self.val = self.start

    def __repr__(self):
        return f"SerialGenetator self.start={self.start} self.val={self.val}"