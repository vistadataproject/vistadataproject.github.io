---
layout: post
title: Introduction
author: rafael
---

The VISTA Data Project is a Federal Interagency health information systems collaboration funded by the Veterans Affairs (VA) to 

> provide a comprehensive, security-enabled, symmetric read/write master data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 

![vdp-simple](/assets/vdp-simple3.png)


<img style="padding-left: 5em" src="/assets/vdp-simple3.png"/>


>All sources of available metadata (internal to VISTA and external) will be transformed and incorporated into a single integrated, industry-standard, machine-processable data model, which is then annotated, categorized, normalized, and enhanced. This enriched model is then embedded back in VISTA and operationalized as a server-side Node.js-based security-enabled symmetric read/write Master VISTA Data Model.   


Simple, right?  <!--more-->


__Creating the Master VISTA Data Model__

In nine easy steps..


1. All sources of existing available metadata (both internal to VISTA as well as external, such as business logic from external applications) must be extracted and transformed to a single, integrated, web-centric, industry-standard, machine-processable metadata model. 

1. Currently the only data model that meets all these criteria is the World Wide Web Consortium (W3C) Resource Description Framework (RDF). This is the metadata standard used by the National Library of Congress to index all books,  the National Library of Medicine to index all medical journals,  and all major search engines (Google, Yahoo, Microsoft) use to index all  structured data on the web and make it searchable.

1. Once transformed to RDF, all internal and external metadata sources may be combined as a single, *comprehensive integrated web-standard data model that spans all data in VISTA, as well as all relevant external data.*

1. This integrated data model is then annotated with new data categories to provide the necessary data identification to support master data management of broad categories of data, such as patient data, systems and configuration data, institutional data, and knowledge data.

1. The patient data annotations will provide the basis of a patient-centric, on-the-data data security model. 

1. The integrated data model will have much redundancy removed from overlapping definitions within VISTA and its associated applications.   

1. A subset of the integrated model will be used to create a normalized model. Supplementary metadata will be added to the normalized model to support symmetric read and write (i.e. the read model is the same as the write model) because the logic and frameworks currently use distinct models for read and write.  
 
1. All the annotations, normalizations, categorizations, and enhancements to the integrated model are called the enriched model.

1. The enriched data model is then embedded back into VISTA and operationalized directly within the native transactional database engine of VISTA using the server-side Javascript / Node.js binding mechanism called nodeVISTA.  This embedded, server-side transactional master data model for VISTA is called the Master VISTA Data Model (MVDM).

The Master VISTA Data Model embedded within the VISTA data engine provides a server-side, security-enabled, in-process, real-time symmetric read/write Master Data Model that internal and external clients can leverage for transactional, computable data exchange and processing.


__VISTA Data Project: Unique Features__

Feature | Details
---|---
__Prototype-Driven__ |  Employs rapid iterative research and prototyping approach. *Not waterfall development*.
__Data-centric__ | A data-centric approach to managing VISTA data fully leverages VISTA's native architecture.  *Not a code-centric approach*.
__Representative__  | Exposes, leverages, and enhances all relevant, representative VA VISTA to the maximium extent available.  The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and therefore leverages all existing VISTA definitions.
__Noninvasive__ | The VISTA Data Model provides essential new functionality on top of the VISTA architecture 'as is' with no modification. <br><br>No existing VISTA code, routines, packages, modules, or infrastructure will be affected or changed in any way (i.e. this is 'safe' and 'noninvasive').
__Web-Standard <br>Data Model__  | Exposes VISTA data models and metadata using the World Wide Web Consortium (W3C) [Web Data Model](https://github.com/vistadataproject/documents/tree/master/Background#standards) (RDF).


For more technical details, [read on ...](https://github.com/vistadataproject/documents).









