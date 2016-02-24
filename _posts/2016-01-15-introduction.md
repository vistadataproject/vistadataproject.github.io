---
layout: post
title: Introduction
author: rafael
---
# VISTA Data Project

### A Master Data Model for VA's VISTA:

_Web-standard. Server-side. Security-enabled. Symmetric-Read-Write._

The VISTA Data Project is about comprehensively exposing and representing all 35 years of patient data and institutional know-how currently in the VA's 130 VISTA systems using a modern web-standard machine-processible data model; and by enriching this model, make all relevant VISTA data accessible in standard, computable form across all VISTA systems with a single, security-enabled, symmetric-read-write (transactional) Master Data Model.


<img style="padding-left: 5em" src="/assets/vdp-basic-annotated9.png"/>

 <!--more-->
 
 
__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 130 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 130. As a result, there is no single consistent mechanism for reading and writing data into any of these VA systems .

__Why?__

> Currently VA has 130 VISTA systems in production, each of which has a unique, silod database that cannot share any computable data across or between any of the other VISTA systems. Because veterans receive care at multiple facilities, and because VA needs to national approach to veteran care, these VISTA systems need to be functionally integrated to support computable transations across all VISTA systems in a national, standardized approach.  In addition, in order to support the needs of  veterans and clinicians in today's web-oriented world, VA needs to create web-based clients and services based on VISTA data. VA therefore needs a __single, consistent mechanism for both reading and writing data to all of the 130 local, unique VISTA systems as if they were only one, national master VISTA system, using web-standards technologies__.  This reduces the complexity of development and deployment of new web interfaces and services from 130 distinct VISTA systems to that of only one standardized, computable master VISTA data model.

__How?__

> All sources of available metadata and models (internal to VISTA as well as external) will be transformed to a single integrated web-standard machine-processable data model which is then annotated, normalized, and enriched. This enhanced model is in turn is embedded back in VISTA as a server-side, security-enabled, symmetric read/write (i.e. transactional) Master Data Model.   

__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


__The Result__

> The resulting Master VISTA Data Model embedded within the VISTA data engine will provide a server-side, security-enabled, in-process, symmetric read/write Master Data Model that internal and external clients can leverage for transactional, computable data exchange and processing.




## Features

*New and unique features for VISTA Data management include:*

Feature | Details
---|---
__Prototype-Driven__ |  Employs a rapid iterative prototyping approach. *Not waterfall development*.  See [spiral model](https://en.wikipedia.org/wiki/Spiral_model)
__Uniform Access__ | Provides VISTA with its first universal, uniform mechanism for reading and writing data.  This mechamism fully standardized and unified through a read data model and write write data model fully integrated into a single, symmetric model.  
__Data Integrity__ | Provides VISTA with its first single, comprehensive framework for strict error checks for all information provided to or from all clients. *This is a major improvement over the hodge-podge of inconsistent methods (HL7, RPCs, procedural code), all of which are permissive*
__Data Security__ | Provides VISTA with its first comprehensive, granular, "on-the-data", data-level security model. This is the foundation for any modern role-based security architecture. See [data-centric security](https://en.wikipedia.org/wiki/Data-centric_security)
__Data-driven__ | A new approach to managing VISTA's data.  *Not a code-centric approach*.
__Model-centric__ | A model-centric architecture is a new approach to data managment of VISTA data.  *Not a code-centric approach*.
__Server-side__ | All data, transformations, and models are processed in-process, server-side - eliminating moving parts and maximizing transaction processing performance "on-the-metal".
__Self-Contained__ | All data and models transformations occur 'in-situ' on the data at rest within the database.  *No moving parts.  No moving, syncing, or replication of data. No external dependencies.* This makes it easy to deploy, maintain, and keep highly performant.
__Representative__  | Exposes, leverages, and enhances all relevant, representative VA VISTA to the maximium extent available.  The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and therefore leverages all existing VISTA definitions. Any and all enhancements to the VISTA system and its data definitions will automatically be reflected in the VISTA Data Model through automated, triggred updates whenever VISTA's data dictionary is updated (i.e. 100% correspondence of the VDM to any local VISTA).
__Noninvasive__ | The VISTA Data Model provides essential new functionality on top of the unmodified VISTA architecture 'as is'. No existing VISTA code, routines, packages, modules, or infrastructure will be affected or changed in any way (i.e. this is 'safe' and 'noninvasive').
__Web-Model__  | Exposes and manages all VISTA data models using the machine-processable, universal web data model called Resource Description Framework (RDF).  This is the same web model and approach  used by Google, Yahoo, Microsoft, and other major search engines to crawl, link, and index all the available structured data on the web.
__Web-Standard__ |  All technologies empoloyed are web standard.  For further information see [standards and technologies](https://github.com/vistadataproject/documents/tree/master/Background#standards).



For more details, [see the technical overview ...](https://github.com/vistadataproject/documents#technical-overview).



