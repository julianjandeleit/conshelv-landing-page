---
title: Project Specifications and Roadmap
date: 2025-06-11T00:00:00.000Z
ogImage: /assets/img/public/assets/img/og-project_specifications_and_roadmap.png
description: To approach a big vision, it needs to be broken down into smaller, well defined pieces. This post defines a roadmap containing specifications for sub projects with the preliminary names "Conshelv Entity", "Conshelv Files" and "Conshelv Photo".
---

Conshelv is about a modern software to organize personal files with metadata and store it in archives that can be dynamically queried and synced between devices. Small non-enterprise but professional projects could benefit as well.
Specifically, it should allow users to have a big collection of data at one place that is accessible from everywhere, while only having partial data on end user devices to save memory. This process should be made simple and intuitive as a first priority.
A first use-case is photography where big libraries need to be organized.
Typically files are stored in folders. However, they have the disadvantage of mutually exclusive folders (ignoring hardlinks, which are not ubiquitously supported). The same document can only be stored in one directory. However, files can be described by multiple different kinds of ontologies. Those might also imply multiple ownership. For example a picture might be placed in several folders: The year it was taken on, the location it was taken, the camera used, the event that was photographed, several persons in the picture, etc. This kind of metadata could also be nested like subdirectories or hierarchical tags used in other image organization softwares to imply generalization.
Often, different kinds of documents relate to each other. There are two kinds of relationships.
1. An implied relationship by the sharing of the same metadata.
2. An explicit relationship stating a direct connection from one file to each other. These might for example be different instances of edits of the same raw photograph or versions of files.

The realization of this project requires special properties, implied by the general vision described above.
 - At first a metadata format is required that is dynamic and flexible enough for different kinds of nested tags.
 - The metadata format needs to be able to express explicit relationships.
 - The metadata needs to be able to be stored and queried reliably with an intuitive query language, ideally able to be exposed in some way to the end user.
 - The query language needs to be able to express relationships.
 - The relationships need to be able to appear as arbitrary nested tags
 - The storage layer needs to be embeddable and usable for embedded low ressource end user devices.
 - Synchronization of subsets needs to be possible.
 - Data should be stored by content-addressed ids.
 - The software should be built on existing standards and implementations to reduce workload.
 - Underlaying software needs to be easily extendable.
 - Binary data should be able to be stored in the metadata to represent files.
 - The metadata needs to be human readable to provide a long term archive that can be trusted.
 - Relationships need to be computed resonably fast.
 - The archive needs to be platform independent.
 - Reasonable performance for up to 100000 files and 1TB of data.

These requirements naturally lead to specific subprojects. JSON is a commonly used format for metadata and supports human readable and binary serializations, binary storage and especially JSON5 is human readable. Several databases exist for JSON storage. However most are either not embeddable, available under a permissive license or support graph storage. Graph databases on the other hand have the disatvantage that they don't support JSON directly, only un-nested properties or even a more abstract model like with RDF, those would have to be remapped first, introducing possible points of failures and complexity in the code.
JasonDB, written in Rust without external dependencies can in theory compile for any platform, is easily extendable, but does not support relationships or a textual query language yet. A system for querying is available though. ACID compliancy and stability of file format is unclear. For long term storage, it would be beneficial if data is stored on filesystem anyways, while JasonDB is used for inference and management logic.

Thus the following projects are defined. At first they should be implemented as a MVP and then extended to full spec as required:

## 1. Conshelv Entity

Conshelv Entity implements a storage layer for JSON5 data ontop of JasonDB. JasonDB is to be extended to support on file-system content-addressed storage of JSON files. It should define conventions for explicit and implicit relationships and provide a simple but expressive query language (maybe similar to cypher or grapql or relational algebra). Specifically it needs to make sure indexing on arbitrary nested JSON is efficient as well as inferring relationships using indices. Also partial syncing (push and pull) of different archives should be implemented. Ideally this works without an active api server. It should be implemented in a more abstract way and on _passive_ file systems or instead, similar to plain git.

Finally a CLI and Rust API for CRUD operations on these JSON Files and Queries needs to be implemented.

## 2. Conshelv Files

Conshelv Files uses Conshelv Entity to implement the storage of metadata based files. This means that a file always consists of the file itself and the metadata attached to it. This construct is called "Metafile". Both components should be stored in Conshelv Entity individually, as JSON objects, connected by relationships to an entity node, defining the actual metafile. The File is stored in JSON as a base 64 encoded binary string in a field chosen by convention. An advanced version should also define versioning by transitive relations of the same kind. Versioning on a global level (like organization structures, direvctories) is TBD.

Conshelv Files should provide an updated API and CLI, taylored for the storage and retrieval of files, not JSON only generally, implementing all the conventions taken and building ontop of the Conshelv Entity Querying language. Specifically JSON nested objects should be converted to hierarchical tags as the mental model for the user and query and interaction object.

This layer effectively implements an alternative hierarchical tag based filesystem whose subsets can easily be synchronized

## 3. Conshelv Photo

Conshelv Photo implements common workflows and conventions for photo management. This includes data import, completeness check, appending useful metadata automatically and semi-interactive scripts for management and conventions for specific tasks in photography like editing.

## Graphical User Interfaces

For all projects simple GUIs should be implemented, probably using Flutter. But this is not the main point, except for Conshelv Photo. The visualizations should compile on all major platforms, including Windows, Mac, Linux, IOS, Android.

The visualization of Conshelv Photo should also include a timeline view, etc. as expected for a photo manager.

--- 
_Last Edited: 11.06.25_