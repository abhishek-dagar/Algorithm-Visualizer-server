def BruteForce(n):
    print('1 is not prime')
    for i in range(2,n):
        flag = True
        for j in range(2,i**(1//2)):
            if(i%j==0):
                flag = False
                break
        if flag:
            print(i,'is a prime number')