---
layout: default
title: VistA Data Project - Continuity of Veteran Data
---
![vdp-iceberg -width95](assets/iceberg.png)

# VISTA Data Project

The Veterans Information Systems Technology Architecture ([VistA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated longitudinal  clinical, business, and administrative information system that has supported the operations of the 1200+ VA hospitals and clinics nationwide for the past 35 years. (See: [VistA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista)).

The 130 VistA systems in operation today encapsulate over three decades of VA- and Veteran-specific know-how and data. It is necessary preserve all this in fully computable form for the lifetime and continuity of care for all Veterans - which is for many decades to come. 


VistA's data, however, is currently uniquely defined, opaque, and challenging to access in each of these distinct systems.  VistA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically within each system over the past 35 years, but has never been comprehensively exposed and represented in modern, computable form.  

__In the VistA Data Project__,  VistA's native operational clinical and business model - the VistA Data Model -  is comprehensively exposed, enriched, and operationalized as a modern, web-standard, computable, server-side, model-driven interface for all VistA data. The VistA Data Model is in turn normalized across all VistA systems to create a national, standardized Master Veteran Data Model (MVDM), which allows __secure read-write__ transactions across __all__ VistA systems with a __single__ master-model-driven mechanism, MVDM Services: 

<br><br>
![vdp-transition](assets/vdp-transition-20170607d.png)

*The figure above summarizes the evolution from __thousands of unique, inconsistent, insecure, unidirectional code-based interfaces__ to that of a __single, secure, server-side, symmetric (bidirectional), service-based, web-standard, master data model-driven interface__.* For more details on the VistA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)

## Supporting cloud-based veteran services

Leveraging the VistA Data Project's master model-driven service interface to VistA, the VistA Adaptive Maintenance (VAM) project provides a cloud-based roadmap and software for maintaining VistA and the VA workflows it supports using straightforward off-the-shelf commercial cloud services and microservices.


For the state of VistA's migration to centralized cloud-based services, see [VistA Adaptive Maintenance](http://vistaadaptivemaintenance.info/)



