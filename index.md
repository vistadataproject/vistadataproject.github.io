---
layout: default
title: Home
---



# VISTA Data Project

The Veterans Information Systems Technology Architecture ([VISTA](https://en.wikipedia.org/wiki/VistA)) is the U.S. Department of Veterans Affairs integrated longitudinal  clinical, business, and administrative information system that supports the operations of over 1200 VA hospitals and clinics nationwide.  

The VISTA Data Project is a data-centric, model-driven approach to VA master data management, interfacing, and security.  VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form. 

Now, for the first time, VA's native transactional clinical and business data model - the VISTA Data Model -  will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface for all clinical operational VISTA data. 

The VISTA Data Model is in turn normalized across all local VISTA system data models to create a national, standardized Master Veteran Data Model, allowing read-write transactions across all VA VISTA systems with a single, secure, veteran-centric, model-driven mechanism.

<br>

__Key Features__:
  * VHA-DHA Interagency project
  * Modernization Proof of Concept
  * Leverages DHA-developed technology
  * Formalizes Veterans Care Model
  * Migrate Server; Support CPRS/JLV
  * Execution  2016-2017

<br>

![vdp-transition](assets/vdp-transition-MayPres.png)

<br>

*The figure summarizes the evolution of VISTA interfacing from __thousands of unique, inconsistent, insecure, unidirectional code-based legacy interfaces__ to that of a __single, industry-standard, secure, server-side, symmetric model-driven service interface__.*

<br>

__Strategic Benefits__:
  * New, maintainable veteran care server based on mainstream technology
  * New web and mobile clients enabled with mainstream technology
  * Current clients (CPRS/JLV) supported and enforce VA Care coverage
  * May now safely incrementally retire legacy MUMPS VISTA [spaghetti]
  * (Some) Clinical Domain Services may be implemented over COTS

<br>

VISTA migrates from a spaghetti of MUMPS code to a modular, model-backed backward compatible server ...

![vdp-modular-server](assets/vdp-modularserver-MayPres.png)

<br>

Data Modeling is key starting with 100% coverage of all VISTA data in web-standard JSON to a normalized master model for the functionality used by CPRS, VISTA's client ...

![vdp-data-access](assets/vdp-data-access-MayPres.png)
