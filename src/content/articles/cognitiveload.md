---
title:  Reducing Cognitive Load for Visually Impaired Users in Navigating Complex Graph Structures like Filesystems
date: 2023-08-01T03:21:44.941Z
ogImage: /assets/img/og-cognitiveload.png
description: This post is a translation from a longer whitepaper that explores a specific use case of the concepts behind Conshelv and embeds them into historical context (recommended for technical inclined readers).
---

_Note: The article was extracted from [this pdf](/assets/docs/Reducing_Cognitive_Load_for_Visually_Impaired_Users_in_Navigating_Complex_Graph_Structures.pdf) automatically to be shown as a blog entry. It explores the use of some principles behind Conshelv for visually impaired users in a more formal way and puts them in a techno-historical context. While they are not the main target group of Conshelv, the principles looked at still hold true for all people and benefits for a specific group often translates to all possible users._


## Abstract


Navigating intricate graph-like structures, such as file systems, presents substantial challenges for those with visual impairments. This paper delves into the cognitive load hurdles encountered by visually impaired users, highlighting the constraints of prevailing navigation techniques, focusing on file systems. Historical information management and file system concepts are used to discuss characteristics for a suitable accessible file navigation strategy. This paper proposes hierarchical tagging as an alternative to conventional folder-based file organization. It is discussed how context-rich navigation diminishes memory demands and enables seamless auditory integration with screen readers. Finally, the paper underscores the opportunities of this approach, proposing pathways for future research and the advancement of accessible information navigation for individuals with visual impairments.


## 1. Introduction


### Importance of Accessibility in Human-Computer Interaction


In the rapidly evolving landscape of technology, ensuring accessibility for all individuals is paramount to fostering an inclusive digital society. Human-computer interaction (HCI) serves as the bridge connecting users to the digital world, and it is imperative that this interaction is seamless and equitable, also for individuals with diverse abilities (Sullivan and Sahasrabudhe, 2017). Visually impaired individuals, in particular, encounter formidable barriers when navigating large graph-like structures, such as complex file systems. Navigating intricate hierarchies, as often found in file systems, can be particularly taxing, hindering their ability to comprehend relationships, retrieve relevant information, and maintain context. Here, the concept of reducing cognitive load emerges as a crucial aspect of improving accessibility for those users.


### Challenges of Navigating Graph-like Structures


Graphs are mathematical entities represented as G = (V,E), where V denotes a finite set of vertices or nodes, and E is a set of unordered pairs of distinct vertices, known as edges. Each edge e = (vi,vj ) ∈ E establishes a connection between two vertices vi and vj. In the context of information representation, graphs offer a powerful framework to model intricate relationships.


Consider a traditional file system tree: nodes can symbolize directories or files, and edges can represent the hierarchical relationships between them. Similarly, the intricate network of U.S. interstate highways can be construed as a graph, where cities act as nodes vi and highways as edges eij.


![An Undirected Graph](/assets/img/cognitiveload_graph.png "An Undirected Graph (geeksforgeeks.org)")


![Interstates as Graph](/assets/img/interstates_as_graph.jpeg "Interstates as Graph (visualcapitalist.com)")


![Filesystem Tree as Graph](/assets/img/fstree_graph.png "Filesystem Tree as Graph (fsgeek.ca)")


File systems often are structured in ways that mirror complex semi-hierarchical graph-like structures. For sighted individuals, these structures are visually intuitive, enabling quick comprehension of relationships and hierarchies. However, this inherent visual context poses formidable challenges for visually impaired individuals, who rely on non-visual modalities to engage with digital content. Their interaction with these graph-like structures is fundamentally distinct, involving sequential navigation and limited simultaneous perception of information.


