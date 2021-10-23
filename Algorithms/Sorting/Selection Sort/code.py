import random

A = [random.randint(1, 50) for _ in range(20)]
for i in range(len(A)):
     
    # Find the minimum element in remaining
    # unsorted array
    min_idx = i
    for j in range(i+1, len(A)):
        if A[min_idx] > A[j]:
            min_idx = j
             
    # Swap the found minimum element with
    # the first element       
    A[i], A[min_idx] = A[min_idx], A[i]

print ("Sorted array is:",end=" ")
for i in range(len(arr)):
	print (arr[i],end=" "),