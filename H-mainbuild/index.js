//Things to note about args:
//For 1 word args, use:
//let wordhere = args[0-whatever]/;
//for mentions: use:
//let wordhere = message.mentions.members.first();
//check anidiots.guide for more of this stuff
//All of the notes below explain what each thing is telling the bot:


//useful boilerplates
const Discord = require("discord.js"); //Simply requires discord.js
const client = new Discord.Client(); //Runs the bot client
const config = require("./config.json"); //Runs the config, contains the token and prefix. See "config.json"
const prefix = "."; //Also has prefix
//CODE:

//Prints to console and sets status | YOU CAN TWEAK THIS STUFF
client.on("ready", () => {
  console.log(`${client.user.tag}, Live and reporting for duty!`); //Logs to the node.js console
  client.user.setActivity(config.Status, { type: config.StatusType }) //WATCHING, LISTENING, STREAMING, PLAYING
  client.user.setStatus('online') //idle, online, offline, dnd | Generally do not touch, can mess up inputs
});
// Create an event listener for new guild members
//Event 1:
client.on("message", message => { //Read every message.
  if (message.author.bot) return; //If it's a bot, ignore it.
  if(!message.content.startsWith(config.prefix) || message.content.startsWith('[i]')) return; //If message doesn't start with $ (the current prefix), ignore it
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g); //Check for args.
  const command = args.shift().toLowerCase(); //Nothing is case sensitive.
  let member = message.member;

 //Commands:
 //Debug:
 if (command === 'end') {
   message.channel.send("Self Destructing.")
   client.destroy();
 } else
 if (command === 'ping') {
  message.channel.send("Ping...").then(m =>{
    // The math thingy to calculate the user's ping
      var ping = m.createdTimestamp - message.createdTimestamp;
      
      // Then It Edits the message with the ping variable embed that you created
      m.edit("Pong! Your ping is `" + ping + "` ms!")
  })
 } else
 if (command === 'help') {
  const embed = {
    "title": "PROJECT HOXWORTH",
    "color": 4886754,
    "author": {
      "name": "BOT CODED BY SLIPS#1337"
    },
    "fields": [
      {
        "name": "*What are is bot prefix?*",
        "value": "It's $h (with a space after h)."
      },
      {
        "name": "*How am do use bot?*",
        "value": "Type `$h ` followed by the heist you want to know about, in all lower case and with hyphens instead of spaces."
      },
      {
        "name": "*Heist no show up why?*",
        "value": "Command name protocol follows *The FBI Files* heist naming, i.e 'bank-heist:-gold' would instead be 'harvest-and-trustee-bank'."
      },
      {
        "name": "*How am find all command?*",
        "value": "All command inputs can be found [here.](https://pastebin.com/edit/Q0gaydHt)"
      },
      {
        "name": "*Why bot not all heists have?*",
        "value": "This bot is a WIP, and we're working tirelessly to get it up and running to full, with planned features including All heists, All heisters, and guides for each perk deck!",
      }
    ]
  };
  message.channel.send("So, you need help, eh?", { embed });
 } else


 //Heists:
  if (command === 'jewelry-store') {
    console.log('Bruh?')
    message.channel.send("**JEWELRY STORE** \n \n \nThe Payday gang have hit this one a number of times. Washington is full of stores like this. They can be easily entered at the front and back, and are small enough that a well-rehearsed crew can quickly nullify any resistance. \n \n**Notes:** Security in these places is laughable, but when they’re operating so close to the profit margin, what can you expect? An increase in local patrols might give us a faster heads up if the Payday gang pay a visit.")
  } else
  if (command === 'harvest-and-trustee-bank') {
    message.channel.send("**HARVEST AND TRUSTEE BANK** \n \n \nHarvest and Trustee Bank has branches all over Washington. They are generally single-storey constructions, with heavy rear doors, roof access and cameras that are controlled from a locked security room. Most branches will employ three or four security personnel, and teller staff are trained to lower shutters in the event of a robbery. \n \n**Notes:** Forget H&R doing much to put their house in order. I recommend the construction of new training facilities for our teams, model them on these banks. Harvest and Trustee don't seem likely to change their security, as all their losses are covered by the federal government anyway.")
  } else
  if (command === 'shadow-raid') {
    message.channel.send("**SHADOW RAID** \n \n \nIt appears that there was a burglary on a warehouse registered to Murkywater. However, there has been no official word on this, and our only lead on it comes from overheard conversations with Murkywater personnel we occasionally employ. Of note, however, is that the market was flooded with foreign banknotes and ancient artifacts shortly after. \n \n**Notes:** The Murkies aren’t saying anything about what went down that night. Can’t blame ‘em. If they’re moving as much illegal contraband as we suspect, they wouldn’t want us sniffing around.")
  } else
  if (command === 'go-bank') {
    message.channel.send("**GO BANK** \n \n \nRoberts Bank has branches across Washington, mostly on the outskirts. They’re generally small buildings, serving the local community. The vaults in these branches are the smaller variety, and most often protected with a time-lock. \n \n**Notes:** The gang may think these places are going to be easy to knock over, due to being on the edge of town. I’m impressed with the response times shown by our teams getting out there, but we need to improve. This kind of bank job is the bread and butter of the Payday gang, and we can expect to see more hits.")
  } else
  if (command === 'diamond-store') {
    message.channel.send("**DIAMOND STORE** \n \n \nDespite the great wealth on display, the ‘Gioielli di Famiglia’ protected its expensive store with only a modest amount of security. The building had several ways in and out, cameras controlled by a well-equipped security room and several guards. \n \n**Notes:** Perhaps they thought that bringing their Milan chic to the heart of downtown would keep them safe from the Payday crew. If anything, this proves that Bain and his boys are willing to hit absolutely anywhere. This wealth of easily fenced stones made it a natural target for the Payday gang.")
  } else
  if (command === 'armored-transports') {
    message.channel.send("**ARMORED TRANSPORTS** \n \n \nCrime.Net has coordinated multiple hits against GenSec's armored trucks all across the city. The jobs are well-planned. Hits have included the use of cranes, truck cabs and planting explosives to blow up downtown skywalks. \n \n**Notes:** Based on the fact that Bain is planning against moving convoys, there is almost certainly a leak in the GenSec operation. This indicates that Bain may have operatives within that organization. I recommend assisting GenSec in any way we can to help plug that leak.")
  } else
  if (command === 'train-heist') {
    message.channel.send("**TRAIN HEIST** \n \n \nCivilian trains are often authorised to carry sensitive military equipment, providing they can provide the appropriate security. This train was stopped by hacked signal boxes. It was shipping a prototype RC1 automated turret. \n \n**Notes:** If the army brass doesn’t want to lose more of its experimental ordnance, it needs to stop handing it over to these civilian outfits. Who the hell knows what else Bain might be picking up?")
  } else 
  if (command === 'mallcrasher') {
    message.channel.send("**MALLCRASHER** \n \n \nBased on the security footage, this appears to be an act of focused vandalism. The stores in the mall were specifically focused for damage, rather than theft. \n \n**Notes:** Not the typical job for Bains’ crew. Got to be another motive behind this. Look into who stands to lose, and who stands to gain, from the damage here.")
  } else
  if (command === 'four-stores') {
    message.channel.send("**FOUR STORES** \n \n \nThere have been several hits on these four stores in an otherwise-quiet downtown neighborhood. The MO of the perpetrators has been to execute a rapid hit-and-run, aimed at emptying cash registers and getting out fast. \n \n**Notes:** Hard to see what Bain stands to gain from this, so I suspect it is as much a favor to keep a contact sweet. This area has deep connections with the Russian community, so it is possible that these four stores are caught between two squabbling Russian mob-bosses.")
  } else
  if (command === 'white-xmas') {
    message.channel.send("**WHITE XMAS** \n \n \nLate on 12/24/2014 a small civilian aircraft suddenly radioed a mayday. As there was no flight path submitted, and it must have been flying very low to have not registered on ATC radar, SWAT teams were dispatched to investigate. What they found was the Payday team attempting to extricate a disoriented pilot from the scene. Later it was revealed that the plane was rented by a fake company, and that the black box recorded a collision with an unknown flying object \n \n**Notes:** If the Payday gang were there, there must have been something in with that cargo. Based on the low-level flight, my guess is that it was a smuggling run - cocaine, perhaps guns. Security at these small local airfields needs tightening.")
  } else
  if (command === 'ukrainian-job') {
    message.channel.send("**UKRANIAN JOB** \n \n \nThis appears to have been a jewelry store job, similar to many others committed, though the goal was very specific - a diamond tiara secured in a safe. This tiara was being held for Dimitri Volkov, and was apparently intended to be worn by his wife at their wedding. \n \n**Notes:** If it wasn’t for the people who might get caught in the crossfire, I’d be happy to let these mobsters take shots at each other over their petty squabbles.")
  } else
  if (command === 'meltdown') {
    message.channel.send("**MELTDOWN** \n \n \nThe warehouse beside the docks is registered to the Murkywater Private Security company. We were alerted to an incident there by a phone call from a private citizen. It is unknown what the Payday gang were able to remove from the premises. \n \n**Notes:** It’s telling that it took a guy nearby, hearing gunfire, to make the call and not the Murkies themselves. That means they don’t want us to know what was taken, and that scares me. I recommend applying more political pressure on those mercenaries. It could be something important.")
  } else
  if (command === 'aftershock') {
    message.channel.send("**AFTERSHOCK** \n \n \nShortly after the recent quake that devastated much of southern California, two shipping trucks, left stranded on the freeway, were robbed. The trucks belonged to a Seattle-San Francisco-Los Angeles shipping company called Kowalski & Hutch. They claimed their client was a Russian businessman, but before investigators could get more details the offices were burned down and all records destroyed. \n \n**Notes:** Of all places to appear, we could never have predicted the appearance of the Payday gang in LA, but there those bastards were. Seems to be a straightforward hit on a couple of trucks, though what could be so precious that it would get Bain’s crew all the way out to the West Coast.")
  } else
  if (command === 'nightclub') {
    message.channel.send("**NIGHTCLUB** \n \n \nThe Tasteful Club is a routine stop for our patrols on Saturday nights. The calls are mostly related to drunk-and-disorderlies. Owned and managed by Dimitri Volkov - a known snitch who handed Vlad Kozak to the authorities - we also suspect that it hosts illegal gambling. It appears that the Payday gang stole a large sum of money from the safe in the managers office. \n \n**Notes:** Normally, I wouldn’t give two hoots for gangsters shooting each other up, but the Tasteful is a public place, which means civilians might get caught. And why are they targeting this particular Russian - maybe a connection with a rival?")
  } else
  if (command === 'stealing-xmas') {
    message.channel.send("**STEALING XMAS** \n \n \nIt started with an unknown person behaving suspiciously in the street and being challenged by patrolling police officers. The suspect fled and disappeared near the Midtown Mall. Shortly after, what appeared to be the same person was apprehended inside the mall itself, incompetently disguised as Santa Claus and extremely inebriated. As officers were trying to question him, the Payday Gang suddenly appeared at the mall, freeing the prisoner, shooting the mall to pieces, killing police officers and stealing various seemingly random items from the shops. They finished off by blowing the roof open with explosives and airlifting themselves and the prisoner out along with the Mall’s enormous Christmas tree. \n \n**Notes:** This is a puzzling one. There are so many questions here: Who was the mysterious man in the Santa costume? What is his relation to the clowns? Why did they risk extended confrontation with the police in order steal minor items from the shops in the mall? And the tree?")
  } else
  if (command === 'watchdogs') {
    message.channel.send("**WATCHDOGS** \n \n \nThis operation was conducted in cooperation with Hector Morales. The Payday gang were originally contracted to provide escort for a batch of Morales’ coke. The real purpose, however, was for them to be in a place and time of our choosing. Unfortunately, the Bureau underestimated the gang, who fought their way out of the ambush. However, it does not appear that the gang suspected the involvement of the Bureau. Morales directed them to a rendezvous at the nearby docks, where a second attempt to apprehend them was made. \n \n**Notes:** If there was ever a perfect opportunity to nail the Payday gang, this was it. Packed into a van, surrounded, we should have ended this there.")
  } else
  if (command === 'firestarter') {
    message.channel.send("**FIRESTARTER** \n \n \nNotes: If there was ever a perfect opportunity to nail the Payday gang, this was it. Packed into a van, surrounded, we should have ended this there. \n \n **Notes:** Bain and Crime.Net are all over this but I suspect it is a contract job. The Sinaloan cartel have been warring with the Mendozas for years. Are the Sinaloans linked with Bain?")
  } else
  if (command === 'rats') {
    message.channel.send("**RATS** \n \n \nA number of high-ranking Mendoza cartel members were assassinated while being escorted out of the country under armed guard. These South Americans had cooperated with our field agents, and a deal had been worked out that would see their safe passage in exchange for information on the Sinaloan cartel. It is possible that this assassination was also linked to two other incidents - a meth-operation in a forest shack, and a shoot-out in a neighborhood ruled by The Cobras gang. \n \n**Notes:** Another war between the cartels. These things get bloody, fast, and, even though they’re shooting at each other, we have to practice zero tolerance. The Mendoza’s were almost in bed with the Bureau too. The failure to protect them not only means we lost a valuable contact, we’re also going to find it harder to convince any other rats in the future.")
  } else
  if (command === 'big-oil') {
    message.channel.send("**BIG OIL** \n \n \nProfessor Rossy suffered a serious burglary at his secluded laboratory. He is a highly respected physicist, who has spent years trying to convince the scientific world of the viability of cold fusion - the cheap generation of enormous amounts of power without radiation. The mansion that houses his laboratory is in a remote area, and not easy to reach. \n \n**Notes:** I smell the spoor of the Hill on this one. From what we can gather, Prof. Rossy was on the verge of something truly remarkable. If he has finally made a breakthrough, it would be worth a lot to the right - or wrong - people. This one might lead me to a tasty catch, possibly proving Crime.Net’s political connections.")
  } else
    if (command === 'framing-frame') {
      message.channel.send("**FRAMING FRAME** \n \n \nThe Capitol Art Gallery reported the burglary of several paintings from an exhibition of new Singaporean artists. Questioning the usual fencers dealing in such art drew a blank, but these paintings were later found in the apartment of a well-respected Senator. \n \n**Notes:** This has dirty political fingerprints all over it, and shows just how connected Bain and Crime.Net has become. Hard to say who benefited the most from this. The fallout saw a shake-up that had Capitol Hill playing musical chairs. I’m sure one of those senators, congressmen, governors made good on this. I suspect this was the work of the Payday gang, which shows they have the brains to hatch a political scandal unseen since Watergate.")
  } else
  if (command === 'election-day') {
    message.channel.send("**ELECTION DAY** \n \n \nThere were sightings of the Payday crew at the docks where the voting machines for the Mayoral elections were being stored, as well as at the warehouse where they were transported. \n \n**Notes:** Suspicious activity around the ballot machines potentially points to some crooked political crime, though perhaps this was Bains’ intention. In this town, any kind of suspicion could discredit a nominee.")
  } else
  if (command === 'the-big-bank') {
    message.channel.send("**THE BIG BANK** \n \n \nWe have a room full of files detailing attempted robberies on this place, going back decades. However, not one has been successfully completed. The Benevolent take their security extremely seriously, and their preparations are some of the best we at the Bureau have seen. \n \n**Notes:** Without giving them too much praise, Bains’ crew executed a text-book heist here. From the planning to the execution, it was a thorough job. This one should be getting taught at the Academy. The Benevolent is uncomfortably close to the White House, so I recommend tightening patrols around here.")
  }


  //} else {
  //  message.channel.send("Heist, heister, or perk deck guide not recognized. Input was either mistyped or currently does not exist in our database.")
})



client.login(config.token);