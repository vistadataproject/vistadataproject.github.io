---
layout: post
title: Introduction
author: rafael
---

The VISTA Data Project is a Federal Inter-agency health systems collaboration project funded by the Veterans Affairs to 

> provide a single comprehensive security-enabled read/write data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 

<img style="padding-left: 5em" src="/assets/vdp-simple4.png"/>


How? Where? Features?

<!--more-->

__How?__

>1. All sources of existing available metadata (both INTERNAL to VISTA as well as EXTERNAL) will be extracted and transformed to a single, common, web-standard data model called Resource Description Framework (RDF). The most useful form of RDF is JSON-LD, which is JSON with Linked Data capability.
2. Once transformed to JSON-LD, the INTERNAL and EXTERNAL metadata sources can be combined as a single INTEGRATED data model.
3. This INTEGRATED data model is then annotated with new data categories (patient, institution, knowledge, and systems/configuration), redundancy removed, and a subset normalized to the current VPR data model, creating an ENRICHED data model. 
4. This ENRICHED data model is in then embedded back into VISTA as the Master VISTA Data Model (MVDM).
5. The MVDM operationalized within VISTA server-side using Node/M binding directly to the existing transactional VISTA data architecture and data engine.
6.  This MVDM embedded within Node/M provides a  server-side, security-enabled, in-process, transactional read/write Master Data Model that external clients can leverage for transactional, computable data exchange and processing.


__Where?__

>All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


__Key Features__

Feature | Details
---|---
__Prototype-Driven__ |  Employs rapid iterative prototyping approach. *Not waterfall development*.
__Data-centric__ | Novel approach to managing VISTA data.  *Not a code-centric approach*.
__Representative__  | Exposes, leverages, and enhances all relevant, representative VA VISTA to the maximium extent available.  The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and therefore leverages all existing VISTA definitions.
__Noninvasive__ | The VISTA Data Model provides essential new functionality on top of the unmodified VISTA architecture 'as is'. No existing VISTA code, routines, packages, modules, or infrastructure will be affected or changed in any way (i.e. this is 'safe' and 'noninvasive').
__Web-Standard <br>Data Model__  | Exposes VISTA data models and metadata using the World Wide Web Consortium (W3C) [Web Data Model](https://github.com/vistadataproject/documents/tree/master/Background#standards) (RDF, JSON-LD).


For more technical details, [read on ...](https://github.com/vistadataproject/documents).









