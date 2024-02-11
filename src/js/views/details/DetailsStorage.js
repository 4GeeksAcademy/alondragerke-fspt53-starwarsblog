import LukeSkywalker from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/Luke-Skywalker.jpg";
import C3PO from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/C-3PO.jpg";
import R2D2 from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/R2-D2.jpg";
import DarthVader from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/Darth-Vader.jpeg";
import LeiaOrgana from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/Leia-Organa.jpg";
import OwenLars from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/Owen-Lars.jpg";
import BeruLars from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/Beru-Whitesun-Lars.jpg";
import R5D4 from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/R5-D4.jpeg";
import BiggsDarklighter from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/Biggs-Darklighter.jpeg";
import ObiwanKenobi from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters/Obi-Wan-Kenobi.jpg";

import Human from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Human.jpg";
import Droid from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Droid.jpg";
import Wookie from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Wookie.jpeg";
import Rodian from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Rodian.jpeg";
import Hutt from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Hutt.jpeg";
import Yodas from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Yodas.jpeg";
import Trandoshan from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Trandoshan.jpeg";
import MonCalamari from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Mon-Calamari.jpeg";
import Ewok from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Ewok.jpeg";
import Sullustan from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/species/Sullustan.jpeg";

import SandCrawler from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/Sand-Crawler.jpeg";
import X34 from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/X-34-Landspeeder.jpeg";
import T16 from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/T-16-Skyhopper.jpeg";
import TIELN from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/TIE-LN-Starfighter.jpg";
import Snowspeeder from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/Snowspeeder.jpeg";
import ATAT from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/AT-AT.jpeg";
import TIE from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/TIE-Bomber.jpg";
import ATST from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/AT-ST.jpeg";
import Storm from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/Storm-IV-Twin-Pod-Cloud-Car.jpg";
import SailBarge from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/vehicles/Sail-Barge.jpeg";

import Tatooine from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Tatooine.jpg";
import Alderaan from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Alderaan.jpg";
import Yavin from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Yavin-IV.jpg";
import Hoth from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Hoth.jpg";
import Dagobah from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Dagobah.jpg";
import Bespin from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Bespin.jpg";
import Endor from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Endor.jpg";
import Naboo from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Naboo.jpg";
import Coruscant from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Coruscant.jpg";
import Kamino from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/planets/Kamino.jpg";

