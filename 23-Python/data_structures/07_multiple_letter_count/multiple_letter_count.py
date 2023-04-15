def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    hist = {}
    for char in phrase:
        if char not in hist:
            hist[char] = 1
        else:
            hist[char] += 1
    return hist