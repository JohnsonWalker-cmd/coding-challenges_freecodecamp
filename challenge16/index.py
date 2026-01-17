import math

def isIntegerHypotenus(a,b):
    hypotenus = math.sqrt(a**2 + b**2)
    
    if (hypotenus % 1 == 0):
        return True
    else:
        return False
    
print(isIntegerHypotenus(3,4))
print(isIntegerHypotenus(10,10))