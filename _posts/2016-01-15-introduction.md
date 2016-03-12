---
layout: post
title: Introduction
author: rafael
---


![vdpiceberg](/assets/vdp-iceberg-1000w.jpg)



# VISTA Data Project

### A Real-time Computable Master Data Model for VA's VISTA Systems
_Server-side. Security-enabled. Symmetric-Read-Write._

The VISTA Data Project is a new data-centric approach to comprehensively exposing, representing, and managing all thirty-five years of patient data and institutional know-how currently in the VA's 131 nationally deployed health information systems (VISTA) using a modern web-standard machine-processable data model; and by enriching and operationalizing this model, make all relevant VISTA data securely accessible and computable in real-time across all VISTA systems as one national, standard Master VISTA system.

<img style="padding-left: 5em" src="/assets/vdp-basic-annotated12.png"/>

.

.

## Features

The VISTA Data Project is a new data-centric approach to VISTA data access and management.  This is in contrast to the current code-centric approach to data access which relies on a byzantine array of thousands of narrowly-scoped hard-coded data extractors and interfaces, none of which are documented nor maintained. In a data-centric approach one instead comprehensively exposes all the data in the system revealing the native data model, and then manage the data using a model-driven, data-centric approach.

This master data model - the roadmap to all of VA's institutional know-how and data - has evolved organically over the past 35 years, but has not been surfaced or leveraged.  Now, for the first time, this data model will be comprehensively exposed and fully taken advantage of. 

*__An operationalized Master VISTA Data Model (MVDM) provides VISTA four essential new capabilities:__*

