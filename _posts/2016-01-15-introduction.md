---
layout: post
title: Introduction
author: rafael
---

The VISTA Data Project is a Federal Inter-Agency health systems innovation project funded by the Veterans Affairs (VA) to 

> provide a comprehensive, security-enabled, symmetric read/write master data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 

<img style="padding-left: 5em" src="/assets/vdp-simple4.png"/>


How does this work? 

>__Executive version__:  All sources of relevant metadata (internal to VISTA as well as external) will be transformed to a single integrated web-standard data model which is then annotated, normalized, and enriched. This enriched model is embedded back in VISTA and operationalized as a server-side, security-enabled, in-process, symmetric read/write transactional Master VISTA Data Model.

and for the hipsters...

>__Twitter version__: *VISTA has a Data Model. Let's use it!*


 <!--more-->

__What is the process to create the Master VISTA Data Model?__

>__Model Extraction and Transformation__

>* All sources of existing available metadata (both internal to VISTA as well as external, such as business logic from external applications) must be extracted and transformed to a single, integrated, web-centric, industry-standard, machine-processable metadata model. 
* Currently the data model that meets all these criteria is the World Wide Web Consortium (W3C) Resource Description Framework (RDF), also known as Linked Data. 
* This is the same metadata standard used by the National Library of Congress to index all books, the National Library of Medicine to index all medical journals, and all major search engines to index all structured data on the web.

>__Model Integration__

>* Once transformed to Linked Data, all internal and external metadata sources may be combined as a single, comprehensive integrated web-standard data model that spans all data in VISTA, as well as all relevant external data.


>__Model Enrichment__
> 
> * __Annotation__: This integrated data model is then annotated with new data categories to provide the necessary data identification to support master data management of broad categories of data, such as patient data, systems and configuration data, institutional data, and knowledge data.
* __Security__ The patient data annotations will provide the basis of a patient-centric, on-the-data data security model. 
* __Redundancy__: The integrated data model will have much redundancy removed from overlapping definitions within VISTA and its associated applications.   
* __Normalization__: A subset of the integrated model will be used to create a normalized model based on the VA's Virtual Patient Record (VPR).
* __Symmetric Read/Write_: Supplementary metadata will be added to the normalized model to support symmetric read and write (i.e. the read model is the same as the write model). Currently the methods for read and write are completely distinct models and often buried in procedural code. 
* __Enrichment_: All the annotations, normalizations, categorizations, and enhancements to the integrated model are called the enriched model.

>__Model Operationalization__
>
* The enriched data model is then embedded back into VISTA and operationalized directly within the native transactional database engine of VISTA using the server-side Javascript / Node.js binding mechanism called nodeVISTA.  
* This embedded, server-side transactional master data model for VISTA is called the Master VISTA Data Model (MVDM).

__The Result__

The resulting Master VISTA Data Model embedded within the VISTA data engine will provide a server-side, security-enabled, in-process, symmetric read/write Master Data Model that internal and external clients can leverage for transactional, computable data exchange and processing.



For more technical details, [see the technical overview ...](https://github.com/vistadataproject/documents).







