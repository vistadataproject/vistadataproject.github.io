---
layout: default
title: VistA Data Project - Continuity of Veteran Data
---

![vdp-iceberg -width95](https://github.com/vistadataproject/documents/blob/master/images/src/iceberg/iceberg.png)

# VISTA Data Project

The Veterans Information Systems Technology Architecture ([VistA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated longitudinal  clinical, business, and administrative information system that has supported the operations of the 1200+ VA hospitals and clinics nationwide for the past 35 years.  [ [VistA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista) ]. 

The 130 VistA systems in operation today encapsulate over three decades of VA institutional knowhow and Veteran data, which is necessary preserve - in fully computable form -  for the lifetime and continuity of care for all Veterans - which could be many decades to come.  

VistA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  

In the VistA Data Project,  VistA's native operational clinical and business data model - the VistA Data Model -  is comprehensively exposed, enriched, and operationalized as a modern web-standard, server-side interface for all clinical operational VistA data. The VistA Data Model is in turn normalized across all local VistA systems to create a national, standardized Master Veteran Data Model (MVDM), which allows secure read-write transactions across all VA VistA systems with a single master model-driven mechanism, MVDM Services: 

<br><br>
![vdp-transition](https://github.com/vistadataproject/documents/blob/master/images/vdp-transition-20170607d.png)

*The figure above summarizes the evolution from __thousands of unique, inconsistent, insecure, unidirectional code-based interfaces__ to that of a __single, standardized, secure, server-side, symmetric (bidirectional), service-based, master data model-driven interface__.*   
__For a technical overview__ of the VistA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)


## Towards centralized, cloud-based services

The VistA Adaptive Maintenance project leverages the VistA Data Project's master model-driven interface to VistA, and provides a cloud-based roadmap and software for maintaining VistA and the VA workflows it supports using straightforward off-the-shelf commercial cloud services and microservices.  

For the current state of VistA's migration to centralized cloud-based services, see [VistA Adaptive Maintenance](http://vistaadaptivemaintenance.info/)



