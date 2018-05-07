---
layout: default
title: VAM Architecture 
---

__Note:__ The following is from the _PWS Response_. It is expected to evolve as the project matures.

# The Veteran Integrated Care Services (VICS) Architecture and Development

Unlike VistA which has few common motifs or utilities, each VICS will follow common patterns and maximize the use of shared utilities. The VICS Architecture specifies the common structure and environment for every VICS.

The PWS and RTEP list similar requirements for all four in-scope VICSs including model development, RPC emulation and VistA Synchronization. Such shared requirements are addressed in this architecture and development section.

The following diagram shows the components and applications involved when a VICS replaces the functionality of a VistA domain. The components depicted in blue (RPC Router, RPC Emulator, VPR Emulator, a REST interface, a service interface, and the VICS Service) are those that the Team will develop in the Project. Each component will be in Node.js-based, NPM-installable JavaScript and developed without MUMPS.

![VAM Architecture](images/vdp-vista-vics-v3.png)


VICS development by the Team will involve the following tasks:

## A. Generation of Native Data Models from FileMan

Most of a VistA’s Native Data Model (VistA Data Model) is defined in the Data Dictionary of FileMan, VistA’s proprietary, MUMPS-based data store. Additional model definitions are in FileMan configuration files that define triggers, indexes, and keys. 

In this Project, a VistA Data Model will be represented in JSON/JavaScript that surfaces the model’s classes, properties, triggers and indexes in a web-standard, Node.js-compatible, computable form. This representation will be automatically generated from the FileMan Data Dictionary and additional configuration files. The Native Model of a typical VistA has over 2,500 classes and 65,000 properties. 

There are as many Vista Data Models as there are VistAs as each deployed VistA has unique types of data.  All 130 VA VistAs, however, have a common subset of data to support national clients and applications. This subset, referred to as a Master VistA Data Model (MVDM) in this document, is the foundation for the data model for each VICS to be developed in the Project.

## B. Refine VistA Data Models for VICSs

The Master VistA Data Model represents over thirty-five years of incremental development which produced numerous redundancies and inconsistencies. By contrast, for use by modern clients and to ease RPC emulation, the data and model of a VICS must be clear and easy to use. To accomplish this, the Team will build a VICS Data Model that will refine relevant classes of the Master VistA Data Model using the following guidelines:

Guideline | Description 
--- | ---
Create Global Properties for Common Concepts | For example, a pointer to a Patient object will be called “patient” whether that property belonged to a Prescription or Allergy or Problem object. In the incrementally built Native Model, such a property could be called “patient_name”, “pname”, “allergyPatient” and a range of other variations.
Remove Deprecated Properties | For example, the Native Model for Allergy has a property to denote whether a paper chart was “marked”. This came from the time of paper charts and is no longer used.
Use Common Forms where Appropriate | This differs from the incrementally made Native Model where Problem object removal involves marking it as “hidden” while an Allergy is removed by marking it as “entered in error”.
Avoid Redundancy | The Native Model has many cases of the same data in different places or data spread over many objects which should be organized into a single object.
Add Missing Properties | For example, unlike Problem or Vital or most other data, Allergy in Native Model does not record where an allergy observation was made. Location can be added to an Allergy VICS Model as an optional property for use by newer clients. 

A VICS Data Model will share the same data model format (JSON/JavaScript) as the Common Native Model.  Each VICS Data Model class will be sufficiently defined to allow automatic translation between any VICS object and the native objects it refines. Such automatic translation guarantees backward compatibility between FileMan resident data and equivalent VICS data and will support selective write-back to VistA of VICS data.

Besides adding clarity and enabling automatic translation to and from FileMan data, each VICS Data Model will categorize information to enable novel security policies and to highlight the veteran specific nature of VA data:

Categorization | Examples | Enables
--- | --- | ---
Patient data versus metadata | A patient’s vital measurement from the definition of a vital type (“height”, “weight”) | Novel Access Control policies that focus on controlling access to Patient information
VA specific data versus standard data | stop codes, eligibility information, health factors, service rated disabilities and period of service | Measurement of how much VA data is specific to VA and not covered by industry wide standards such as FHIR or by COTS software

## C. Development of Common Utility Services

A VICS does not re-implement common functionality but reuses utilities and common services it shares with other VICSs.  The Team-will develop Common Utility Services to include:

Utility Service | Description 
--- | ---
Change Events | A client can register to be informed of changes to data in the system. For example, that a Problem has been entered for a patient.
User Authentication | Support for “single sign on” across VICSs and VistA.
Audit Trails | Tracking who is accessing or changing information in the system as well as where and when that activity occurred.
Time Management | Support for time zones. While each VistA is in one zone, a single national VICS spans time zones.
Location Management | Including the workload (“DSS” and “Credit Stop”) support intrinsic in VistA’s broad concept of location. A VICS must be aware not just of physical locations but will need to replicate the “personal locations” configured in all 130 VistAs.
Identifier Normalization | Mapping between local identifiers specific to one of 130 VistAs into new or pre-existing nationally unique identifiers.
Terminology/Concept Management | Covering the VistA Lexicon, Drug file, Allergen files and other concept “meta data” from VistA.
Parameter Access | Some VistA domain functionality is heavily affected by parameter settings. Appropriate parameters need to be available to equivalent VICSs.

