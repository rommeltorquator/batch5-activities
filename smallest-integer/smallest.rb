nums = [34, 15, 88, 2]
not_done = true
x = 0

while x < nums.size - 1
    (nums.size - 1).times do |x|
        if nums[x] > nums[x + 1]
            nums[x], nums[x + 1] = nums[x + 1], nums[x]            
        end
    end
    x += 1
end

puts nums[0]