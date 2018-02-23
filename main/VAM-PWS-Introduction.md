VAM PWS Introduction

## Introduction

The Veterans Information System Technology Architecture (VISTA) is the integrated, authoritative, comprehensive, longitudinal veteran health information system of the U.S. Department of Veterans Affairs (VA). For the past thirty-five years, 130 VISTA systems have provided all clinical, financial, and administrative functions to support all clinical and administrative operations of over 1700 VA hospitals and clinics throughout the United States. VISTA is thus a composite of an integrated electronic clinical record (“EHR”), and a federal health systems management and resource management (“ERP”) platform.  From over three decades of continuous operation and refinement, VISTA has become very specific to the needs of Veteran care, benefits, business processes, government compliance, and regulatory reporting.

VA leadership announced in June 2017 that VA would replace VISTA with a COTS-based EHR ("EHRM").   Key to a successful VISTA migration is properly describing and distinguishing the configuratoin (metadata) of each of the 130 unique VISTA systems. This metadata describes the specific workflows of the VA including governemnt mandated policies, interface descriptions between VISTA and other systems, and details of how individual medical centers and physicians use VISTA in the process of care.

In order to assure continuity of VA- and Veteran-speific clinical and business functionality it is necessary to examine the metadata of all 130 unique VISTA systems to isolate local metadata from national standard metadata, and to distinguisch Veteran and  VA-specific functionality from functionality available in generic COTS systems.

Comprehensive migration to EHRM will be greatly facilitated by (1) Centralizing the metadata of all 130 VISTAs in a single cloud based repository and (2) Analyzing the metadata to support  both confiuration of EHRM and in supporting VA-spcecific functionality that cannot be provided by a generic commercial systems. The metaata should be housed in a Fedramp cerfified cloud both to ensure security and provide appropirate access to releveant personnel.

The accuracy of the data transferred to the central metadata repository must be comprehensively assured. The best way do this is to show that key current VISTA clients such as CPRS can run effectily against both the centralized copy of metadata and and aginst the original local VISTA.

Thus, in order to support the EHRM transition, the VA Adaptive Maintenance project will:

1.  Surface specific VISTA/CPRS clinical function and business logic, and emulate with an industry-standard, model-driven, secure service interface with no legacy Massachusetts General Hospital Utility Multi-Programming System (MUMPS) code dependencies while keeping CPRS operational (supporting both backwards and forwards compatibility).
2.  Provide enhanced Veteran data security via (1) access control, (2) auditing, and (3) Remote Procedure Call (RPC) content encryption so that CPRS is adequately secured well beyond the level currently available in VISTA, enabling seamless, secure migration.

3.  Address any security vulnerabilities that do not meet the enhanced security requirements.

4.  Provide a foundation to more easily migrate to a commercial cloud-based EHR solutions enterprise wide
5. Enhance ability to implement   open-source Government Off The Shelf (GOTS), and Commercial Off The Shelf (COTS) applications enterprise wide within a cloud-based, commercial EHR environment.
6.  Reduce need for site by site accommodations for enterprise wide releases of selected functionality
7.  Reduce costs by reducing site specific technical support needs.
If this project is not implemented, migration of VISTA to support newer commercial offerings, and to provide required urgent security to veterans data, will be impeded. This will adversely impact Veterans’ access to healthcare services, and congressional mandates for VA IT modernization will not be met in a timely manner.