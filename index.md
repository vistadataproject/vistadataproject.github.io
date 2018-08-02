---
layout: default
title: VistA Data Project - Continuity of Veteran Data
---
![vdp-iceberg -width95](assets/vdp-iceberg.png)

### VISTA Data Project

The Veterans Information Systems Technology Architecture ([VISTA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated longitudinal  clinical, business, and administrative information system that supports the operations of the 1200+ Veterans Health Administration (VHA) hospitals and clinics across the United States. (See: [VISTA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista)).

The 130 VISTA systems in operation today contain over three hundred million veteran-years of health data, and continue to grow at the rate of over a million new clinical documents, lab tests, and radiographs each day. The [VHA Records Control Schedule](https://www.va.gov/vhapublications/rcs10/rcs10-1.pdf) (Section 6000.2b, page 185) requires that __the veterans complete electronic health record must be available digitally for 75 years__.  It is thus necessary to future-proof access to VISTA's data to provide continuity of veteran care now, and for decades into the future.  

VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically within each system over the past 35 years, but has not been exposed and represented in modern, computable form.  VISTA's data thus remains uniquely defined, opaque, and challenging to access in each of these distinct systems.

*__In the VISTA Data Project__*,  *VISTA's* native operational clinical and business model - the *VISTA Data Model* - is comprehensively exposed, enriched, and operationalized using a modern, computable, web-standard data model. This *VISTA Data Model* is in turn normalized across all *VISTA* systems to create a national, normalized Master Veteran Data Model (MVDM), which allows secure read-write transactions across all *VISTA* systems using a single model-driven mechanism, MVDM Services:

<br><br>
![vdp-transition](assets/vdp-transition-20180726.png)



*The figure above summarizes the evolution of access to VISTA data: From __thousands of unique, inconsistent, insecure, unidirectional, cryptic legacy code-based interfaces__ to that of a __single, secure, modern, service-based, industry-standard, normalized, master veteran data-model (MVDM)-driven interface__.*    For complete documentation on the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background#vista-data-project)


### VISTA Data ... Ready for the Cloud

Leveraging the Master Veteran Data Model (MVDM, above), the VISTA Adaptive Maintenance project provides a cloud-based roadmap and software for maintaining VISTA and the VA workflows it supports using web-standard, model-driven, commercial cloud services and microservices.  For information on VISTA Cloud Services, see [VISTA Adaptive Maintenance](http://vistaadaptivemaintenance.info/)




