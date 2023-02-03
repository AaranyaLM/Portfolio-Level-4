#np03cs4a220415
#welcome message
def welcome():
    print("Welcome to the Caesar Cipher\nThis program encrypts and decrypts text with the Caesar Cipher.") #display welcome texts

#function for all the inputs from user
def enter_message():
    mode= str(input("Do you want to encrypt(e) or decrypt(d): "))      #prompts the user for mode
    while True:
        if mode=="e" or mode=="d":                    #checking if the mode is valid or invalid
            message= str(input("What is the message (Will be converted into upper case):"))  #prompts the user for the message
            shift= int(input("What is the shift number?: "))           #prompts the user for the shift value
            return mode, str.upper(message), shift                         #returns the mode, the text, and the shift value to the main function
        else:
            print("Invalid mode")
            mode= str(input("Do you want to encrypt(e) or decrypt(d): "))

 #encryption function            
def encrypt(message, shiftNo):   
    shiftedText= ""
    for character in message:
        if character.isalpha():
            count= ord(character)+shiftNo
            if count > ord('Z'):
                    count -= 26
            elif count < ord('A'):
                    count += 26
            shiftedText+=chr(count)  
        else:
            shiftedText+=character
    return shiftedText

#decryption function
def decrypt(message, shiftNo): 
    shiftedText= ""
    for character in message:
        if character.isalpha():
            count= ord(character)-shiftNo
            if count > ord('Z'):
                    count -= 26
            elif count < ord('A'):
                    count += 26
            shiftedText+=chr(count)  
        else:
            shiftedText+=character
    return shiftedText

#main function
def main():
    welcome()
    runAgain= "y"     #variable used for repititon of the program if the user wishes
    while runAgain=="y":
        choice= enter_message()
        if choice[0]=="e":
            ans=encrypt(choice[1],choice[2]) #calls encrypt() if user typed "e"
            print("Encrypted text: ",ans)
        elif choice[0]=="d":
            ans=decrypt(choice[1],choice[2]) #calls decrypt() if user typed "d"
            print("Decrypted text: ",ans)
        runAgain= str(input("Do you want to process another text using Ceaser Cypher?(y/n):"))
    print("Thankyou for using the Ceaser Cypher program, Goodbye!")

if __name__ == "__main__":
    main()