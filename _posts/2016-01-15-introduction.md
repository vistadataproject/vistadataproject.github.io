---
layout: post
title: Introduction
author: rafael
---

The VISTA Data Project is a Federal Interagency health information systems collaboration funded by the Veterans Affairs to 

> provide a comprehensive, security-enabled, symmetric read/write master data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 

<img style="padding-left: 5em" src="/assets/vdp-simple5.png"/>


What does this mean? How does this work?

<!--more-->

__Explanation of the Figure__

All sources of existing available metadata (both internal to VISTA as well as external to VISTA, such as external business logic) will be extracted and transformed to a single, common, industry-standard metadata model called the Resource Description Framework (RDF). Once transformed to RDF, all INTERNAL and EXTERNAL metadata sources may be combined as a single, comprehensive INTEGRATED web-standard data model that spans all data in VISTA, as well as external associated data.

This INTEGRATED data model is then annotated with new data categories to provide the foundation for patient-centric, on-the-data security model, as well as master data management of other broad categories of VA data, such as systems and configuration data, institutional data, and sharable, standard knowledge artifacts. The INTEGRATED data model will have much redundancy removed from overlapping definitions used within VISTA.  A subset of the INTEGRATED model 


This ENRICHED data model is in then embedded back into VISTA as the Master VISTA Data Model (MVDM).

The MVDM operationalized within VISTA server-side using Node/M binding directly to the existing transactional VISTA data architecture and data engine.


This MVDM embedded within Node/M provides a  server-side, security-enabled, in-process, transactional read/write Master Data Model that external clients can leverage for transactional, computable data exchange and processing.


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









