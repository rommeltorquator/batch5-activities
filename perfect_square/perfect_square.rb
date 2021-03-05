##### ruby activity #####
def perfect_square(num)
    x = num.to_s
    x.reverse!

    # 2378
    if x[0].include?('2') || x[0].include?('3') || x[0].include?('7') || x[0].include?('8')
        puts "Not a Perfect Square"
    else
        if x[0] == "1" || x[0] == "4" || x[0] == "9"
            if x[1] % 2 != "0"
                puts "Not a Perfect Square"
            else
                puts "Perfect Square"
            end
        elsif x[0] == "5"
            if x[1] != "2"
                puts "Not a Perfect Square"
            else
                puts "Perfect Square"
            end            
        elsif x[0] == "6"
            # last digits of 6
            if x[0] == "6" && x.length > 1                
                if x[1].to_i % 2 != 0
                    puts "Perfect Square"
                else
                    puts "Not a Perfect Square"
                end
             else
                puts "Not a Perfect Square"
             end
        else
            digital_root = 0
            total = 0

            x.reverse!
            x.each_char { 
                |y| 
                digital_root += y.to_i
            }

            # puts digital_root    
            
            digital_root.to_s.each_char {
                |z|
                total += z.to_i
            }

            puts total

            if total == 1 || total == 4 || total == 7 || total == 9 || total == 10
                puts "Perfect Square"
            else
                puts "Not a Perfect Square"
            end
        end
    end
end

perfect_square(45)