const DetailsStorage = {
    characters: [
      {
        uid: "1",
        name: "Luke Skywalker",
        description: "A courageous Jedi Knight who played a pivotal role in the Rebel Alliance's struggle against the oppressive Galactic Empire. Luke Skywalker is known for his unwavering commitment to justice, his remarkable piloting skills, and his deep connection to the Force. Throughout the original Star Wars trilogy, he undergoes a profound journey of self-discovery, ultimately embracing his destiny as a Jedi Master and helping to restore balance to the Force.",
        image: LukeSkywalker
      },
      {
        uid: "2",
        name: "C-3PO",
        description: "A protocol droid fluent in over six million forms of communication, C-3PO is a central figure in the Star Wars universe, providing comic relief, translation services, and occasional moments of insight. Despite his often anxious and fussy demeanor, C-3PO is a loyal companion to his friends, particularly his counterpart R2-D2, and frequently finds himself caught up in daring adventures across the galaxy.",
        image: C3PO
      },
      {
        uid: "3",
        name: "R2-D2",
        description: "An astromech droid with a vast array of tools and gadgets hidden within his cylindrical frame, R2-D2 is one of the unsung heroes of the Star Wars saga. From repairing starships to hacking computer systems, R2-D2's resourcefulness and bravery have saved the day on numerous occasions. Despite his lack of formal speech, R2-D2 communicates through a series of beeps and whistles that are understood by his friends and allies.",
        image: R2D2
      },
      {
        uid: "4",
        name: "Darth Vader",
        description: "Once a heroic Jedi Knight named Anakin Skywalker, Darth Vader fell to the dark side of the Force and became one of the most feared figures in the galaxy. Clad in black armor and wielding a crimson lightsaber, Vader serves as the enforcer of Emperor Palpatine's tyrannical regime, hunting down Jedi survivors and crushing dissent with ruthless efficiency. Despite his formidable appearance, Vader is tormented by inner conflict and the memory of his former life.",
        image: DarthVader
      },
      {
        uid: "5",
        name: "Leia Organa",
        description: "A fearless leader of the Rebel Alliance and a key figure in the fight against the Galactic Empire, Leia Organa is renowned for her intelligence, courage, and resilience. From her early days as a member of the Imperial Senate to her role as a general in the Resistance, Leia inspires others with her determination to uphold the principles of freedom and democracy. Despite facing personal tragedy and adversity, Leia remains a symbol of hope for the galaxy.",
        image: LeiaOrgana
      },
      {
        uid: "6",
        name: "Owen Lars",
        description: "Luke Skywalker's uncle and the adoptive father figure who raised him on the desert planet of Tatooine, Owen Lars is a hardworking moisture farmer who values stability and security above all else. Despite his gruff exterior, Owen cares deeply for Luke's well-being and strives to protect him from the dangers of the harsh desert environment and the wider galaxy.",
        image: OwenLars
      },
      {
        uid: "7",
        name: "Beru Whitesun Lars",
        description: "Owen Lars' wife and Luke Skywalker's aunt, Beru Whitesun Lars is a kind and nurturing presence in Luke's life, providing love and support as he grows up on the remote desert world of Tatooine. Beru helps to instill important values in Luke, teaching him the importance of hard work, compassion, and perseverance in the face of adversity.",
        image: BeruLars
      },
      {
        uid: "8",
        name: "R5-D4",
        description: "A red and white astromech droid with a faulty motivator, R5-D4 briefly captures the attention of Luke Skywalker and his companions before sacrificing himself to ensure that R2-D2 would be chosen to accompany them on their journey. Despite his brief appearance in the Star Wars saga, R5-D4's act of selflessness serves as a reminder of the bravery and sacrifice exhibited by droids throughout the galaxy.",
        image: R5D4
      },
      {
        uid: "9",
        name: "Biggs Darklighter",
        description: "A childhood friend of Luke Skywalker who shares his dreams of becoming a starfighter pilot, Biggs Darklighter eventually joins the Rebel Alliance and fights bravely against the tyranny of the Galactic Empire. Despite his untimely death in the Battle of Yavin, Biggs' courage and dedication inspire those around him to continue the fight for freedom and justice.",
        image: BiggsDarklighter
      },
      {
        uid: "10",
        name: "Obi-Wan Kenobi",
        description: " A wise and skilled Jedi Master who mentored both Anakin Skywalker and his son, Luke, Obi-Wan Kenobi plays a pivotal role in shaping the destiny of the galaxy. From his early days as a Padawan to his final showdown with Darth Vader aboard the Death Star, Obi-Wan embodies the principles of the Jedi Order and strives to bring balance to the Force in the face of darkness and despair.",
        image: ObiwanKenobi
      }
    ],
    species: [
      {
        uid: "1",
        name: "Human",
        description: "The most populous and diverse species in the galaxy, humans are known for their adaptability, ambition, and capacity for both great good and great evil. From the brave heroes of the Rebel Alliance to the ruthless agents of the Galactic Empire, humans play a central role in shaping the course of galactic history, often serving as leaders, warriors, diplomats, and explorers.",
        image: Human
      },
      {
        uid: "2",
        name: "Droid",
        description: "Mechanical beings programmed to perform a wide range of tasks, droids are ubiquitous throughout the galaxy, serving as laborers, soldiers, translators, and companions to organic beings. From the loyal astromech droids of the Rebel Alliance to the menacing battle droids of the Separatist Army, droids come in many shapes and sizes, each with its own unique capabilities and personality quirks.",
        image: Droid
      },
      {
        uid: "3",
        name: "Wookie",
        description: "A species of tall, hirsute humanoids hailing from the forested world of Kashyyyk, Wookiees are renowned for their incredible strength, loyalty, and sense of honor. Despite their fearsome appearance, Wookiees are gentle and compassionate beings who value friendship and family above all else, often forming lifelong bonds with those who earn their trust.",
        image: Wookie
      },
      {
        uid: "4",
        name: "Rodian",
        description: "Native to the jungle planet of Rodia, Rodians are recognizable by their distinctive green skin, large pupil-less eyes, and snout-like noses. Known for their sharpshooting skills and entrepreneurial spirit, Rodians often work as bounty hunters, traders, or mercenaries, navigating the complexities of galactic society with cunning and resourcefulness.",
        image: Rodian
      },
      {
        uid: "5",
        name: "Hutt",
        description: "A slug-like species known for their immense size, vast wealth, and penchant for criminal enterprises, Hutts control vast criminal empires across the galaxy from their homeworld of Nal Hutta. With their insatiable appetites and ruthless ambition, Hutts wield considerable influence in the underworld, manipulating governments, businesses, and criminal syndicates to further their own interests.",
        image: Hutt
      },
      {
        uid: "6",
        name: "Yoda's species",
        description: "A mysterious and enigmatic species characterized by their short stature, long ears, and exceptional connection to the Force, members of Yoda's species are exceedingly rare and possess great wisdom and power. Little is known about their origins or culture, but their presence in the Jedi Order suggests a deep connection to the mysteries of the Force and the eternal struggle between light and dark.",
        image: Yodas
      },
      {
        uid: "7",
        name: "Trandoshan",
        description: "Reptilian humanoids from the planet Trandosha, Trandoshans are renowned for their strength, resilience, and predatory instincts. Often working as bounty hunters or slavers, Trandoshans excel in combat and tracking, using their keen senses and natural weaponry to hunt down their prey with ruthless efficiency.",
        image: Trandoshan
      },
      {
        uid: "8",
        name: "Mon Calamari",
        description: "Amphibious beings hailing from the oceanic world of Mon Cala, Mon Calamari are known for their aquatic prowess, technological ingenuity, and commitment to the cause of freedom and justice. With their sleek, aquatic architecture and advanced starship designs, Mon Calamari play a crucial role in the Rebel Alliance, providing ships, pilots, and strategic expertise in the fight against the Empire.",
        image: MonCalamari
      },
      {
        uid: "9",
        name: "Ewok",
        description: "Small, furry bipeds native to the forest moon of Endor, Ewoks are skilled hunters, warriors, and craftsmen who live in harmony with nature. Despite their diminutive size, Ewoks are formidable fighters, using primitive weapons and clever traps to defend their homes from Imperial invaders during the Battle of Endor.",
        image: Ewok
      },
      {
        uid: "10",
        name: "Sullustan",
        description: "Native to the volcanic planet of Sullust, Sullustans are known for their exceptional piloting skills, adventurous spirit, and distinctive wide-set eyes. Often found working as traders, smugglers, or starship pilots, Sullustans navigate the dangerous hyperspace lanes of the galaxy with confidence and daring, seeking adventure and fortune among the stars.",
        image: Sullustan
      }
    ],
    vehicles: [
      {
        uid: "4",
        name: "Sand Crawler",
        description: "Massive, tank-like vehicles used by Jawas to traverse the desert sands of Tatooine and scavenge for mechanical salvage and scrap. With their towering treads and sprawling interiors, Sand Crawlers are mobile fortresses, capable of transporting large quantities of cargo and personnel across the harsh desert terrain, making them indispensable assets for scavengers and traders operating in the Outer Rim.",
        image: SandCrawler
      },
      {
        uid: "7",
        name: "X-34 Landspeeder",
        description: "Speedy repulsorlift vehicles commonly used for personal transportation on desert planets like Tatooine, X-34 Landspeeders are known for their sleek design and maneuverability. With their streamlined chassis and powerful engines, X-34 Landspeeders can reach impressive speeds over rough terrain, making them popular choices for thrill-seekers and adventurers exploring the galaxy's arid landscapes.",
        image: X34
      },
      {
        uid: "6",
        name: "T-16 Skyhopper",
        description: "Small, versatile airspeeders favored by young pilots for their agility and speed, T-16 Skyhoppers are commonly used for racing and sport on planets like Tatooine. With their sleek aerodynamic design and responsive controls, T-16 Skyhoppers excel in aerial maneuvers, making them ideal for navigating tight spaces and evading obstacles during high-speed competitions.",
        image: T16
      },
      {
        uid: "8",
        name: "TIE/LN Starfighter",
        description: "The standard starfighter of the Imperial Navy, TIE/LN Starfighters are fast, agile, and heavily armed, but lack shields and hyperdrives, requiring carrier ships for deployment. With their distinctive twin ion engines and hexagonal solar panels, TIE/LN Starfighters are iconic symbols of Imperial might, feared by Rebel pilots for their speed and firepower in dogfights across the galaxy.",
        image: TIELN
      },
      {
        uid: "14",
        name: "Snowspeeder",
        description: "Speedy airspeeders modified for cold-weather operations, snowspeeders are used by the Rebel Alliance for reconnaissance, patrol, and combat on icy worlds like Hoth. With their harpoon guns and tow cables, snowspeeders are particularly effective against Imperial walkers, allowing Rebel pilots to trip up the massive AT-ATs and turn the tide of battle in favor of the Alliance.",
        image: Snowspeeder
      },
      {
        uid: "18",
        name: "AT-AT",
        description: "Massive, four-legged armored vehicles used by the Galactic Empire to transport troops and intimidate enemies with their imposing size and firepower. With their towering height and heavy armor plating, AT-ATs are formidable war machines, capable of crushing opposition and striking fear into the hearts of Rebel forces on the battlefield.",
        image: ATAT
      },
      {
        uid: "16",
        name: "TIE Bomber",
        description: "Heavy assault starfighters employed by the Imperial Navy for bombing runs and anti-capital ship operations, TIE Bombers are heavily armed and armored. With their reinforced hulls and payload of bombs and missiles, TIE Bombers excel in delivering devastating attacks on enemy targets, whether in space or planetary atmospheres, making them indispensable assets in the Empire's arsenal.",
        image: TIE
      },
      {
        uid: "19",
        name: "AT-ST",
        description: "All Terrain Scout Transports, or AT-STs, are bipedal walkers used by the Galactic Empire for reconnaissance, patrol, and support roles on the battlefield. With their agile movement and powerful weaponry, AT-STs are versatile combat vehicles, capable of traversing rugged terrain and engaging enemy forces with precision firepower, making them valuable assets in Imperial military operations.",
        image: ATST
      },
      {
        uid: "20",
        name: "Storm IV Twin-Pod Cloud Car",
        description: "Small, twin-pod cloud cars used for patrol and atmospheric flight in the gas giant atmosphere of Bespin, Storm IV Cloud Cars are known for their speed and agility. With their sleek design and twin cockpits, Storm IV Cloud Cars are ideally suited for navigating the swirling clouds and turbulent winds of Bespin's upper atmosphere, making them essential for maintaining law and order in the floating city of Cloud City.",
        image: Storm
      },
      {
        uid: "24",
        name: "Sail Barge",
        description: " Large, luxurious vessels used for transportation and entertainment on desert worlds like Tatooine, Sail Barges are often associated with wealthy and influential individuals or criminal organizations. With their spacious decks, opulent accommodations, and array of amenities, Sail Barges are popular venues for social gatherings, business meetings, and leisurely cruises across the desert sands, offering passengers an unforgettable experience of luxury and indulgence.",
        image: SailBarge
      }
    ],
    planets: [
      {
        uid: "1",
        name: "Tatooine",
        description: "A desert world located in the Outer Rim Territories, Tatooine is known for its harsh climate, twin suns, and bustling spaceports, making it a haven for smugglers, criminals, and adventurers. With its vast deserts, rocky canyons, and scattered settlements, Tatooine is a frontier world where lawlessness and opportunity go hand in hand, attracting a diverse array of beings seeking fortune, freedom, or simply a fresh start in the galaxy's unforgiving outer reaches.",
        image: Tatooine
      },
      {
        uid: "2",
        name: "Alderaan",
        description: "A peaceful and prosperous world known for its beautiful landscapes and rich cultural heritage, Alderaan was tragically destroyed by the Galactic Empire as a demonstration of their power. With its rolling hills, verdant plains, and majestic mountains, Alderaan was once a beacon of hope and civilization in the galaxy, renowned for its dedication to peace, diplomacy, and the arts, until its untimely demise at the hands of the Empire's superweapon, the Death Star.",
        image: Alderaan
      },      
      {
        uid: "3",
        name: "Yavin IV",
        description: "A remote jungle moon orbiting the gas giant Yavin, Yavin IV served as the secret base of operations for the Rebel Alliance during their struggle against the Empire. With its dense forests, rugged terrain, and ancient temples, Yavin IV provided the Alliance with a secluded sanctuary from which to plan their daring assaults on Imperial targets, culminating in the decisive Battle of Yavin, where the Rebel forces emerged victorious against overwhelming odds.",
        image: Yavin
      },      
      {
        uid: "4",
        name: "Hoth",
        description: "An icy planet located in the Outer Rim Territories, Hoth is known for its freezing temperatures, barren landscapes, and the site of the Rebel Alliance's Echo Base during the Galactic Civil War. With its snow-covered plains, jagged mountains, and subzero temperatures, Hoth is a harsh and inhospitable world where survival is a constant struggle, yet its remote location and harsh climate made it an ideal hiding place for the Alliance fleet, until the Empire discovered its location and launched a devastating assault on the Rebel stronghold.",
        image: Hoth
      },      
      {
        uid: "5",
        name: "Dagobah",
        description: "A remote and swampy world shrouded in mist and mystery, Dagobah served as the hiding place of Jedi Master Yoda during his self-imposed exile following the fall of the Jedi Order. With its murky swamps, tangled jungles, and hidden caves, Dagobah is a treacherous and forbidding world where the Force is strong and the line between reality and illusion is blurred, making it the perfect refuge for those seeking solitude, wisdom, or redemption in the aftermath of galactic conflict.",
        image: Dagobah
      },      
      {
        uid: "6",
        name: "Bespin",
        description: "A gas giant located in the Anoat sector, Bespin is home to the floating mining colony of Cloud City, a bustling hub of commerce and opportunity high above the planet's toxic atmosphere. With its swirling clouds, towering gas spires, and breathtaking vistas, Bespin is a world of contrasts, where the beauty of its ethereal landscapes is matched only by the dangers of its volatile weather and the intrigue of its shadowy underworld, making it a magnet for adventurers, entrepreneurs, and outlaws seeking fortune among the stars.",
        image: Bespin
      },      
      {
        uid: "7",
        name: "Endor",
        description: "A forested moon orbiting the gas giant of Endor, Endor is the homeworld of the Ewok species and the site of the decisive Battle of Endor, which saw the Rebel Alliance triumph over the Galactic Empire. With its lush forests, towering trees, and diverse ecosystems, Endor is a paradise of natural beauty and biodiversity, yet its tranquil surface belies the dangers lurking within its dense jungles and ancient ruins, where ancient secrets and hidden dangers await those brave enough to explore its untamed wilderness.",
        image: Endor
      },      
      {
        uid: "8",
        name: "Naboo",
        description: "A picturesque world known for its rolling plains, lush forests, and elegant architecture, Naboo is the homeworld of Queen Padmé Amidala and played a crucial role in galactic politics during the Clone Wars and beyond. With its idyllic landscapes, vibrant cities, and rich cultural heritage, Naboo is a world of refinement and sophistication, yet beneath its peaceful exterior lies a turbulent history of political intrigue, conflict, and rebellion, as the people of Naboo strive to maintain their independence and way of life in a galaxy torn apart by war and tyranny.",
        image: Naboo
      },      
      {
        uid: "9",
        name: "Coruscant",
        description: "The vibrant and bustling capital of the Galactic Republic and later the Galactic Empire, Coruscant is a planet-wide cityscape of towering skyscrapers, bustling streets, and political intrigue. With its sprawling urban sprawl, gleaming towers, and bustling starports, Coruscant is the heart of galactic civilization, where senators, diplomats, and dignitaries from across the galaxy converge to debate laws, negotiate treaties, and plot the course of history, yet beneath its glittering facade lies a dark underbelly of crime, corruption, and inequality, where the lives of the rich and powerful are built on the backs of the poor and oppressed.",
        image: Coruscant
      },      
      {
        uid: "10",
        name: "Kamino",
        description: "A water-covered world located in the Outer Rim Territories, Kamino is known for its stormy seas and the cloning facilities operated by the Kaminoan species, producing clone troopers for the Galactic Republic. With its endless oceans, swirling clouds, and towering spires, Kamino is a world of perpetual rain and gloom, where the constant drumbeat of thunder echoes across the storm-tossed waves, yet within its hidden laboratories lies the key to the Republic's survival, as the clone army forged on Kamino wages war against the forces of darkness threatening to engulf the galaxy in chaos and despair.",
        image: Kamino
      },
    ]
  };
  
  export default DetailsStorage;
  