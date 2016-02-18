---
layout: post
title: Introduction
author: rafael
---

The VISTA Data Project is an Inter-Agency Federal Health systems project funded by the Veterans Affairs (VA) to 

 >__Provide a comprehensive security-enabled read/write data model for all VA VISTA data  across VA VISTA operational systems__, establishing the technical foundation  for __master data management__  and computable data representation and __exchange between VA and DoD clinical information systems__. --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.1
 
 
__Why?__

> The requirements of Public Law 113-066 (P.L. 113-066), Section 713 – “Electronic Health Records of the Department of Defense and the Department of Veterans Affairs,” of the National Defense Authorization Act (NDAA) for Fiscal Year 2014 state that by December 31, 2016, __VA must achieve an interoperable electronic health record (EHR)__ with an integrated display of data with the Department of Defense (DoD) and private sector providers. __The interoperable EHR must exchange all relevant health care data between DoD and VA computable in near real time__.

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information needs to run over 1200 hospitals and clinics throughout the U.S. efficiently, and provide veterans access to the highest quality of care, everywhere.  There are over 130 instances of VISTA deployed nationwide, and each has evolved independently of each other over the past thirty years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 130. In addition, there is no secure, standard way to read or write data into any of these VA systems in computable form.

> VA therefore needs a standardized means to securely read and write computable data into all of the 130 VISTA systems as if there were only one, national master VISTA system.  This would reduce the complexity of the Congressional requirement for interoperability with VA from 130 distinct VISTA systems to that of only one standardized, computable master VISTA data model.


 <!--more-->

__How?__

>__All sources of available metadata and models__ (both internal to VISTA as well as external) will be __transformed to a single integrated web-standard data model__ which is then __annotated, normalized, and enriched__. This enhanced model is in turn is __embedded back in VISTA as a server-side, security-enabled, transactional (i.e. computable) read/write Master Data Model__.   


<img style="padding-left: 5em" src="/assets/vdp-simple4.png"/>


>__Twitter version__: *VISTA has a Data Model. So use it!*


__Where?__

>__All artifacts and deliverables__ shall be developed, version-controlled, stored, and delivered on an industry-standard __public Github__ repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the __public__ shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


## The Result

The resulting Master VISTA Data Model embedded within the VISTA data engine will provide a server-side, security-enabled, in-process, symmetric read/write Master Data Model that internal and external clients can leverage for transactional, computable data exchange and processing.


For more details, [see the technical overview ...](https://github.com/vistadataproject/documents).