Feature | Details
---|---
__Data Access__ | __MVDM provides VISTA with its first universal, standardized mechanism for reading and writing data.__ <br> This mechanism is unified through a read model and write write model that are integrated into one single, symmetric-read-write data model (VDM; See diagram above). *This overcomes the well understood shortcoming with VISTA Data Read and Write, which uses completely unique, distinct code, models, and mechanisms for reading data from writing data. The 20+ year old CPRS-specific RPC Broker and the associated 3300+ MUMPS routines which encapsulate all these idiosyncratic approaches - none of which are documented or maintained -  simply cannot be relied on going forward, particularly for non-CPRS clients.*
__Data Integrity__| __MVDM provides VISTA with its first single, comprehensive framework for strict validation and consistency checks for all information provided to or from all clients.__ <br> *This is a major improvement over the hodgepodge of legacy, ad-hoc methods that have accumulated over the past 35 years (HL7, RPCs, MUMPS, procedural code), none of which are documented, and all of which are inconsistent, unpredictable, and highly permissive*
__Data Security__ | __MVDM provides VISTA with its first comprehensive, fine-grained, data-centric *Security Model*.__ <br> Currently VISTA is data-category agnostic. Through metadata enrichment of the VISTA Data Model, VISTA will know for the first time *what categories of data it is managing* (patient data, institution data, etc.). Data-centric, attribute-based security is the foundation for all other security levels and technologies, because without knowledge of the data and its attributes, it will not be possible to provide the appropriate security measures on the data.  See [Data-Centric Security](https://en.wikipedia.org/wiki/Data-centric_security),  [Logical Security](http://www.mdpi.com/1999-5903/4/4/929/htm#fig_body_display_futureinternet-04-00929-f001), and [Semantic Security](https://www.google.com/search?q=semantic+data+security&sa=X&biw=1154&bih=1062&tbm=isch&tbo=u&source=univ&ved=0ahUKEwi_14b--JXLAhWKOz4KHWghAVEQsAQIgwE) and [Attribute-Based Access Control (ABAC)](http://csrc.nist.gov/projects/abac)
__Data Linkage__  | __MVDM provides VISTA with the capability to directly, semantically link and mesh VISTA data with external structured  data resources.__  The world wide web search companies (Google, Yahoo, Microsoft, and others) and major knowledge orgainizations (including the National Library of Congress and National Library of Medicine) have converged on the Linked Data standard as the medium they use for publication, indexing, linking, and semantic search of the vast amount of structured data in their oranization and on the web. Because MVDM also uses the Linked Data model and technology, VISTA will also have the same capability to semantically link its data with the vast amount of structured data on the web. Linking any patient's information from VISTA to external authoritative healthcare and lifesciences sources, for example,  will create a highly contextualized, patient-specific enrichment of their health record.

*Note: As a side-effect of establishing a single comprehensive mechanism for data management for VISTA data, a large portion of VISTA's legacy code (its thousands of data extractor routines) may be retired.*



## MVDM Attributes

Attribute | Details
---|---
__Representative__  | __MVDM operationalizes all relevant VA VISTA data to the maximum extent available.__ <br> The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and thus leverages all existing VISTA definitions. There is 100% correspondence and coverage of the internal data definitions of any local VISTA and that of its corresponding  VISTA Data Model (VDM), since these are maintained always in-sync and up-to-date. Any and all enhancements to any VISTA system and its data definitions will automatically be reflected in the VISTA Data Model through automated, triggered updates whenever VISTA's data dictionary is updated. 
__Real-Time__ | __MVDM is operationalized using Best-of-Breed real-time server-side runtime technology.__<br> The same runtime technology that runs the largest commericial real-time high-traffic websites such as Walmart, eBay, PayPal, Netflix, Uber, LinkedIn, and the New York Times also runs MVDM. *This maximizes transactional processing performance directly on the transactional database.*
__Noninvasive__ | __MVDM provides VISTA with essential new functionality within the current VISTA architecture 'as is', without modification.__ <br>  No existing VISTA code, routines, packages, modules, infrastructure, or functionality will be affected or changed in any way (i.e. this is a 'safe'and 'noninvasive'). This keeps all existing functionality, while offering new, essential functionality for parallel development of all new web-oriented clients. In addition, it makes it easy and 'safe' to install, as this does not affect any current code or functionality.
__Self-Contained__ | __MVDM runs entirely server-side, embedded directly on the existing VISTA database__. <br> This eliminates all moving parts and maximizes transaction processing performance by running as an embedded process directly on the local database, leveraging the 'as-is' database architecture. *This makes it easy to deploy, maintain, and keep highly performant.  No moving parts. No external dependencies. No middleware.* 
__Data-Centric__ | __MVDM is a completely new, purely data-centric approach to managing VISTA's data__.  It does not involve changing a single line of VISTA's existing M procedural code, nor is it 'wrapping' (i.e. secretly using) any legacy code, routines, or RPCs dressed up within a shiny new programming language or encapsulation mechanisms, which add yet more layers of obfuscation on the data. A data-centric approach __*comprehensively exposes all the data, which exposes the fact that VISTA has a data model*__ - which up to this point has not been realized nor taken advantage of. *This is the opposite of a code-centric approach, which obfuscates the data and its data model*.
__Web-Standard__ |  __MVDM technologies are 100% web standard__ and all used in production settings by the worlds' largest corporations and organizations.  For further information see [standards and technologies](https://github.com/vistadataproject/documents/tree/master/Background#standards).
__Empiric Evolution__ | __MVDM employs a new approach to emprically evolving VISTA's capabilities through rapid, iterative, functional prototypes.__ This allows the focus to remain on exploration of new techniques and approaches, rather than on more superficial end-user requirements, which rarely if ever attempt to tackle the deep conceptual and technological issues of data management. This is *the opposite waterfall development*.  See [spiral model](https://en.wikipedia.org/wiki/Spiral_model)




## Objective and Method of Delivery


__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 131 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 131. As a result, VA cannot share any computable data across or between any of the other VISTA systems.

__Why?__

> Because veterans receive care at multiple facilities, and because VA needs to nationally coordinated approach to veteran care, all VISTA systems need to be functionally integrated as a single, national coordinated system.  In addition, in order to support the needs of veterans and clinicians in today's web-oriented world, VA needs to create new web-based clients and services to provide all necessary information to providers and veterans using todays mobile, tablet, and web browser based interfaces. 

> VA therefore needs a single, consistent, web-standard mechanism for real-time read-write transactions to all of the 131 local, unique VISTA systems as if they were only one, national master VISTA system.  This reduces the complexity of development, deployment, and maintenance for any new nationwide data service from any of the 130 distinct local VISTA systems to that of only one standardized computable Master VISTA system.

__How?__

> All sources of available metadata and models (internal to VISTA as well as external) will be transformed to a single integrated web-standard machine-processable data model which is then annotated, normalized, and enriched. This enhanced model is in turn is embedded back in VISTA as a server-side, security-enabled, symmetric read/write (i.e. transactional) Master Data Model.   

__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1



For more details, [see the technical overview ...](https://github.com/vistadataproject/documents#technical-overview).
