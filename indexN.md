---
layout: default
title: Home
---



# VISTA Data Project

The Veterans Information Systems Technology Architecture ([VISTA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated longitudinal  clinical, business, and administrative information system that supports the operations of over 1200 VA hospitals and clinics nationwide.  

The VISTA Data Project is a data-centric, model-driven approach to VA master data management, interfacing, and security.  VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form. 

Now, for the first time, this VISTA Data Model (VDM) will be comprehensively represented and then normalized to produce a national, standardized Master Veteran Data Model (MVDM). An operationalized MVDM will enable a single, secure, symmetric read-write interface for every VISTA and through _emulation_ will enforce greatly enhanced security for remote procedure call (RPC) clients such as CPRS. 

The following figure summarizes the evolution of VISTA interfacing from __thousands of unique, inconsistent, insecure, unidirectional code-based legacy interfaces__ to a __consistent, secure, backward-compatible, web-client-enabling, symmetric model-driven service interface__ ...

![vdp-transition -width70](assets/vdp-transition-MayPres.png)

<br>

__Strategic Benefits__:
  * New, maintainable veteran care server based on mainstream technology
  * New web and mobile clients enabled with mainstream technology
  * Current clients (CPRS/JLV) supported and enforce VA Care coverage
  * May now safely incrementally retire legacy MUMPS VISTA [spaghetti]

<br>

Operationalizing MVDM migrates VISTA from a spaghetti of MUMPS code to a modular, model-backed, backward-compatible server ...

![vdp-modular-server -width70](assets/vdp-modularserver-MayPres.png)

<br>

Data Modeling is incremental starting with 100% coverage of all VISTA data in web-standard JSON and moving up to a normalized master model for the functionality used by CPRS, VISTA's client ...

![vdp-data-access -width70](assets/vdp-data-access-MayPres.png)
