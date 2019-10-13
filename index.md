---
layout: default
title: VistA Data Project - Continuity of Veteran Data
---
![vdp-iceberg -width95](assets/vdp-iceberg-2019.png)

# VISTA Data Project

__*The VISTA Data Project provides a comprehensive cloud-based solution for access, interfacing, security, and management of all Veteran  datq within the VA's VistA systems*__


The U.S. Veterans Health Information Systems Technology and Architecture ([VISTA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs national integrated clinical, business, and administrative information system supporting the operations of 1500+ Veterans Health Administration hospitals and clinics across the United States. (See: [VISTA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista)). 

The 130 VISTA systems in operation today contain over three hundred million veteran-years of health data spanning nearly four decades, and continues to grow at the rate of over a million new clinical documents, lab tests, and radiographs each day.  The VA Records Retention Schedule (Section 6000.2b: [pdf](https://www.va.gov/vhapublications/rcs10/rcs10-1.pdf) [text](https://github.com/vistadataproject/vistadataproject.github.io/blob/master/va-records-retention-EHR-2017.md#belectronic-final-version-of-health-record) )  mandates that the *veterans complete health record must be available in digital form for 75 years after the last episode of care.*  Comprehensive access to VISTA data is thus required to provide continuity of veteran care now, and for decades into the future.  

VISTA's data is currently inconsistently defined within and across each system, with access limited to piecemeal extractions through thousands of cryptic code interfaces, making it challenging to understand, access or manage VISTA data. VISTA's internal operational data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically within each system over the past 35 years, but has never been exposed in a modern, computable form.  

*__In the VISTA Data Project__*,  *VISTA's* native, internal operational data model is fully exposed, enriched, and operationalized using a modern, computable, industry-standard form. This *VISTA Data Model* is in turn incrementally normalized across all *VISTA* systems to create a single national Master Veteran Data Model (MVDM), which provides secure read-write access for all data in all *VISTA* systems using a single, modern, maintainable, industry-standard model-driven services interface.

![vdp-transition](assets/vdp-transition-20180805.png)


*The figure above summarizes the evolution of access to VISTA data: From __thousands of unique, inconsistent, insecure, unidirectional, cryptic legacy code-based interfaces__ to that of a __single, secure, modern, service-based, industry-standard, normalized, master veteran data-model (MVDM)-driven interface__.*    For complete documentation on the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background#vista-data-project)





