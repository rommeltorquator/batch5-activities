x = [ { "name": "Rommel" }, { "name": "Melo" }, { "name": "Toshi" } ]


def combine(a)
    s = ""
    l = a.length
    for name in a
        s.concat(name[:name])
        s.concat(", ")
    end
    s.rstrip
    s.chop
    s.chop
end

p combine(x)