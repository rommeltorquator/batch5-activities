def disemvowel(str)
    str = str.gsub(/[aeiou]/i, '')
    str
end

p disemvowel("this is a test aeiou")