Visually impaired users encounter numerous challenges when attempting to navigate these complex graph-like structures. The lack of simultaneous visual context restricts their ability to form a comprehensive mental map of the structure, making it difficult to discern relationships and hierarchies. Furthermore, the sequential navigation typically employed by screen readers or voice assistants forces users to memorize the current location and context, leading to an increased cognitive load. This memory-based navigation imposes limitations on their ability to explore and comprehend the structure as a whole, as they are deprived of a visual or spatial understanding.


## 2. Assistive Technologies and Cognitive Load


Cognitive load refers to the mental effort, resources, and capacity required to process and manage information while performing cognitive tasks. It encompasses the mental burden associated with tasks such as learning, problem-solving, decision-making, and memory recall (Paas et al., 2016).


Visually impaired individuals have benefited from a range of assistive technologies designed to enhance their interactions with digital systems. These technologies aim to address the cognitive load and challenges associated with working on digital devices. In this section, we explore some of these technologies and their potential to alleviate the obstacles faced by visually impaired users.


### Screen Readers


Screen readers are a cornerstone of assistive technology, converting on-screen text into synthesized speech or Braille output. Sequential navigation from node to node is facilitated by screen readers, providing auditory context and enabling users to engage with digital content in a linear manner. While they lack the simultaneous visual context enjoyed by sighted users, screen readers provide access to respective devices by narrating the hierarchical structure and relationships.


### Tactile Diagrams


Tactile diagrams are three-dimensional representations of visual information that can be explored through touch. These diagrams offer a tangible way for visually impaired users to gain insights into structures. In the context of file systems, tactile diagrams can present the hierarchy of folders and files, allowing users to feel the relationships and organization. However, the feasibility of tactile diagrams depends on factors such as production costs, interactivity, and the level of detail achievable.


### Auditory Cues


Auditory cues, such as sound effects and speech feedback, can play an auxiliary role in conveying relationships and structure to visually impaired users. By assigning distinct auditory cues to different types of nodes or relationships within the filesystem graph, users can receive real-time feedback while navigating. These cues, when appropriately designed, can aid in understanding the context and topology of the file system.


### Voice Command Systems


Voice command systems, including virtual assistants like Siri, Google Assistant, or Amazon Alexa, empower visually impaired users to interact with digital systems through natural language. These systems can assist in performing tasks such as file retrieval, directory traversal, and information search, reducing the need for manual sequential navigation. However, challenges arise from the need to learn and adapt to the specific command language of each system.


## Challenges Faced by Visually Impaired Individuals in Navigating Filesystems as Graph-Like Structures


The challenges visually impaired individuals encounter when navigating filesystems are particularly pronounced. For individuals with visual impairments, interacting with these systems presents unique cognitive challenges due to the lack of simultaneous visual context and the inherent sequential nature of navigation.


Traditional filesystem navigation involves traversing hierarchies of files and folders, which can lead to increased cognitive load for visually impaired users. This load arises from the need to maintain a mental model of the structure as they move sequentially between nodes. The cognitive load escalates as the complexity of the graph-like filesystem increases.


The sequential nature of navigation amplifies the memory load required for visually impaired users. Unlike sighted users who can visually grasp the entire graph-like structure, visually impaired users must rely on auditory cues from screen readers or tactile feedback to understand relationships. This creates a cognitive demand to remember the connections and relationships between nodes, leading to information overload and potential loss of context.


Furthermore, users often experience detours within the hierarchical structure: Standard hierarchical folder browsing can necessitate traversing sibling folders before reaching the desired node, leading to a loss of spatial context. This navigational detouring adds cognitive overhead for visually impaired users, as they need to backtrack or remember the path taken to locate information accurately.


## 3. Historical Concepts of Information and File Management


In this section, we explore an excerpt of the history related to information and filesystems.


### Concept Mapping


Concept mapping, introduced by Novak in the 1970s, emerged as a framework for organizing and representing knowledge (Novak, 1990). This method involves linking concepts using phrases that describe relationships, such as "causes," "requires," and "contributes to." Concept mapping aids in creating a visual representation of knowledge domains, allowing users to explore relationships, understand contexts, and navigate complex information structures.


