---
layout: post
title: Introduction
author: rafael
---

The VISTA Data Project is a Federal inter-agency health innovations project funded by the Veterans Administration (VA) to 

> provide a single comprehensive security-enabled read/write data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 

<img style="padding-left: 5em" src="/assets/vdp-simple3.png"/>


What does this mean? 

<!--more-->

From technical details, [read on ...](https://github.com/vistadataproject/documents).


## Objective

The objective of this project is to prototype and demonstrate the exposure, analytics, and automation of VA VISTA metadata using modern, machine-processable, web-centric metadata standards, providing a single comprehensive security-enabled read/write data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 


## Background

The Veterans Health Administration (VHA) is the largest integrated healthcare delivery system in the United States with over 1,700 sites of care serving 8.76 million Veterans. The mission of VHA is to honor America's Veterans by providing exceptional healthcare services lifelong for all veterans in need, and to provide the highest quality care, everywhere.

#### What is VISTA?
The Veterans Information Systems and Technology Architecture (VISTA)1 is a nationwide, comprehensive patient-centric integrated inpatient-outpatient Electronic Health Record (EHR) designed for and by VA clinicians to support all VHA clinical and business functions, and manages all veteran healthcare data and transactions. VISTA’s database is the Congressionally-designated authoritative data source for all Veterans health care delivery throughout the United States.  VISTA is production-proven for over thirty years, and is familiar to and has been used by 65% of all physicians in the United States.  VISTA is purpose-built for VHA and contains over three decades of institutional know-how of all business processes and patient care protocols of the VHA, in addition to over thirty years of patient data, and currently continues to grow at a rate of over one million additional lab tests, medication orders, imaging studies, and documents each day.  The cumulative knowledge and data stored in VISTA today is in the hundreds of billions of facts in structured, computable (but nonstandard) form. VISTA is also the evidence-based data engine that continuously validates all data and transactions (over 50 million real-time quality and safety checks on all patient care data and transactions each day) and is thus an essential tool in supporting VHA’s mission of consistently and reliably providing the safest, highest quality, lifelong care for all veterans, everywhere. VISTA has received Presidential awards for all these accomplishments, and continues today to consistently rank highly in national surveys by physicians for user satisfaction and for supporting high quality care2.

#### Congressional Mandate:  Computable Real-time Health Data Exchange
In order to meet changing clinical and regulatory requirements VA must continuously evolve VISTA.  The requirements of Public Law 113-066 (P.L. 113-066), SECTION 713 – “ELECTRONIC HEALTH RECORDS OF THE DEPARTMENT OF DEFENSE AND THE DEPARTMENT OF VETERANS AFFAIRS,” of the National Defense Authorization Act (NDAA) for Fiscal Year (FY) 2014 state that by December 31, 2016, VA must achieve an interoperable EHR with an integrated display of data with the Department of Defense (DoD) and private sector providers. The interoperable EHR must exchange all relevant health care data between DoD and VA computable in near real time.

__Meaningful Use is Not Computable Data__

This NDAA Congressional mandate for VA-DoD EHR interoperability is to a higher standard of interoperability than required for private sector EHRs under the U.S. Health and Human Services Health Information Technology (HIT) Meaningful Use (MU) incentive program. Meaningful Use Stage 3 certification3 (the latest version as of 2015) requires that an EHR shall be capable viewing, downloading, or transmitting a specially-formatted continuity of care document (CCD) from another EHR within four days of service for at least 50% of transitions of care4.  The information content of the CCDs, however, is inconsistent between implementations leading to unpredictable data quality 5, rendering the data non-computable. Meaningful Use standards thus provide only a fraction of the information in the EHR (only specific documents) only a fraction of the time (50% of transitions) and are not computable (view-only) nor real-time (four days latency).  The VA and DOD are currently meet a far higher standard of interoperability than this Meaningful Use standard by virtue of use of the Joint Legacy Viewer (JLV).


__Metadata Enables Computable Data__

To meet the more stringent Congressional NDAA mandate for the computable exchange of data, both VA and DoD require precise, granular, machine-computable definition of the data and metadata across all their authoritative primary source information systems at the data element level, not at the document-level. VA and DoD therefore need to future-enable their EHR data by using modern, machine-processable metadata standards to express the data within all their existing diverse EHR systems. Such a metadata-centric approach was recommended by the President’s Council of Advisors on Science and Technology in their Report to the U.S. President to realize the full potential of Health Information Technology to improve healthcare for Americans6.

The DoD’s Defense Health Agency (DHA) has successfully demonstrated a modern metadata-centric approach to exposing and managing the data in DHA’s authoritative clinical information system, the Composite Health Care System (CHCS), which, like the VISTA database in VHA, contains virtually all of the health agencies’ structured clinical data. (DHA has a separate database for documents, which are all unstructured). This project was the Transition Application Plan Support (TAPS) and was carried out at the Pacific Joint Information Technology Center (PJITC). The objective of TAPS was to support the transition of all CHCS systems and data to an industry-standard, machine-processable metadata representation in support of migration of all CHCS data for their future architecture. The TAPS project successfully demonstrated translation of a live CHCS system and all its data and metadata in fully machine-processable form using the Linked Data standard. 

#### Federal Government: A Linked Data Future
Linked Data7, also known as the Resource Description Framework (RDF), is the World Wide Web Consortium (W3C)8 Internet standard for representing machine-processable structured data and metadata on the web, and enables distributed, heterogeneous data query and integration at web scale. The world’s largest search engines all use a common RDF model to structure and index the data within the billions of web pages to support semantic search across all structured data on the web.9 Other Federal agencies have adopted Linked Data (RDF) to support master data management including the National Library of Congress to index and search all published works10, the U.S. National Library of Medicine to index and catalog the world’s largest collection of clinical and lifesciences publications11, and the U.S. HealthData.gov to publish thousands of public structured health datasets 12.  With this convergence of the federal health agencies on this common metadata standard, this means patient data can be linked across agencies and also to a wealth of health-related resources.


#### VISTA Data: A Linked Data Approach

The VA VISTA Metadata Audit, Analytics, and Automation project intends to use the knowledge and expertise gained by DoD through the TAPS project as a springboard from which to prototype a new, common, shared interagency approach for machine-processable metadata management for current operational systems in VA and DoD using modern, international, web-standard, web-scale representation. 

VHA will be converging to the DHA TAPS approach in the ongoing efforts in Pacific JITC to support a common Linked Data (metadata) approach to enterprise metadata management, and support convergence on metadata standards and master data management between departments. The strategic advantage for VHA to collaborate with DHA at this close technical level is specifically to leverage the expertise of DHA in its TAPS work on DoD’s CHCS and to replicate this for VA’s VISTA.  This will allow VHA and DHA to converge on this metadata-centric approach, and enable the departments to use shared tooling and expertise going forward.

The objective of this project is to develop and demonstrate repeatable, scalable, automation of metadata management across all VA VISTA systems and between VA-DoD clinical systems. This project supports many other benefits and goals specific to each agency as they move in their respective directions. However, the need for first establishing enterprise automation of metadata and master data management within and between both organizations is a common requirement to achieve computable interoperability today and into the future.




1. VISTA Overview: http://www.vistapedia.com/index.php/What_is_VistA_Really
2. Medscape EHR Report 2014   http://www.medscape.com/features/slideshow/public/ehr2014?
3. Meaningful Use Stage 3 Certification:  https://www.federalregister.gov/articles/2015/03/30/2015-06612/2015-edition-health-information-technology-health-it-certification-criteria-2015-edition-base. .
4. http://healthitinteroperability.com/news/the-heart-of-stage-3-meaningful-use-requirements/11052015
5. Scorecard for Meaningful Use data quality:  http://ccda-scorecard.smartplatforms.org/static/ccdaScorecard
6. President’s Council of Advisors on Science and Technology (PCAST): Report to the President: Realizing the Full Potential of Health Information Technology to Improve Healthcare for Americans.  https://www.whitehouse.gov/sites/default/files/microsites/ostp/pcast-health-it-report.pdf
7. Linked Data Standard http://www.w3.org/standards/techs/linkeddata
8. World Wide Web Consortium http://www.w3.org/
9. World wide web schema and semantic search https://en.wikipedia.org/wiki/Schema.org
10. Library of Congress Linked Data Service http://id.loc.gov/techcenter/searching.html
11. National Library of Medicine Linked Data Service https://id.nlm.nih.gov/mesh
12. Healthdata.gov Linked Data sets  http://www.healthdata.gov/dataset
