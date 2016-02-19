---
layout: post
title: Introduction
author: rafael
---

### A Master Data Model for VA VISTA:  Server-side. Security-enabled. Symmetric Read-Write.
The VISTA Data Project is about comprehensively exposing and representing all of VA's 35 years of patient data and institutional know-how contained in  130 VA VISTA systems in a modern web-standard machine-processible form, and making all this data accessible and computable using a single consistent read/write mechanism across all VISTA systems.

__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which supports all adminstrative, financial, and clinical information needs to efficiently manage over 1200 hospitals and clinics throughout the U.S., and to provide veterans access to the highest quality of care, everywhere.  There are over 130 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 130. In addition, there is no single or consistent way to read or write data into any of these VA systems in computable form.

__Why?__

> In order to support the needs of the VISTA Evolution Program, which includes creation of new web-based clients and services based on VISTA data,  VA needs a __single, consistent mechanism to both read and write computable data to support transactions against all of the 130 local VISTA systems as if they were only one, national master VISTA system__.  This would reduce the complexity of development and deployment of all new interfaces and services to VISTA data from 130 distinct VISTA systems to that of only one standardized, computable master VISTA data model.


__How?__

> All sources of relevant metadata (internal to VISTA as well as external) will be transformed to a single integrated web-standard data model which is then annotated, normalized, and enriched. This enriched model is embedded back in VISTA and operationalized as a server-side, security-enabled, in-process, symmetric read/write transactional Master VISTA Data Model.

>__Twitter__: *VISTA has a Data Model. So use it!*

<img style="padding-left: 5em" src="/assets/vdp-simple6.png"/>

 <!--more-->


__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


__The Result__

> The resulting Master VISTA Data Model embedded within the VISTA data engine will provide a server-side, security-enabled, in-process, symmetric read/write Master Data Model that internal and external clients can leverage for transactional, computable data exchange and processing.


For more details, [see the technical overview ...](https://github.com/vistadataproject/documents).