This relates to how visually impaired users can navigate large graph-like structures. By structuring information hierarchically and interconnecting concepts, concept mapping provides a model for reducing cognitive load and aiding in contextual exploration.


### Digital Information Management


The evolution of information management was significantly influenced by two ideas: Memex and Xanadu. These projects not only laid the foundation for non-linear navigation of information but also introduced novel principles that continue to inspire modern knowledge organization.


#### Memex


In 1945, Vannevar Bush proposed the idea of the Memex in his article "As We May Think" (Bush et al., 1945). The Memex, short for "memory extender," was a hypothetical device designed to augment human cognition and memory. Bush envisioned the Memex as a mechanical system that could store and retrieve vast amounts of information. Crucially, the Memex allowed users to create associative trails, effectively establishing connections between documents, concepts, and ideas. This non-linear approach to information access and navigation foreshadowed the concepts of hyperlinks and hypermedia.


#### Xanadu


Building upon the concept of Memex, Ted Nelson initiated the Xanadu project in the 1960s (Nelson, 1965). Xanadu aimed to realize a comprehensive hypertext system that would revolutionize how information is linked and accessed. Unlike traditional hierarchical file systems, Xanadu introduced bidirectional linking, enabling users to traverse documents in multiple directions while maintaining context. This approach was designed to prevent broken links and facilitate seamless navigation. Furthermore, Xanadu introduced the concept of "transclusion," which allowed content from one document to be embedded within another, enhancing information sharing and interconnectivity.


## The Multics System: Shaping Hierarchical File Systems


In the landscape of early operating systems, the Multics project stands as a pivotal development that laid the groundwork for several fundamental aspects of modern computing environments, including the hierarchical file systems commonplace today. Multics, short for "Multiplexed Information and Computing Service," emerged in the 1960s as a collaborative effort between MIT, Bell Labs, and General Electric (Corbat´o and Vyssotsky, 1965). While Multics was ambitious in its goals of efficient resource sharing, security, and data integrity, its contributions to the evolution of hierarchical file systems deserve special attention for this work.


### Legacy and Influence


The concept mapping technique has found applications in various domains, such as note-taking, knowledge graphs, mind maps, brainstorming, and even the creation of sophisticated information architectures like Zettelkasten (Luhmann and Kieserling, 1922). In concept maps, related concepts are interconnected, forming neighborhoods of knowledge that align with how humans naturally organize information mentally.


The ideas put forth by Bush and Nelson had a profound impact on the development of information management and knowledge organization. These concepts served as early blueprints for the creation of hypertext systems and contributed to the birth of the World Wide Web. The Memex and Xanadu concepts championed non-linear navigation, enabling users to traverse information spaces based on associations and relationships. These principles continue to resonate in modern information retrieval methods, influencing the design of content management systems, online platforms, and interactive interfaces.


Multics' influence on hierarchical file systems is profound. The hierarchical file system structure that is integral to today’s operating systems, including Unix-based systems, traces its heritage back to Multics. Multics established the notion of organizing files into directories and subdirectories, as done before computers, leading to a deeply nested tree-like structure for data organization and access.


The legacy of Multics lives on in various aspects of modern computing systems. The hierarchical file system model that it introduced continues to serve as the backbone of operating systems, forming the basis for file organization and navigation. This contribution is particularly evident in Unix-based systems, where the directory structure closely reflects Multics’ pioneering design. However, the file system’s ability to organize data is crucial in reducing cognitive load, and trees might not be the best representation for all types of users, as discussed in the previous section.


### Implications


Several key takeaways emerge from the previous discussions for designing a file system appropriate for visually impaired users:


