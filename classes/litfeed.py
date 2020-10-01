import feedparser

class LitFeed:

	#Last updated is the date where the feed was last updated.
	#lastupdated = None;
	#I'll implement this later, it's not that important. 

	#entries is a list of the entries in the feed
	entries = []
	#urls is a list of urls belonging to each respective entry in the feed/entries
	urls = []


	#Constructor for LitFeed, here we enter the title of the feed as well as its url.
	def __init__(self, feedurl, feedtitle):
		self.feedurl = feedurl;
		d = feedparser.parse(feedurl);
		self.title = feedtitle
		self.fetchEntries(d);

	#takes a feedparser obj and extracts the entries. Runs fetchTitles and fetchURLs
	#and saves their respective info to entries and urls
	def fetchEntries(self, fpobj):
		self.entries = self.fetchTitles(fpobj);
		self.urls = self.fetchUrls(fpobj);

	#takes the feedparser obj, and iterates over its entries. It appends all 
	#feed parser entry titles to the litfeed entries list.
	def fetchTitles(self, fpobj):
		d = []
		for entry in fpobj.entries:
			d.append(entry.title);
		return d;

	#takes the feedparser obj and iterates over its entries. It appends all
	#feed parser entry URLs to a list d that is returned.
	def fetchUrls(self, fpobj):
		d = []
		for entry in fpobj.entries:
			d.append(entry.link);
		return d;


	#retTitle returns the title of the feed
	def retTitle(self):
		return self.title;

	#retLink returns the nth link in the urls list.
	def retLink(self, n):
		return self.urls[n];


	#Returns all entries in the feed. For testing purposes. I'm not exactly sure how whether the entries start from the oldest or the newest. 
	def retAllEntries(self):
		return self.entries;
	
	#retEntries returns the titles of 10 entries, starting from (topmostentry#) - 10 * n.
	#NOTE: entry list starts from most recent to oldest. 
	def retEntries(self, n):
		#if the # of entries is less than or equal to 10, then just return the current entries.
		if(len(self.entries) <= 10):
			return self.entries;

		#if the user is asking for a page that cannot be retrieved due to insufficient entries, print an error message.
		elif((len(self.entries) - 10*n) < 0):
			print("There are insufficient entries. For the record, there are currently {} entries in this feed.".format(length(self.entries)));
		
		#if the # of entries after subtraction is less than 10, then return the # starting from 0. 
		elif((len(self.entries) - 10 * n) < 10):
			return self.entries[0:len(self.entries)-10*n];

		#If everything is ok, then return the entries starting from length(entries) - 10 * n, to the next 10 * n-1
		else:
			#if the user desires to see the first page, then show them the first 10.
			if(n == 0):
				return self.entries[:10];
			#if the user desires to see any other page, show them the 10 at the nth page.
			else:
				return self.entries[len(self.entries)-10*(n-1):len(self.entries)-10*n];

	#updates title of the feed
	def updateTitle(self, ntitle):
		self.title = ntitle;

	#updates the URL of the feed
	def updateURL(self, nurl):
		self.url=nurl;

	#updates the feed TBD
	def updateFeed(self):
		pass

