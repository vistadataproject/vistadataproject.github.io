---
layout: post
title: Introduction
author: rafael
---
# VISTA Data Project

### A Real-time Computable Master Data Model for VA's VISTA Systems

_Web-standard. Security-enabled. Symmetric-Read-Write._

The VISTA Data Project is an approach to comprehensively expose and represent all 35 years of patient data and institutional know-how currently in the VA's 130 nationally deployed health information systems (VISTA) using a modern web-standard machine-processible data model; and by enriching this model, make all relevant VISTA data securely accessible and computable in real-time across all 130 VISTA systems as if it were just one national Master VISTA system.


<img style="padding-left: 5em" src="/assets/vdp-basic-annotated9.png"/>

 ## Features

*New and unique features for VISTA Data management include:*

Feature | Details
---|---
__Uniform Access__ | Provides VISTA with its first universal, standardized mechanism for reading and writing data.  This mechamism is unified through a read model and write write model that are integrated into one single, symmetric-read-write VISTA Data Model (VDM; See diagram above). *This overcomes the well understood shortcoming with VISTA Data Read and Write. The 20+ year old CPRS-specific RPC Broker and the associated 3300+ MUMPS routines - none of which are documented nor maintained - cannot be relied on going forward, particularly for non-CPRS clients.*
__Data Integrity__ | Provides VISTA with its first single, comprehensive framework for strict validation and consistency checks for all information provided to or from all clients. *This is a major improvement over the hodge-podge of legacy, ad-hoc methods that have accumulated over the past 35 years (HL7, RPCs, MUMPS, procedural code), which are all inconsistent, unpredictable, and permissive*
__Data Security__ | Provides VISTA with its first comprehensive, granular, on-the-data, *Data-Level Security Model*. Currently VISTA is data-category agnostic. Through metadata enrichment of the VISTA Data Model with data categories, VISTA will know for the first time *what categories of data it is managing* (for example, patient data vs non-patient data). This Data-Layer / Sementic Security is the foundation for all other security layers, since without knowlege of what the data is, one won't know the appropriate security measures to apply to it.  See [Data-Centric Security](https://en.wikipedia.org/wiki/Data-centric_security)
__Data-driven__ | A new approach to managing VISTA's data.  *Not a code-centric approach*.
__Model-centric__ | A model-centric architecture is a new approach to data managment of VISTA data.  *Not a code-centric approach*.
__Server-side__ | All data, transformations, and models are processed in-process, server-side. This eliminates moving parts and maximizing transaction processing performance directly on the local database with no middleware, leveraging the 'as-is' database architecture.
__Real-Time__ | All data and model transactions are performed in-process, directly on the database using modern, Best-of-Breed, web-standard asychronous real-time Node.js technology. 
__Self-Contained__ | All data and models transformations occur 'in-situ' on the data at rest within the database.  *No moving parts.  No moving, syncing, or replication of data. No external dependencies.* This makes it easy to deploy, maintain, and keep highly performant.
__Representative__  | Exposes, leverages, and enhances all relevant, representative VA VISTA to the maximium extent available.  The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and therefore leverages all existing VISTA definitions. Any and all enhancements to the VISTA system and its data definitions will automatically be reflected in the VISTA Data Model through automated, triggred updates whenever VISTA's data dictionary is updated (i.e. 100% correspondence of the VDM to any local VISTA).
__Noninvasive__ | The VISTA Data Model provides essential new functionality on top of the unmodified VISTA architecture 'as is'. No existing VISTA code, routines, packages, modules, or infrastructure will be affected or changed in any way (i.e. this is 'safe' and 'noninvasive').
__Web-Scale__  | Exposes and manages all VISTA data models using the machine-processable, universal web data model called Resource Description Framework (RDF).  This is the same web model and approach  used by Google, Yahoo, Microsoft, and other major search engines to crawl, link, and index all structured data on the web.
__Web-Standard__ |  All technologies empoloyed are web standard.  For further information see [standards and technologies](https://github.com/vistadataproject/documents/tree/master/Background#standards).
__Prototype-Driven__ |  Employs a rapid iterative prototyping approach. *Not waterfall development*.  See [spiral model](https://en.wikipedia.org/wiki/Spiral_model)







## Objective and Method of Delivery

__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 130 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 130. As a result, there is no single consistent mechanism for reading and writing data into any of these systems across the VA nationwide.

__Why?__

> Each of VA's 130 VISTA systems has a unique database and data model, and therefore cannot share any computable data across or between any of the other VISTA systems. Because veterans receive care at multiple facilities, and because VA needs to nationally coordinated approach to veteran care, these VISTA systems need to be functionally integrated as a single, national system.  In addition, in order to support the needs of  veterans and clinicians in today's web-oriented world, VA needs to create web-based clients and services based on VISTA data. 

> __VA therefore needs a single, consistent, web-standard mechanism for real-time read-write transactions to all of the 130 local, unique VISTA systems as if they were only one, national master VISTA system__.  This reduces the complexity of development, deployment, and maintenance for any new nationwide data service from any of the 130 distinct local VISTA systems to that of only one standardized computable Master VISTA system.

__How?__

> All sources of available metadata and models (internal to VISTA as well as external) will be transformed to a single integrated web-standard machine-processable data model which is then annotated, normalized, and enriched. This enhanced model is in turn is embedded back in VISTA as a server-side, security-enabled, symmetric read/write (i.e. transactional) Master Data Model.   

__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


For more details, [see the technical overview ...](https://github.com/vistadataproject/documents#technical-overview).



