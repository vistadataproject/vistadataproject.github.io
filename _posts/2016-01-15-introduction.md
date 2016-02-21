---
layout: post
title: Introduction
author: rafael
---

### A Master Data Model for VA VISTA: *Server-side. Security-enabled. Symmetric-Read-Write.*

The VISTA Data Project is about comprehensively exposing and representing all 35 years of patient data and institutional know-how currently in the VA's 130 VISTA systems using a modern web-standard machine-processible data model; and by enriching this model, make all relevant VISTA data accessible in standard, computable form across all VISTA systems with a single, security-enabled, symmetric-read-write (transactional) Master Data Model.

<img style="padding-left: 5em" src="/assets/vdp-basic-annotated9.png"/>


 <!--more-->
 
__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 130 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 130. As a result, there is no single consistent mechanism for reading and writing data into any of these VA systems .

__Why?__

> In order to support the needs of  veterans and clinicians in today's web-oriented world, VA needs to create new web-based clients and services based on VISTA data. VA therefore needs a __single, consistent mechanism for both reading and writing data to all of the 130 local, unique VISTA systems as if they were only one, national master VISTA system__.  This reduces the complexity of development and deployment of new web interfaces and services from 130 distinct VISTA systems to that of only one standardized, computable master VISTA data model.

__How?__

> All sources of relevant metadata (internal to VISTA as well as external) will be transformed to a single integrated web-standard data model which is then annotated, normalized, and enriched. This enriched model is embedded back in VISTA and operationalized as a server-side, security-enabled, in-process, symmetric read/write transactional Master VISTA Data Model. 

 
__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


__The Result__

> The resulting Master VISTA Data Model embedded within the VISTA data engine will provide a server-side, security-enabled, in-process, symmetric read/write Master Data Model that internal and external clients can leverage for transactional, computable data exchange and processing.


## Features

*Unique features of this project and approach include:*

Feature | Details
---|---
__Prototype-Driven__ |  Employs rapid iterative prototyping approach. *Not waterfall development*.
__Data-centric__ | Novel approach to managing VISTA data.  *Not a code-centric approach*.
__Model-driven<br>Architecture__ | Novel approach to data managment of VISTA data.  *Not a code-centric approach*.
__Representative__  | Exposes, leverages, and enhances all relevant, representative VA VISTA to the maximium extent available.  The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and therefore leverages all existing VISTA definitions.
__Noninvasive__ | The VISTA Data Model provides essential new functionality on top of the unmodified VISTA architecture 'as is'. No existing VISTA code, routines, packages, modules, or infrastructure will be affected or changed in any way (i.e. this is 'safe' and 'noninvasive').
__Web-Standard <br>Data Model__  | Exposes VISTA data models and metadata using the World Wide Web Consortium (W3C) [Web Data Model](https://github.com/vistadataproject/documents/tree/master/Background#standards) (RDF, JSON-LD).





For more details, [see the technical overview ...](https://github.com/vistadataproject/documents#technical-overview).





