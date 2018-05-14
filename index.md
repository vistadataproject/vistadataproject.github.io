---
layout: default
title: VistA Data Project - Liberating Veteran Data
---

![vdp-iceberg -width95](https://github.com/vistadataproject/documents/blob/master/images/src/iceberg/iceberg.png)

# VISTA Data Project

The Veterans Information Systems Technology Architecture ([VISTA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated longitudinal  clinical, business, and administrative information system that has supported the operations of the 1200+ VA hospitals and clinics nationwide for the past 35 years.  [ [VISTA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista) ]. 

The 130 VistA systems in operation today encapsulate over three decades of VA institutional knowhow and Veteran data, and it is necessary preserve this for the lifetime and continuity of care for all Veterans.  

VistA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  

Now, for the first time, VA's native transactional clinical and business data model - the VistA Data Model -  will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface for all clinical operational VistA data.  

The VISTA Data Model is in turn normalized across all local VISTA system data models to create a national, standardized Master Veteran Data Model (MVDM), allowing read-write transactions across all VA VISTA systems using a single, secure, veteran-centric, model-driven mechanism, MVDM Services: 

<br><br>
![vdp-transition](https://github.com/vistadataproject/documents/blob/master/images/vdp-transition-20170607d.png)

*The figure above summarizes the evolution from __thousands of unique, inconsistent, insecure, unidirectional code-based interfaces__ to that of a __single, standardized, secure, server-side, symmetric (bidirectional), service-based, master data model-driven interface__.*   

### Technical
For a technical overview of the VistA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)

### Cloud-based services

The VistA Adaptive Maintenance (VAM) project leverages the VistA Data Project's master data model-driven interface to VistA data, and provides a cloud-based roadmap and software for maintaining VistA and the VA workflows it supports using straightforward off-the-shelf commercial cloud services and microservices. VAM will be deployed within the VA’s Enterprise Cloud using Amazon Web Services.  

For the current state of VistA's migration to centralized cloud-based services, see the VistA Adaptive Maintenance project here: http://vistaadaptivemaintenance.info/



