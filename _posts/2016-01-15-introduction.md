---
layout: post
title: Introduction
author: rafael
---

The VISTA Data Project is a Federal Interagency health information systems collaboration funded by the Veterans Affairs to 

> provide a comprehensive, security-enabled, symmetric read/write master data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 

<img style="padding-left: 5em" src="/assets/vdp-simple5.png"/>


>All sources of available metadata (both internal to VISTA and external) will be transformed and incorporated into one single integrated web-standard data model, which is then annotated, normalized, and enriched. This enhanced model is in turn is embedded back and operationalized in VISTA as a server-side, security-enabled, in-process, transactional symmetric read/write Master Data Model.   


Too many new concepts?   <!--more-->


__How to Create a Master VISTA Data Model__

All sources of existing available metadata (both internal to VISTA as well as external, such as business logic from external applications) will be extracted and transformed to a single, common, industry-standard metadata model called the Resource Description Framework (RDF). 

Once transformed to RDF, all internal and external metadata sources may be combined as a single, *comprehensive integrated web-standard data model that spans all data in VISTA, as well as all relevant external data.*

This INTEGRATED data model is then annotated with new data categories to provide the foundation for patient-centric, on-the-data security model, as well as master data management of other broad categories of VA data, such as systems and configuration data, institutional data, and knowledge artifacts. The INTEGRATED data model will have much redundancy removed from overlapping definitions within VISTA and its associated applications.   

A subset of the INTEGRATED model will be used to create a Normalized model. Supplementary metadata will be added to the normalized model to support symmetric read and write (i.e. the read model is the same as the write model).  All the annotations, normalizations, categorizations, and enhancements to the integrated model are called the ENRICHED model.

The ENRICHED data model is then embedded back into VISTA and operationalized directly on top of the native transactional database engine of VISTA using the server-side Javascript / Node.js binding called nodeVISTA.  This embedded, server-side transactional master data model for VISTA is called the Master VISTA Data Model (MVDM).

The Master VISTA Data Model embedded within the VISTA data engine provides a server-side, security-enabled, in-process, symmetric read/write transactional Master Data Model that external clients can leverage for transactional, computable data exchange and processing.


__VISTA Data Project: Unique Features__

Feature | Details
---|---
__Prototype-Driven__ |  Employs rapid iterative prototyping approach. *Not waterfall development*.
__Data-centric__ | Novel approach to managing VISTA data.  *Not a code-centric approach*.
__Representative__  | Exposes, leverages, and enhances all relevant, representative VA VISTA to the maximium extent available.  The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and therefore leverages all existing VISTA definitions.
__Noninvasive__ | The VISTA Data Model provides essential new functionality on top of the unmodified VISTA architecture 'as is'. <br><br>No existing VISTA code, routines, packages, modules, or infrastructure will be affected or changed in any way (i.e. this is 'safe' and 'noninvasive').
__Web-Standard <br>Data Model__  | Exposes VISTA data models and metadata using the World Wide Web Consortium (W3C) [Web Data Model](https://github.com/vistadataproject/documents/tree/master/Background#standards) (RDF, JSON-LD).


For more technical details, [read on ...](https://github.com/vistadataproject/documents).









