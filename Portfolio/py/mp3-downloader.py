from pytube import YouTube

link = str(input("Enter the link:"))
ytvid= YouTube(link)
print("Downloading audio of: "+ ytvid.title)


audio= ytvid.streams.filter(only_audio=True)
aud= list(enumerate(audio))
for i in aud:
    print("Options available: ")
    print()
    print(i)


option= int(input("Enter the option u want to download:"))
audio[option].download()


print("Your audio has been downloaded succesfully")