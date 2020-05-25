# https://leetcode.com/problems/merge-intervals/

input = [[1,3],[2,6],[8,10],[15,18]]
input2 = [[1,4],[4,5]]

def merge_intervals (arrays)

    arrays = arrays.flatten
    filtered_points = [arrays[0]]
    i = 1

    while i < arrays.length - 1 do
        j = i + 1

        while arrays[i] >= arrays[j] do
            j += 1
        end

        filtered_points.push(arrays[j])

        i =  j
    end

    k = 0
    return_arrays = []

    while k < filtered_points.length do
        return_arrays.push([filtered_points[k], filtered_points[k+1]])
        k += 2
    end

    return_arrays

end

puts merge_intervals(input)
puts "----"
puts merge_intervals(input2)