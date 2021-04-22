# https://leetcode.com/problems/running-sum-of-1d-array/submissions/

import time


# def runningSum(nums):
#     for index in range(1, len(nums)):
#         nums[index] = nums[index - 1] + nums[index]
#     return nums

def runningSum(nums):
    for index in range(1, len(nums)):
        nums[index] += nums[index - 1]
    return nums


def runningSumLeetcode100(nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """

    current_sum = 0

    for i in range(len(nums)):

        current_sum += nums[i]

        nums[i] = current_sum

    return nums


print("====")
start = time.time()
for i in range(10000000):
    runningSum([1, 2, 3, 4])
    runningSum([1, 1, 1, 1, 1])
    runningSum([3, 1, 2, 10, 1])
end = time.time()
timeElapsed = end - start
print('time:', timeElapsed, 'ms')

print("====")
start = time.time()
for i in range(10000000):
    runningSumLeetcode100([1, 2, 3, 4])
    runningSumLeetcode100([1, 1, 1, 1, 1])
    runningSumLeetcode100([3, 1, 2, 10, 1])
end = time.time()
timeElapsed = end - start
print('time:', timeElapsed, 's')
