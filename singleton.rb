
require 'singleton'

# class SecondSingleton
#   attr_accessor :something

  # def self.instance
  #   @@instance ||= new
  # end

#   def initialize
#     @something = 42
#   end
# end

# puts SecondSingleton.something

class MySingleton
  # include Singleton

  attr_accessor :something, :instance

  def initialize
    @something = 42
  end

  def self.instance
    @@instance = self
  end
end

x = MySingleton.instance
puts x
y = MySingleton.instance
puts y
# puts MySingleton.instance.something
# puts MySingleton.instance.something

# x = FirstSingleton.new
# # y = FirstSingleton.instance
# puts x == y
# x = FirstSingleton.new
# puts x
# y = FirstSingleton.new
# puts y
# class SecondSingleton
#   def self.instance
#     @@instance ||= new
#   end
# end

# puts SecondSingleton.instance.object_id
# puts SecondSingleton.instance.object_id

# class RegularThing
#   def instance
#     @instance
#   end
# end

# puts RegularThing.instance_of
# x = FirstSingleton.instance
# puts x.object_id
# puts FirstSingleton.instance


# require 'singleton'

# class FirstSingleton2
#   include Singleton
# end

# FirstSingleton.new
# puts FirstSingleton2.instance

# # require 'singleton'

# class FirstSingleton
#   include Singleton

#   def who_made_me
#     puts "The Turing Tapes!"
#   end
# end

# # FirstSingleton.new

# puts FirstSingleton.instance.who_made_me

# class MyClass
  # attr_accessor :var_i_want_to_init
  # def initialize
  # end  
  
  # def self.instance
  #   @@instance ||= new
  # end

  # @@instance = new

  # def self.instance
  #   return @@instance
  # end

  # # def initialize # tried 1. initialize, 2. new, 3. self.initialize, 4. self.new
  # #   puts "I'm being initialized!"
  # #   @var_i_want_to_init = 2
  # # end

  # private_class_method :new
# end

# x = MyClass.new
# puts x.instance.object_id

# puts MyClass.instance
# puts MyClass.instance
# MyClass.instance.initialize

# class MyClass
#   def self.instance
#     Dispatch.once { @instance ||= new }
#     @instance
#   end
# end

# MyClass.new

# puts MyClass.instance

# class Shop
#   attr_accessor :instance

#   def self.initialize
#     Dispatch.once { @instance ||= new }
#     @instance
#   end

#   def talk
#     print 'hi!'
#   end

#   def self.add
#     puts "\n"
#     puts @i
#   end


# end

# Shop.new
# puts Shop.instance
# Shop.new

# class MyClass
#   attr_accessor :var_i_want_to_init

#   def self.instance
#     @@instance ||= new
#   end

#   def initialize # tried 1. initialize, 2. new, 3. self.initialize, 4. self.new
#     puts "I'm being initialized!"
#     @var_i_want_to_init = 2
#   end
# end

# x = Shop.new

# x.talk

# puts Shop.instance
# puts Shop.instance.object_id

# Shop.instance.talk
# Shop.add

# class MyClass
#   def self.instance
#     Dispatch.once { @instance ||= new }
#     @instance
#   end
# end