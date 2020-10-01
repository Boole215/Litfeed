from classes.litfeed import LitFeed 

feedURL = input("gimme url bb \n");
TestFeed = LitFeed(feedURL);

print(TestFeed.retTitle());
print("\n");
print(TestFeed.retEntries(0));
print('\n');
print(len(TestFeed.retEntries(0)));
print('\n');
print(TestFeed.retAllEntries());
print('\n');
#works!