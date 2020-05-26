# http://weblog.raganwald.com/2007/01/please-design-deck-of-cards-in-java.html

class Deck

    @@all = []
    @@discard = []
    @@cards_outside_deck = 0

    def initialize
        i = 0
        52.times do
            value = 1 + i % 13

            if value == 1
                value = "A"
            elsif value > 10
                if value == 11
                    value = "J"
                elsif value == 12
                    value = "Q"
                else 
                    value = "K"
                end
            else
                value = value.to_s
            end

            suit = i % 4
            
            if suit == 0
                suit = "Clubs"
            elsif suit == 1
                suit = "Diamonds"
            elsif suit == 2
                suit = "Hearts"
            else
                suit = "Spades"
            end

            @@all.push(value + " " + suit)
            i += 1
        end
    end

    def shuffle
        new_shuffle = []
        @@all.length.times do
            cut = rand(@@all.length)
            first_half = @@all.slice(0, cut)
            second_half = @@all.slice(cut + 1, @@all.length - cut)
            card = @@all.slice(cut, 1)[0]
            @@all = first_half.push(second_half).flatten
            new_shuffle.push(card)
        end
        @@all = new_shuffle
    end

    def draw(draws=1)
        if draws > @@all.length
            return false
        end

        @@cards_outside_deck += draws
        cards = @@all.slice(0,draws)
        @@all = @@all.slice(draws, @@all.length - 1)
        cards
    end

    def discard(cards)
        @@discard.push(cards)
    end

    def put_discard_into_deck
        @@all = @@all.push(@@discard).flatten
        @@discard = []
    end

    def list_cards
        no_tens = card_sorter("10", @@all.sort)
        no_aces = card_sorter("A", no_tens[0])
        no_kings = card_sorter("K", no_aces[0])
        no_queens = card_sorter("Q", no_kings[0])
        no_jacks = card_sorter("J", no_queens[0])

        with_aces = no_jacks[0].unshift(no_aces[1])
        with_tens = with_aces.push(no_tens[1])
        with_jacks = with_tens.push(no_jacks[1])
        with_queens = with_jacks.push(no_queens[1])
        with_kings = with_queens.push(no_kings[1])
        with_kings = with_kings.flatten
    end

    def cheating?
        if count_cards != 52
            return true
        else
            return false
        end
    end

    def all
        @@all
    end

    def discard_pile
        @@discard
    end

    private

    def card_sorter(string, deck)
        #not a general sorter - just used for fixing the alphanumeric sorting .sort does for a 52-card deck
        first_card_index = deck.index{|card| card.include? string}
        card_count = 0
        cards = []
        top_half = []
        bottom_half = deck
        
        if first_card_index
            if deck.length - first_card_index < 4
                max_cards = deck.length - first_card_index
            else
                max_cards = 4
            end
        
            last_card_index = first_card_index
        
            while max_cards > 0 do
                if deck[last_card_index].include? string
                    cards.push(deck[last_card_index])
                    card_count += 1
                    last_card_index += 1
                end
                max_cards -= 1
            end
        
            if first_card_index > 0
                top_half = deck[0..first_card_index - 1]
            end
        
            if last_card_index < deck.length + 1
                bottom_half = deck[last_card_index..deck.length - 1]
            end
        
        end
        
        deck = top_half.push(bottom_half).flatten

        return [deck, cards]
    end

    def count_cards
        @@all.length + @@discard.length + @@cards_outside_deck
    end

end

x = Deck.new
puts "========"
puts "---"
puts "list of cards"
puts x.list_cards
puts "---"
puts "all"
puts x.all
puts "---"
puts "shuffle"
puts x.shuffle
puts "---"
puts "shuffle stays the same?"
puts x.all
puts "---"
puts "new shuffle"
puts x.shuffle
puts "---"
puts "new shuffle persists?"
puts x.all
puts "++++++++++"
puts "draw 1"
puts x.draw
puts "---"
puts "draw 2"
puts x.draw(2)
puts "---"
puts "see if drawing shortened deck"
puts x.all.length
puts "---"
puts "card sorter checker"
x.shuffle
x.draw(40)
puts x.list_cards
puts "---"
puts "discard - empty"
puts x.discard_pile
puts "---"
puts "discard added to"
x.discard("A Clubs")
puts x.discard_pile
puts "---"
puts "old deck length"
puts x.all.length
puts "put discard into deck - new deck length"
x.put_discard_into_deck
puts x.all.length
puts "---"
puts "is discard on bottom of deck?"
puts x.draw
puts "---"
puts "cheating?"
puts x.cheating?
puts "---"
puts "can you draw more than the deck?"
puts x.draw(100)
puts "----"
puts "off by 1 error with drawing?"
puts x.draw(9)
