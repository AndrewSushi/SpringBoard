class Square:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def area(self):
        return self.x * self.y
    
class ColoredSquare(Square):
    def __init__(self, x, y, color):
        super().__init__(x, y)
        self.color = color

cs = ColoredSquare(5, 10, "red")
print(cs.area())