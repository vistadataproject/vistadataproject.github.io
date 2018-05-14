---
layout: default
title: VistA Data Project - Liberating Veteran Data
---

![vdp-iceberg -width95](https://github.com/vistadataproject/documents/blob/master/images/src/iceberg/iceberg.png)

# VISTA Data Project

The Veterans Information Systems Technology Architecture ([VISTA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated longitudinal  clinical, business, and administrative information system that has supported the operations of the 1200+ VA hospitals and clinics nationwide for the past 35 years.  [ [VISTA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista) ].

Currently 130 VistA ems contain hundreds of billions of data, but there is no single, modern method to access all this data. The VISTA Data Project is a new data-centric, model-driven approach to VA master data management, interfacing, and security.  VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form. 

Now, for the first time, VA's native transactional clinical and business data model - the VISTA Data Model -  will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface for all clinical operational VISTA data. 

The VISTA Data Model is in turn normalized across all local VISTA system data models to create a national, standardized Master Veteran Data Model (MVDM), allowing read-write transactions across all VA VISTA systems using a single, secure, veteran-centric, model-driven mechanism, MVDM Services: 

<br><br>
![vdp-transition](https://github.com/vistadataproject/documents/blob/master/images/vdp-transition-20170607d.png)


*The figure above summarizes the evolution from __thousands of unique, inconsistent, insecure, unidirectional code-based interfaces__ to that of a __single, standardized, secure, server-side, symmetric (bidirectional), service-based, master data model-driven interface__.*   

<br><br>
For a technical overview of the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)




![vdp-transition -width95](https://github.com/vistadataproject/documents/blob/master/images/vdp-transition-20170607d.png)


![vdp-vics -width95](/main/images/vam-vics-main-20180223-v1.png)

__Veteran Integrated Cloud Services__ (VICS) provides a cloud-based roadmap and software for maintaining VistA and the VA workflows it supports using straightforward off-the-shelf commercial cloud services and microservices. VICS will be deployed within the VA’s Enterprise Cloud using Amazon Web Services.  

For the current state of VistA's migration to centralized services, see: http://vistaadaptivemaintenance.info/
