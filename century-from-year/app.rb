def centuryFromYear(year)
    case year
    when (2001..2100)
        21
    when (1901..2000)
        20
    when (1801..1900)
        19
    when (1701..1800)
        17
    else
        "None of the above"
    end
end

puts centuryFromYear(1990)