require 'singleton'
class Shop
  include Singleton

  def talk
    print 'hi!'
  end
end

x = Shop.new

x.talk