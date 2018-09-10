---
layout: default
title: VistA Data Project - Continuity of Veteran Data
---
![vdp-iceberg -width95](assets/vdp-iceberg.png)

### VISTA Data Project

The U.S. Veterans Information Systems Technology Architecture ([VISTA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated nationwide clinical, business, and administrative information system which has supported the operations of the 1200+ Veterans Health Administration hospitals and clinics across the United States for over three decades. (See: [VISTA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista)). 

The 130 VISTA systems in operation today contain over three hundred million veteran-years of health data, and continues to grow at the rate of over a million new clinical documents, lab tests, and radiographs each day.  The VA Records Retention Schedule ([PDF](https://www.va.gov/vhapublications/rcs10/rcs10-1.pdf)) Section 6000.2b ([text](https://github.com/vistadataproject/vistadataproject.github.io/blob/master/va-records-retention-2017.md#belectronic-final-version-of-health-record))  mandates that the __veterans complete health record must be available in digital form for 75 years after the last episode of care.__  Comprehensive future-proof access to VISTA data is thus necessary to provide continuity of veteran care now, and for many decades into the future.  

VISTA's data is currently, however, inconsistently defined within and across each system, and is further obfuscated behind thousands of legacy cryptic code interfaces, making it challenging to access or manage VISTA data. VISTA's internal operational data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically within each system over the past 35 years, but has not been exposed and represented in modern, computable form.  

*__In the VISTA Data Project__*,  *VISTA's* native, internal operatonal data model is incrementally exposed, enriched, and operationalized using a modern, computable, industry-standard data model. This *VISTA Data Model* is in turn normalized across all *VISTA* systems to create a national Master Veteran Data Model (MVDM), which provides secure read-write access for all data in all *VISTA* systems using a single, modern, maintainable, industry-standard model-driven services interface.

![vdp-transition](assets/vdp-transition-20180805.png)


*The figure above summarizes the evolution of access to VISTA data: From __thousands of unique, inconsistent, insecure, unidirectional, cryptic legacy code-based interfaces__ to that of a __single, secure, modern, service-based, industry-standard, normalized, master veteran data-model (MVDM)-driven interface__.*    For complete documentation on the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background#vista-data-project)


### VISTA Data ... Ready for the Cloud

Leveraging the Master Veteran Data Model (MVDM, above), the VISTA Adaptive Maintenance project provides a cloud-based roadmap and software for maintaining VISTA and the VA workflows it supports using web-standard, model-driven, commercial cloud services and microservices.  For information on VISTA Cloud Services, see [VISTA Adaptive Maintenance](http://vistaadaptivemaintenance.info/)




