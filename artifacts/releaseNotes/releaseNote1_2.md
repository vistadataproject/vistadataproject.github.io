---
layout: default
title: Release Note v1.2 
---

## VDP Release V1.2 (April 14th 2017)

### MVDM Management Client Upgraded (and renamed _nodeVISTAManager_)

[nodeVISTAManager](https://github.com/vistadataproject/nodeVISTAClients/tree/master/nodeVISTAManager) - and put into nodeVISTAClient's GIT so source code is obvious.

### New Services Interface

[Dev Docs](http://vistadataproject.info/artifacts/services/index.html)

### Additional Non Clinical RPCs and Parameter Service 

In VDP year 2, the non clinical RPCs used in the emulated clinical domains and CPRS sign on ("demo RPCs") will be emulated.

Category | Total | Demo | Emulated
--- | --- | --- | ---
Parameter-Only | 129 | 28 | 28
File-Only | 199 | 44 | 31

Many aspects of _VISTA_ are configured with _parameters_ using a MUMPS-based Parameter Service. V1.2 comes with a _Javascript-based Parameter Service_ which is used by applicable RPC emulations.

### Example nodeVISTA Clients
 
A new git, [nodeVISTAClients](https://github.com/vistadataproject/nodeVISTAClients) with three example clients:
  1. [rpc - problems](https://github.com/vistadataproject/nodeVISTAClients/tree/master/rpcClient)
  2. [services - problems](https://github.com/vistadataproject/nodeVISTAClients/tree/master/services)
  3. [simple event listener client](https://github.com/vistadataproject/nodeVISTAClients/tree/master/event)

### _Veterans Hospital_ Configurations

The following non clinical data (_meta data_) files were fully populated or updated.

Users and Patients:
  * User (200) (Addition of Pharmacist)
  * Patient (2) - enhanced [David Carter Patient definition](https://github.com/vistadataproject/nodeVISTA/blob/master/setup/jsSetup/patient/updatePatients.js) - Radiation Exposed/Persian Gulf War Veteran

(Local) System Configuration Data:
  * Drug (50)
  * Orderables (101.43)
  * Pharmacy Orderable Items (50.7)
  * Outpatient Site (59)
  * Pharmacy System (59.7) (Updated)

### Data Dictionary (DD) and GT/M portability upgrades

 1. Piece number in error in File #125.8, field #10
    DD entry has piece #1, should be piece #3.

 2. Syntax error at EN+14^DGRPD
    Cache allows extra spaces in a WRITE argument, GT.M does not

 3. AC cross-reference in file #8989.5 (Parameters) is not always set.
    Ensure that it is.
    * Step 1: find domain in Kernel Site Parameters
    * Step 2: find entry in Parameter Definition (file #8989.51)
    * Step 3: find entry in Parameters (file #8989.5) to be corrected:
    * Step 4: Use FileMan to Set .01 field in #8989.5 for this entry to the value of 'ksp'

 4. <Undefined> error at VALID+3^ORCACT0
    Initialize local variable ORENVIR and check that local variable XQY0 has a value

 5. Too many quotes in input transformation 52.07, 3 (QUANTITY)
    Embedded quotes need to be doubled up, but not twice...

 6. Too many quotes in input transformation 52.6, 19 (STRENGTH)
    Embedded quotes need to be doubled up, but not twice...

 7. Error in input transformation 130.03, 4 (ZIP CODE)
    Expected values are nnnnn or nnnnn-nnnn, but the latter does not match .N

 8. Error in input transformation 2100, 460.2 (VEND ZIP 2)
    Expected values are nnnnn, but 1P.E does not match that...

 9. Error in input transform 9.8, 1.4 (DATE OF %INDEX RUN)
    Input transform rejects dates after 31-Dec-1999

10. Bad Identifier in File 52 (field 108 is not an identifier)

11. Cross-reference on File #100, fields #.01 and #.02
    If this cross-reference is executed before a value has been entered for field #.02
    a <subscript> error will occur.
    Add a check for the value of field #.02 to the cross-reference in field #.01
    and add a companion-cross-reference to field #.02

12. <undefined> error in routine ORDD100.
    Add a check whether the variariable ORCACT has a value

13. Check whether global variable exists in "AD" cross-reference on file #51.41, field #15

14. Check whether field is populated in file #52, field #6
    as well as its companion-field in file #52, field #22

15. Remove unused (and conflicting) field in File #52.04, field #1
    Sub-file #52.04 contains 2 fields labeled SIG1, both assigned to piece #1.
    Remove the second instance of this definition (field #1)
