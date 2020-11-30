class StartMenu
    def self.run
        puts `clear`
        puts "Tic Tac Toe"
        puts "-----------------------"
        puts "1. Play a game"
        puts "Press q to quit"

        menu_choice = gets.strip.downcase

        if menu_choice[0] == "1"
            puts "playing!"
        elsif menu_choice[0] = "q"
            puts "goodbye"
        else
            # puts "let's try that again"
            # sleep(3)
            # StartMenu.run
        end
    end
end

class Game

end

StartMenu.run