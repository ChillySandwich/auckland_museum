import React from "react"
import { Link } from "react-router-dom"

const config = [
    {
        id: "SouthIsland",
        orientation: 'horizontal',
        title: "South Island",
        subTitle: "Regional Map",
        teReoTitle: "Te Waipounamu",
        teReoSubtitle: "Mahere whenua",
        subtitle: "Explore a specific area on the map by touching on one of the hotspots to access more information.",
        imageURL: '/NZ_Territorial_Authorities_South_Island.png',
        touchpointRadius: 20,
        touchpointOuterColor: 'red',
        touchpoints: [
            {
                id: "Nelson",
                xPosition: 1448,
                yPosition: 160,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Nelson",
                teReoDescriptionHeader: "Whakatū",
                englishDescription: "Nelson was named in honour of the Admiral Horatio Nelson who defeated both the French and Spanish fleets at the Battle of Trafalgar in 1805. Many roads and public areas around the city are named after people and ships associated with that battle and Trafalgar Street is the main shopping axis of the city. Inhabitants of Nelson are referred to as Nelsonians.",
                teReoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
            },
            {
                id: "Malborough",
                xPosition: 1480,
                yPosition: 220,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Malborough",
                teReoDescriptionHeader: "Te Tauihu-o-te-waka",
                englishDescription: "Marlborough is known for its dry climate, the Marlborough Sounds, and Sauvignon blanc wine. It takes its name from the earlier Marlborough Province, which was named after General The 1st Duke of Marlborough, an English general and statesman.",
                teReoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
            },
            {
                id:
                    "WestCoast",
                xPosition: 1300,
                yPosition: 310,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "West Coast",
                teReoDescriptionHeader: "Te Tai Poutini",
                englishDescription: "The name Westland is used by some New Zealanders to refer to the whole of the West Coast, including Grey District, Buller District and Fiordland,[citation needed] and can also refer to the short-lived Westland Province of 1873–76. Fiordland is on the west coast, but is in the Southland Region rather than the West Coast Region.        Inhabitants of the West Coast are colloquially known as \"Coasters\".",
                teReoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
            },
            {
                id: "Canterbury",
                xPosition: 1350,
                yPosition: 400,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Canterbury",
                teReoDescriptionHeader: "Waitaha",
                englishDescription: "The Canterbury Province was formed in 1853 following the passing of the New Zealand Constitution Act 1852. It was formed from part of New Munster Province and covered the middle part of the South Island, stretching from the east coast to the west coast. The province was abolished, along with other provinces of New Zealand, when the Abolition of the Provinces Act came into force on 1 Nov 1876. The modern Canterbury Region has slightly different boundaries, particularly in the north, where it includes some districts from the old Nelson Province.",
                teReoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."

            },
            {
                id: "Tasman",
                xPosition: 1390,
                yPosition: 220,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Tasman",
                teReoDescriptionHeader: "Te Tai-o-Aorere",
                englishDescription: "Tasman Bay, the largest indentation in the north coast of the South Island, was named after Dutch seafarer, explorer and merchant Abel Tasman. He was the first European to discover New Zealand on 13 December 1642 while on an expedition for the Dutch East India Company. Tasman Bay passed the name on to the adjoining district, which was formed in 1989 largely from the merger of Waimea and Golden Bay counties.",
                teReoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
            },
            {
                id: "Otago",
                xPosition: 1120,
                yPosition: 650,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Otago",
                teReoDescriptionHeader: "Ōtākou",
                englishDescription: "The name \"Otago\" is the local southern Māori dialect pronunciation of \"Ōtākou\", the name of the Māori village near the entrance to Otago Harbour.The exact meaning of the term is disputed, with common translations being \"isolated village\" and \"place of red earth\", the latter referring to the reddish-ochre clay which is common in the area around Dunedin. \"Otago\" is also the old name of the European settlement on the harbour, established by the Weller Brothers in 1831, which lies close to Otakou. The upper harbour later became the focus of the Otago Association, an offshoot of the Free Church of Scotland, notable for its adoption of the principle that ordinary people, not the landowner, should choose the ministers.",
                teReoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
            },
            {
                id: "Southland",
                xPosition: 1000,
                yPosition: 725,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Southland",
                teReoDescriptionHeader: "Murihiku",
                englishDescription: "Southland (Māori: Murihiku, \"the last joint of the tail\") is New Zealand's southernmost region. It consists mainly of the southwestern portion of the South Island and Stewart Island/Rakiura. It includes Southland District, Gore District and the city of Invercargill. Murihiku Southland is bordered by the culturally similar Otago to the north and east, and the West Coast in the extreme northwest. The region covers over 3.1 million hectares and spans over 3,400 km of coast. As of June 2022, Southland has a population of 102,400, making it the eleventh-most-populous New Zealand region, and the second-most sparsely populated.",
                teReoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur."
            },
        ]
    },
    {
        id: "Octopus",
        orientation: 'vertical',
        title: "Wheke, Sydney octopus",
        subTitle: "Octopus tetricus",
        teReoTitle: 'Wheke',
        teReoSubtitle: "Octopus tetricus",
        subtitle: "Octopus tetricus",
        imageURL: '/Octopus.png',
        touchpointRadius: 20,
        touchpointOuterColor: 'red',
        touchpoints: [
            {
                id: "octopus1",
                xPosition: 1448,
                yPosition: 160,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Tricky wheke",
                teReoDescriptionHeader: "He wheke huna",
                englishDescription: "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
                teReoDescription: "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa."
            },
            {
                id: "octopus2",
                xPosition: 1480,
                yPosition: 220,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Tricky wheke",
                teReoDescriptionHeader: "He wheke huna",
                englishDescription: "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
                teReoDescription: "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa.",
            },
            {
                id: "octopus3",
                xPosition: 1300,
                yPosition: 310,
                ImageURL: "/Marlborough_Sounds_From_Ferry.jpg",
                englishDescriptionHeader: "Tricky wheke",
                teReoDescriptionHeader: "He wheke huna",
                englishDescription: "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
                teReoDescription: "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa."
            },
        ]
    }

]


const Root = () => {

    return (
        <>
       {config.map((page, idx) => {
            return (
            <div key={idx}>
                <Link to={`projects/${page.id}`} >
                    {page.title}
                </Link>
            </div>
            )
          })}
        </>
    )



}

export default Root