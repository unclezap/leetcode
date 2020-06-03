# https://leetcode.com/problems/3sum-closest/submissions/

def three_sum_closest(nums, target)
    x = 0
    y = 1
    z = 2
    distance = false
    best_sum = 0
    
    while x <= nums.length - 3 do
        while y <= nums.length - 2 do
            while z <= nums.length - 1 do
                sum = nums[x] + nums[y] + nums[z]
                if !distance
                    if sum == target
                        return target
                    end
                    distance = target - sum
                    distance = distance.abs()
                    best_sum = sum
                else
                    if sum == target
                        return target
                    end
                    non_absolute_distance = target - sum
                    if non_absolute_distance.abs() < distance
                        distance = non_absolute_distance.abs()
                        best_sum = sum
                    end
                end
                puts "!"
                z +=1
            end
            y +=1
        end
        x += 1
    end
   return best_sum
end

nums = [-1,2,1,-4]
target = 1

nums2 = [1,1,1,0]
target2 = -100

nums3 = [0,0,100,0]
target3 = 100

puts three_sum_closest(nums3, target3)
# three_sum_closest(nums2, target2)
# three_sum_closest(nums, target)