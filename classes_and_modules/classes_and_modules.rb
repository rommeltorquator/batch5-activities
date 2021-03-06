module PortableDevice    
    def battery_level
        @battery_level ||=0
    end

    def battery_level=(l) 
        @battery_level = l
    end
    
    def check_cell_signal
        puts "Searching cell site..."
    end

    def charge
        self.battery_level += 1
    end  
end

module ComputeDevice
    def boot
        puts "Booting device..."
    end
end

class Laptop
    include PortableDevice # battery_level, charge, check signal
    include ComputeDevice # boot
end

class Phone
    include PortableDevice # battery_level, charge, check signal
    include ComputeDevice # boot
end

class Computer
    include ComputeDevice # boot
end

acer = Phone.new
# acer.battery_level = 50
acer.charge
puts acer.battery_level

iphone = Laptop.new
iphone.battery_level = 20
puts iphone.battery_level
iphone.charge
puts iphone.battery_level
iphone.charge
iphone.check_cell_signal
puts iphone.battery_level

macbook_pro = Computer.new
macbook_pro.boot

