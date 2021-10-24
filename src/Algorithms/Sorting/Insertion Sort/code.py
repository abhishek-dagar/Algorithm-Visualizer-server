
# Python program for implementation of Insertion Sort
 
# Function to do insertion sort
import random
def insertionSort(arr):
 
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
 
        key = arr[i]
 
        # Move elements of arr[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1
        arr[j + 1] = key
 
 
# Driver code to test above
arr = [random.randint(1, 50) for _ in range(20)]
insertionSort(arr)
print ("Sorted array is:",end=" ")
for i in range(len(arr)):
	print (arr[i],end=" "),