* The ability to effectively manage arbitrary files within a navigation system is paramount. Current hierarchical structures struggle to accommodate large volumes of diverse files, particularly when catering to visually impaired users, as this leads to deeply nested directories or basically unordered directories consisting of many files. Consequently, alternative approaches that allow for efficient organization and retrieval of various file types are necessary to create a more inclusive and intuitive digital environment.
* The cognitive load imposed by hierarchical file systems presents a critical challenge. The sequential nature of screen readers and the lack of simultaneous visual context contribute to increased memory demands and mental strain. Recognizing the limitations of traditional hierarchical structures encourages the exploration of novel methods that reduce cognitive load and enhance information navigation.
* Visually impaired users require linearized navigation methods that enable them to explore information in a logical and coherent sequence. Traditional hierarchical structures often force users into detours, hindering their ability to maintain a clear mental map of the file system. Addressing this challenge involves adopting approaches that prioritize linearization while preserving meaningful relationships between files.
* Enhancing information accessibility for visually impaired users necessitates the creation of precise file neighborhoods. Such neighborhoods allow users to navigate directly to related files without the need for extensive context switching or memory recall. Incorporating contextual information into navigation pathways can substantially alleviate the cognitive load associated with information retrieval.


Furthermore, the application of the concept mapping principles of Memex and Xanadu provides a compelling direction for future accessibility solutions: Navigation along user-specified associations, defined by topical beacons, exemplifies an approach that could harmonize diverse files while minimizing cognitive load. Although challenges exist, including the need for sophisticated user experiences and computational efficiency, these implications underscore the urgency of designing innovative navigation systems that cater to all users’ needs.


By integrating these implications into the development of novel navigation methods, we can foster an information environment that is more inclusive, efficient, and user-friendly. There is some initial work experimenting with graph-based file systems like QMDS (Ames et al., 2013) or GFS (Jahanian et al., 2019). In the following, we want to consider a specific realization of a graph-based filesystem as a solution for personal file management.


## 4. Hierarchical Tagging


At the core of the hierarchical tagging approach is the concept of multi-level labels, called hierarchical tags. These tags deviate from the conventional approach of organizing information solely within a hierarchical folder structure. Instead, hierarchical tags provide a more flexible and contextually rich method of categorizing and connecting information.


Hierarchical tags allow users to assign multiple labels to a single file, each representing a distinct dimension or context. These labels can range from general categories to specific attributes, capturing the diverse facets of the content. Unlike traditional folders, which limit files to a single location within a predefined hierarchy, hierarchical tags create a dynamic system in which files can exist simultaneously within various organizational contexts.


Hierarchical tags excel at capturing relationships and associations between files that extend beyond the constraints of a hierarchical folder structure. Files related by content, topic, or history can be linked through shared tags, forming a network of connections that mimic the way users naturally associate concepts. This relational aspect enables users to navigate between files seamlessly, following thematic threads and exploring related content with ease.


### Hierarchical Tagging as a Filesystem


Hierarchical tagging presents a compelling alternative to the limitations of traditional folder structures, particularly when it comes to accommodating the needs of visually impaired users. Unlike folders, which demand adherence to a predefined hierarchy, hierarchical tags empower users with a more intuitive and adaptable method of organizing and accessing information.


Traditional folder structures impose a linear and rigid hierarchy that often fails to capture the intricate relationships between files. Visually impaired users, who rely on sequential navigation, encounter difficulties in comprehending complex hierarchies. Hierarchical tags dismantle these constraints by enabling a non-linear organization, where files can belong to multiple categories simultaneously, reflecting their multifaceted nature.


Hierarchical tags serve as entry points for contextual exploration. Instead of following a predetermined path, users can start their navigation from tags that resonate with their current interest or context. This approach encourages a more natural and adaptive navigation experience, where users can delve into specific themes or dimensions without the need to consider the fixed hierarchical structure in advance.


### Project Management Example


![Hierarchical Tags as Filesystem](/assets/img/htfs.png "Hierarchical Tags as Filesystem")


