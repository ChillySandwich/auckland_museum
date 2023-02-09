//INTERFACES
import { IProjectDetails } from "../interfaces/DataInterfaces";

export const projectConfig : IProjectDetails[]= [
    {
        id: "SouthIsland",
        orientation: 'vertical',
        title: {
            english: "South Island",
            teReo: "Te Waipounamu",
        },
        subtitle: {
            english: "Regional Map",
            teReo: "Mahere whenua"
        },
        imageUrl: '/nz/NZ_Territorial_Authorities_South_Island.png',
        touchpointOpacity: 1,
        touchpointOuterColor: 'red',
        touchpoints: [
            {
                id: "Nelson",
                touchpointRadius: 20,
                xPosition: 778,
                yPosition: 205,
                imageUrl: "/nz/Nelson_New_Zealand.jpg",
                descriptionHeader: {
                    english: "Nelson",
                    teReo: "Whakatū",
                },
                description: {
                    english: "Nelson was named in honour of the Admiral Horatio Nelson who defeated both the French and Spanish fleets at the Battle of Trafalgar in 1805. Many roads and public areas around the city are named after people and ships associated with that battle and Trafalgar Street is the main shopping axis of the city. Inhabitants of Nelson are referred to as Nelsonians.",
                    teReo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
                }
            },
            {
                id: "Malborough",
                touchpointRadius: 20,
                xPosition: 800,
                yPosition: 300,
                imageUrl: "/nz/Marlborough_Sounds_From_Ferry.jpg",
                descriptionHeader: {
                    english: "Malborough",
                    teReo: "Te Tauihu-o-te-waka",
                },
                description: {
                    english: "Marlborough is known for its dry climate, the Marlborough Sounds, and Sauvignon blanc wine. It takes its name from the earlier Marlborough Province, which was named after General The 1st Duke of Marlborough, an English general and statesman.",
                    teReo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
                }
            },
            {
                id:
                    "WestCoast",
                touchpointRadius: 20,
                xPosition: 580,
                yPosition: 440,
                imageUrl: "/nz/WestCoast.jpg",
                descriptionHeader: {
                    english: "West Coast",
                    teReo: "Te Tai Poutini",
                },
                description: {
                    english: "The name Westland is used by some New Zealanders to refer to the whole of the West Coast, including Grey District, Buller District and Fiordland,[citation needed] and can also refer to the short-lived Westland Province of 1873–76. Fiordland is on the west coast, but is in the Southland Region rather than the West Coast Region.        Inhabitants of the West Coast are colloquially known as \"Coasters\".",
                    teReo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
                }

            },
            {
                id: "Canterbury",
                touchpointRadius: 20,
                xPosition: 600,
                yPosition: 600,
                imageUrl: "/nz/Cathedral_Square_2402.jpg",
                descriptionHeader: {
                    english: "Canterbury",
                    teReo: "Waitaha",
                },
                description: {
                    english: "The Canterbury Province was formed in 1853 following the passing of the New Zealand Constitution Act 1852. It was formed from part of New Munster Province and covered the middle part of the South Island, stretching from the east coast to the west coast. The province was abolished, along with other provinces of New Zealand, when the Abolition of the Provinces Act came into force on 1 Nov 1876. The modern Canterbury Region has slightly different boundaries, particularly in the north, where it includes some districts from the old Nelson Province.",
                    teReo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."

                }
            },
            {
                id: "Tasman",
                touchpointRadius: 20,
                xPosition: 700,
                yPosition: 300,
                imageUrl: "/nz/Tasman.jpg",
                descriptionHeader: {
                    english: "Tasman",
                    teReo: "Te Tai-o-Aorere",
                },
                description: {
                    english: "Tasman Bay, the largest indentation in the north coast of the South Island, was named after Dutch seafarer, explorer and merchant Abel Tasman. He was the first European to discover New Zealand on 13 December 1642 while on an expedition for the Dutch East India Company. Tasman Bay passed the name on to the adjoining district, which was formed in 1989 largely from the merger of Waimea and Golden Bay counties.",
                    teReo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
                }
            },
            {
                id: "Otago",
                touchpointRadius: 20,
                xPosition: 380,
                yPosition: 900,
                imageUrl: "/nz/University_of_Otago.jpg",
                descriptionHeader: {
                    english: "Otago",
                    teReo: "Ōtākou",
                },
                description: {
                    english: "The name \"Otago\" is the local southern Māori dialect pronunciation of \"Ōtākou\", the name of the Māori village near the entrance to Otago Harbour.The exact meaning of the term is disputed, with common translations being \"isolated village\" and \"place of red earth\", the latter referring to the reddish-ochre clay which is common in the area around Dunedin. \"Otago\" is also the old name of the European settlement on the harbour, established by the Weller Brothers in 1831, which lies close to Otakou. The upper harbour later became the focus of the Otago Association, an offshoot of the Free Church of Scotland, notable for its adoption of the principle that ordinary people, not the landowner, should choose the ministers.",
                    teReo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
                },
            },
            {
                id: "Southland",
                touchpointRadius: 20,
                xPosition: 250,
                yPosition: 1000,
                imageUrl: "/nz/Winter_Landscape_in_Western_Southland.jpg",
                descriptionHeader: {
                    english: "Southland",
                    teReo: "Murihiku",
                },
                description: {
                    english: "Southland (Māori: Murihiku, \"the last joint of the tail\") is New Zealand's southernmost region. It consists mainly of the southwestern portion of the South Island and Stewart Island/Rakiura. It includes Southland District, Gore District and the city of Invercargill. Murihiku Southland is bordered by the culturally similar Otago to the north and east, and the West Coast in the extreme northwest. The region covers over 3.1 million hectares and spans over 3,400 km of coast. As of June 2022, Southland has a population of 102,400, making it the eleventh-most-populous New Zealand region, and the second-most sparsely populated.",
                    teReo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
                }
            },
        ]
    },
    {
        id: "Octopus",
        orientation: 'horizontal',
        title: {
            english: "Wheke, Sydney Octopus",
            teReo: "Wheke",
        },
        subtitle: {
            english: "Octopus tetricus",
            teReo: "Octopus tetricus"
        },
        imageUrl: '/octopus/Octopus.png',
        touchpointOpacity: 0,
        touchpointOuterColor: 'none',
        touchpoints: [
            {
                id: "octopus1",
                touchpointRadius: 120,
                xPosition: 460,
                yPosition: 680,
                imageUrl: "/octopus/1.jpg",
                descriptionHeader: {
                    english: "Tricky wheke",
                    teReo: "He wheke huna",
                },
                description: {
                    english: "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
                    teReo: "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa."
                },
            },
            {
                id: "octopus2",
                touchpointRadius: 80,
                xPosition: 720,
                yPosition: 410,
                imageUrl: "/octopus/2.jpg",
                descriptionHeader: {
                    english: "Tricky wheke",
                    teReo: "He wheke huna",
                },
                description: {
                    english: "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
                    teReo: "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa."
                },
            },
            {
                id: "octopus3",
                touchpointRadius: 100,
                xPosition: 750,
                yPosition: 900,
                imageUrl: "/octopus/3.jpg",
                descriptionHeader: {
                    english: "Tricky wheke",
                    teReo: "He wheke huna",
                },
                description: {
                    english: "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
                    teReo: "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa."
                },
            },
        ]
    }

]
