dial_book = {
    "newyork" => "212",
    "newbrunswick" => "732",
    "edison" => "908",
    "plainsboro" => "609",
    "sanfrancisco" => "301",
    "miami" => "305",
    "paloalto" => "650",
    "evanston" => "847",
    "orlando" => "407",
    "lancaster" => "717"
}

def get_city_names(somehash)
    somehash.each {
        |key, value|
        puts "#{key}"
    }
end

def get_area_code(somehash, key)
    puts "The Area Code of #{key} is #{somehash[key]}"
end

loop do
    # displays the city names
    get_city_names(dial_book)

    # gets the user's input
    puts ""
    print "Enter the City name: "
    city = gets.chomp()

    # displays the area code of the selected city
    get_area_code(dial_book, city)

    puts ""
    print "Would you like to continue? (Y/N): "
    cont = gets.chomp()

    if cont == 'Y' || cont == 'y'
        next
    else
        break
    end
end