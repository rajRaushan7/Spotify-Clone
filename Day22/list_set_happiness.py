nm = input()
n, m = nm.split(' ')

arr = input().split(' ')
a = set(input().split(' '))
b = set(input().split(' '))

happiness = 0

for char in arr:
    if char in a:
        happiness += 1
    elif char in b:
        happiness -= 1

print(happiness)
