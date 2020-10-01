from classes.litfeed import LitFeed 
import dill,os.path

#Checks to see if the file "feeds.lf" exists.
fileExists = os.path.isfile("feeds.lf");

#If it does, then try to open it and load its contents as feeds
#if it doesn't, then trigger an error
if(fileExists):
	try:
		#opens the file "feeds.lf" as readonly
		loadfile = open("feeds.lf","rb");
		#'loads' the data from feeds.lf with dill
		feeds = dill.load(loadfile);
		#closes the file
		loadfile.close();

	except:
		#cheeky error message
		print("Looks like there was an oopsie daisie while trying to open the savefile for loading.")
		feeds = [];

#Prompt to ask if you want to add a new feed, self explanatory I'd say.
if(input("Add new feed? Y/N ") == "Y"):
	feedURL = input("gimme url bb \n");
	feedTitle = input("What's the title of this feed? \n ")
	feeds.append(LitFeed(feedURL, feedTitle));

#Loop for cli interaction
while(True):
	#command is the user command, if it's list feeds, it lists the feeds in the save file.
	#if it's exit, it exits the loop and saves the feedlist.
	#anything else will not be recognized.
	command = input("Testing! ");
	if(command == "list feeds"):
		for feed in feeds:
			print(feed.retTitle())
	elif(command == "exit"):
		break;

#At the end of the script, opens or creates a feeds.lf for saving the list of feeds.
#if there is an error a message is printed.
try:
	#Opens feeds.lf for saving, or creates a feeds.lf if one doesn't exist.
	loadfile = open("feeds.lf","wb");
	#'dumps' our feeds list to feeds.lf for opening upon next start
	dill.dump(feeds, loadfile);
	#closes the file
	loadfile.close();
except:
	#straightforward error message.
	print("Error while saving feeds.");


