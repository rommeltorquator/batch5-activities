module PortableDevice 
    @battery_level = 0
    
    def battery_level
        @battery_level
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

iphone = Phone.new
iphone.battery_level = 20
puts iphone.battery_level
iphone.charge
puts iphone.battery_level
iphone.charge
iphone.check_cell_signal
puts iphone.battery_level

macbook_pro = Computer.new
macbook_pro.boot