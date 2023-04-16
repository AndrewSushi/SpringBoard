def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    hist1 = {}
    hist2 = {}
    num1, num2 = str(num1), str(num2)
    if len(num1) != len(num2):
        return False
    for i in range(len(num1)):
        if num1[i] in hist1:
            hist1[num1[i]] += 1
        else:
            hist1[num1[i]] = 1
        if num2[i] in hist2:
            hist2[num2[i]] += 1
        else:
            hist2[num2[i]] = 1
    return hist1 == hist2