## D. Enable a Portable VICS Interface

A client of a VICS will not have direct access to its objects.  Instead, it will use a “VICS Interface” that provides selective access to a set of service operations. Invoking an operation such as “create observed allergy” would lead to multiple changes across many objects.

For new browser and mobile clients, a VICS Interface will be accessible over REST.  Traditional clients such as CPRS and JLV access the interface indirectly through RPC and VPR Emulators described below.

Leveraging Common Utility Services, the Team will deliver NPM-packaged, Node.js implementations of VICS Interfaces that manage VICS Data Model defined objects.

As required by the PWS, every VICS Interface can be reimplemented (“ported”) over “a commercial cloud-based EHR solution”. After portation, all VICS client access will work as As required by the PWS, every VICS Interface can be reimplemented (“ported”) over “a commercial cloud-based EHR solution”. After portation, all VICS client access will work as before. CPRS will still work based on emulation and new clients will work over REST.

## E. Emulate RPCs

In order to support CPRS and other RPC-using clients, a VICS needs to implement relevant RPCs in a process called RPC Emulation. RPC Emulation is a thin layer over the service interface of a VICS that performs the following functions:
* Allows the VICS to be tested using the same “VistA Domain Test Suite” used to establish the behaviors of traditional VistA. Such a “dual-use” test suite ensures that the VICS fully reproduces traditional behaviors (see “Automated Testing” below);
* Prevents code injection and other security problems present in VistA’s RPC implementations by enforcing a machine-readable RPC Definition that covers all aspects of an RPC. Such a comprehensive definition will significantly enhance VistA’s under-defined RPC Definition file, 8994. Besides enhanced security, such a definition will allow the automatic generation of improved RPC documentation;
* Categorizes RPCs into those that READ system data and those that CHANGE the system in some way. It also distinguishes those affecting a patient’s record (“Patient RPC”) from those dealing with metadata such as lists of drugs or locations (“Meta RPC”). These distinctions present an opportunity for new security policies that enforce greater control on access without requiring changes in traditional clients such as CPRS; and
* Distinguishes utility RPCs, e.g., database locking and calculation performing RPCs.

## F. Emulate Virtual Patient Record RPC

The Virtual Patient Record (VPR) RPC is an RPC in name only. Unlike a traditional RPC which performs a very particular action and ranges over a small subset of VistA data, the VPR RPC allows a wide range of patient data to be queried. A typical RPC would be emulated by one VICS. The VPR RPC will be emulated in pieces across each VICS. This emulation will be implemented in a “VPR Emulator” which will emulate the XML form of the VPR, the only form used by JLV and other production VA applications.

## G. Use Node.js Compatible, Cloud-based NoSQL Data Storage

Every VICS will use a shared Node.js compatible, mainstream JSON document store (“VICS Data Store”). The first implementation will use MongoDB, a mainstream choice for such stores with multiple cloud-hosting options.  During the Project, support will be added for native cloud vendor stores such as Microsoft Azure’s Cosmos DB and Amazon’s DynamoDB.

FileMan is a noSQL store. Backed by Native Model definitions, its data can be transferred with full fidelity to and from the VICS Data Store. Such capability is needed in VICS development to rehouse relevant metadata from local VistAs to a VICS, to seed a VICS with functional data stored in VistAs and, where necessary, to write data back to local VistAs.

## H. Develop a RPC Router

Currently any RPC invoked by CPRS goes directly to the VistA of that CPRS. Migrating parts of VistA to a set of VICS requires development of an RPC Router to sit between CPRS and VistA. Such router will direct relevant RPCs to a VICS while passing all other RPCs to one of 130 VistAs.

An NPM-installable, Node.js RPC Router will also have the following capabilities:
* Processing any RPC supported by the VistA RPC Broker Protocol;
* Auditing not only VICS-supported RPCs but all RPCs sent by CPRSs, which is missing from VistA today, a significant addition to Veteran data security;
* Centralizing the enormous volume of “utility” RPCs repeatedly called by CPRS.  Such RPCs tell the time or configure a screen size.   Centralizing would remove a burden from local VistAs without changing CPRS in any way and would reduce the resources required to service RPC traffic;
* Executing a single RPC in both a VistA and a VICS; and
* Separating Client Parameter Management from VistA.

## I. Implement Backward Synchronization Service

VistA is a tangled web of interdependent functionality. As VICS is deployed, all functionality left behind in VistA must continue to operate.  To enable this continued operation, VistA must be synchronized with functionality migrated to a VICS upon which it continues to be dependent.

Interdependencies in VistA include: Document macros that pull data from other VistA functions; Clinical Reminder indexes (PXRMINDX) that index the data of other functions; data written to temporary storage (^TMP) for use by other functions; and protocol handlers that allow functions to listen to activity in each other.

A service will be developed to provide such backward synchronization. It will be a pure JavaScript, Node.js based plugin that runs inside a VistA.  It will leverage Intersystem Cache support for in-process Node.js. and be deployed as one or more NPM-based, VistA patches. 

Synchronization will be enabled by Common Utility Service support for Change Events and write-back support in VICS objects. 