Imagine a visually impaired user deeply involved in project management, handling an array of tasks, documents, and collaborators. In a conventional folder-based structure, files pertaining to different facets of a project might be distributed across disparate directories, potentially causing confusion and inefficiency. It is not clear if files should be ordered project first, client-wise, or date-wise, for example. By adopting hierarchical tagging, the user gains the power to allocate relevant tags to each document, transcending the confines of folder hierarchies.


For instance, consider a project labeled "Project A." The user can tag various documents related to this project with the "Project A" tag. Simultaneously, they can assign other contextual tags such as "Reports" and "Client X," effectively linking these files to multiple aspects of their work. The hierarchical tagging system transforms these documents into nodes in an intricate network of associations, interconnected by meaningful labels that capture the files' roles and relationships. The example is visualized in figure 4.


Navigating the landscape of the project becomes remarkably intuitive. The user can seamlessly traverse between different dimensions, following the threads of "Project A" to access all associated materials. Furthermore, they can explore all documents linked to "Client X" or "Reports," regardless of their physical location in the system’s directory structure.


This approach fundamentally redefines the way information is organized and accessed. It eliminates the need to make rigid decisions about file placement, enabling users to create a dynamic web of associations that reflect the nuanced connections within their work. Hierarchical tagging provides the ability to view content from multiple angles, enhancing the user’s cognitive map of their information space.


## Benefits for Visually Impaired Users


Hierarchical tagging introduces a transformative approach to information organization that directly addresses the challenges of cognitive load experienced by users, particularly those with visual impairments. By replacing the rigid folder structure with a dynamic system of multi-level labels, hierarchical tagging significantly reduces the cognitive load associated with navigating complex graph-like structures.


### Contextual Entry Points


In traditional hierarchical file systems, users often struggle to remember the precise location of files within a deep directory tree. This results in frequent context switching, mental fatigue, and increased cognitive demand. Hierarchical tagging alleviates this burden by allowing users to associate multiple tags with each file, creating numerous entry points to the same content. As a result, users can effortlessly access files from various perspectives, mitigating the need to remember specific paths and reducing the cognitive overhead required for navigation.


### Contextual Navigation


Hierarchical tagging fosters a contextual navigation experience that closely aligns with the way users think and work. By associating files with meaningful tags that reflect their content, purpose, and relationships, users can quickly locate relevant materials without the need for exhaustive searches or long detours up the directory tree. Visually impaired users benefit immensely from this feature, as it enables them to navigate the information space efficiently, guided by the rich semantic associations between files and tags.


### Seamless Tag-Based Search and Filtering


The hierarchical tagging system bolsters information retrieval through tag-based search and filtering. Rather than relying solely on file names, users can search using contextual terms that capture the essence of their information needs. This feature is especially advantageous for visually impaired users, who can provide precise instructions to screen readers or assistive technologies based on the associated tags. They can specify relevant tags, guiding the screen reader to present information directly related to their current task or inquiry. By enabling users to access information based on meaning rather than rote memorization of file names, hierarchical tagging contributes to a more intuitive and less cognitively demanding interaction paradigm.


### Reduced Auditory Overflow


For visually impaired users relying on auditory feedback from screen readers, hierarchical tagging significantly reduces auditory overflow. The availability of contextual tags empowers users to request specific subsets of information, preventing the overwhelming experience of listening to an exhaustive list of file names. This tailored auditory interaction minimizes cognitive strain and enhances the overall accessibility of the information navigation process.


## 5 Discussion


A fundamental requirement of an accessible file system, especially for visually impaired users, is to reduce cognitive load. This demands strategies to simplify navigation, enhance contextual understanding, and streamline information retrieval. Additionally, the system should accommodate diverse navigation preferences and offer a seamless interface that requires minimal effort to interact with.


