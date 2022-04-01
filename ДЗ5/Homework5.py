import math


def get_floor_number(nflat):
    n = math.ceil(nflat / flats)#номер этажа данной квартиры в "одноподъездной" модели
    if n <= floors: #квартира в первом подъезде
        return n
    elif n % floors == 0: #верхний этаж
        return floors
    else:
        return n % floors #остаток от деления на число этажей = текущий этаж


floors = int(input())
doors = int(input())
flats = int(input())
name1 = str(input())
num1 = get_floor_number(int(input()))
name2 = str(input())
num2 = get_floor_number(int(input()))
if num1 > num2:
    print(name1)
elif num1 < num2:
    print(name2)
elif num1 == num2:
    print("Same")

