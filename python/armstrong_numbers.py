def find_armstrong_numbers(numbers):

    answer = []

    for i in numbers:
        if i >= 0 and i < 10:
            i_str = str(i)
            if i == pow(int(i_str[0]), 1) :
                answer.append(i)
        if i >= 10 and i < 100:
            i_str = str(i)
            if i == pow(int(i_str[0]), 2) + pow(int(i_str[1]), 2):
                answer.append(i)
        if i >= 100 and i < 1000:
            i_str = str(i)
            if i == pow(int(i_str[0]), 3) + pow(int(i_str[1]), 3) + pow(int(i_str[2]), 3):
                answer.append(i)

    return answer