The hierarchical tagging approach directly addresses these challenges. By replacing traditional folder structures with dynamic and relationship-reflecting tags, this approach reduces cognitive load. The meaningful associations and context provided by tags minimize the need for memory-intensive exploration, fostering a more intuitive interaction with the file space. Moreover, the adaptability of hierarchical tags allows users to personalize their navigation paths, aligning with the principle of accommodating diverse navigation preferences.


One avenue for extending the hierarchical tagging approach involves harnessing artificial intelligence like large-language models to enhance the tagging process. Also, AI-driven algorithms could learn from user interactions, preferences, and contextual cues to generate relevant tags and connections automatically. This would not only alleviate the burden of manual tagging but also optimize the user’s navigation experience over time.


In a broader context, the hierarchical tagging approach stands alongside various other strategies aimed at improving accessibility in information navigation. Hierarchical tagging combines the advantages of semantic structure, personalization, and adaptability.


However, a concrete implementation as an audio or visual interface still needs to be investigated and evaluated experimentally.


## 6 Conclusion


The paper has explored the challenges faced by visually impaired users in navigating complex graph-like structures and introduced hierarchical tagging as a novel approach to address these challenges.


The primary contributions of this paper include an in-depth investigation into cognitive load in hierarchical file systems, an examination of historical concepts like the Memex and Xanadu systems, and the proposal of hierarchical tagging as an accessible alternative.


Hierarchical tagging emerges as a significant advancement in the realm of accessible information navigation. Its ability to provide meaningful associations, enable contextual navigation, and streamline information retrieval directly reduces cognitive load for visually impaired users. This in turn enhances their overall user experience and empowers them to interact more efficiently with information.


As we look ahead, there are promising avenues for future research and development. Exploring the integration of AI-driven enhancements into hierarchical tagging could revolutionize the field of accessible interaction. Additionally, investigating the applicability of hierarchical tagging in contexts beyond file systems, such as network graphs or knowledge management, presents exciting possibilities. Primary future work should focus on implementing and experimentally evaluating such an interface.


In conclusion, the hierarchical tagging approach paves the way for a more inclusive and accessible digital environment. This paper encourages further exploration, collaboration, and innovation to build upon the foundation laid here and continue the journey towards seamless and equitable file system navigation.


## References


Sasha Ames, Maya Gokhale, and Carlos Maltzahn. Qmds: a file system metadata management service supporting a graph data model-based query language. International Journal of Parallel, Emergent and Distributed Systems, 28(2):159–183, 2013.


Vannevar Bush et al. As we may think. The atlantic monthly, 176(1):101–108, 1945.


Fernando J Corbat´o and Victor A Vyssotsky. Introduction and overview of the multics system. In Proceedings of the November 30–December 1, 1965, fall joint computer conference, part I, pages 185–196, 1965.


Mohammad Jahanian, Jiachen Chen, and KK Ramakrishnan. Graph-based namespaces and load sharing for efficient information dissemination in disasters. In 2019 IEEE 27th International Conference on Network Protocols (ICNP), pages 1–12. IEEE, 2019.


Niklas Luhmann and Andre Kieserling. Kommunikation mit zettelkaesten. Universitaet als Millieu, pages 53–61, 1922.


Theodor Holm Nelson. Complex information processing: a file structure for the complex, the changing and the indeterminate. In Proceedings of the 1965 20th national conference, pages 84–100, 1965.


Joseph D Novak. Concept mapping: A useful tool for science education. Journal of research in science teaching, 27(10):937–949, 1990.


Fred Paas, Juhani E Tuovinen, Huib Tabbers, and Pascal WM Van Gerven. Cognitive load measurement as a means to advance cognitive load theory. In Cognitive Load Theory, pages 63–71. Routledge, 2016.


Helen T Sullivan and Shrirang Sahasrabudhe. Envisioning inclusive futures: Technology-based assistive sensory and action substitution. Futures, 87:140–148, 2017.


## About


Written by **Julian Jandeleit**,
August 2023
