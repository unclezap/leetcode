class StartMenu
    def self.run
        puts `clear`
        puts "Tic Tac Toe"
        puts "-----------------------"
        puts "1. Play a game"
        puts "Press q to quit"

        menu_choice = gets.strip.downcase

        if menu_choice[0] == "1"
            puts `clear`
            Game.play
        elsif menu_choice[0] == "q"
            puts "goodbye"
        else
            puts "let's try that again"
            sleep(2)
            StartMenu.run
        end
    end
end

class Game
    def self.play
        puts "   |   |   "
        puts "-----------"
        puts "   |   |   "
        puts "-----------"
        puts "   |   |   "
    end
end

StartMenu.run

#test